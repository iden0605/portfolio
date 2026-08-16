import { useState, useEffect, useMemo, useRef } from 'react';

const GITHUB_USERNAME = 'iden0605';
const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const DAY_LABELS = ['', 'Mon', '', 'Wed', '', 'Fri', ''];

function buildWeeks(contributions) {
  if (!contributions || contributions.length === 0) return [];

  const firstDay = new Date(`${contributions[0].date}T00:00:00`).getDay();
  const cells = [...Array(firstDay).fill(null), ...contributions];

  const weeks = [];
  for (let i = 0; i < cells.length; i += 7) {
    weeks.push(cells.slice(i, i + 7));
  }
  return weeks;
}

function monthLabels(weeks) {
  const labels = [];
  let lastMonth = -1;
  weeks.forEach((week, i) => {
    const firstReal = week.find(Boolean);
    if (!firstReal) return;
    const month = new Date(`${firstReal.date}T00:00:00`).getMonth();
    if (month !== lastMonth) {
      labels.push({ index: i, name: MONTH_NAMES[month] });
      lastMonth = month;
    }
  });
  return labels;
}

function formatDate(dateStr) {
  const d = new Date(`${dateStr}T00:00:00`);
  return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

function GithubActivity() {
  const [repoCount, setRepoCount] = useState(null);
  const [contributions, setContributions] = useState(null);
  const [error, setError] = useState(false);
  const [tooltip, setTooltip] = useState(null);
  const outputRef = useRef(null);

  const toggleTooltip = (key, x, y, text) => {
    setTooltip((current) => (current && current.key === key ? null : { key, x, y, text }));
  };

  // Dismiss a pinned tooltip when clicking anywhere outside a graph cell
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (e.target.closest && e.target.closest('.github-cell')) return;
      setTooltip(null);
    };
    document.addEventListener('pointerdown', handleOutsideClick);
    return () => document.removeEventListener('pointerdown', handleOutsideClick);
  }, []);

  useEffect(() => {
    Promise.all([
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}`).then((res) => {
        if (!res.ok) throw new Error('GitHub API error');
        return res.json();
      }),
      fetch(`https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`).then((res) => {
        if (!res.ok) throw new Error('Contributions API error');
        return res.json();
      }),
    ])
      .then(([user, contribData]) => {
        setRepoCount(user.public_repos);
        setContributions(contribData);
      })
      .catch(() => setError(true));
  }, []);

  const weeks = useMemo(() => buildWeeks(contributions?.contributions), [contributions]);
  const labels = useMemo(() => monthLabels(weeks), [weeks]);

  if (error) {
    return (
      <div className="term-output github-output">
        <p className="github-error">Couldn't load live GitHub data — check back later.</p>
        <a
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="term-link github-profile-link"
        >
          view full profile →
        </a>
      </div>
    );
  }

  return (
    <div className="term-output github-output" ref={outputRef}>
      <div className="github-stat-row">
        <div className="github-stat">
          <span className="github-stat-value">{repoCount ?? '—'}</span>
          <span className="github-stat-label">Public Repos</span>
        </div>
        <div className="github-stat">
          <span className="github-stat-value">{contributions ? contributions.total.lastYear : '—'}</span>
          <span className="github-stat-label">Contributions</span>
        </div>
      </div>

      <div className="github-graph-wrap">
        <div className="github-graph-scroll">
          <div className="github-graph">
            <div className="github-graph-months">
              {labels.map((label) => (
                <span
                  key={`${label.name}-${label.index}`}
                  className="github-month-label"
                  style={{ left: `${label.index * 17}px` }}
                >
                  {label.name}
                </span>
              ))}
            </div>
            <div className="github-graph-body">
              <div className="github-graph-day-labels">
                {DAY_LABELS.map((label, i) => (
                  <span key={i} className="github-day-label">{label}</span>
                ))}
              </div>
              <div className="github-graph-grid">
                {weeks.map((week, wi) => (
                  <div className="github-graph-col" key={wi}>
                    {week.map((day, di) => (
                      day ? (
                        <div
                          key={di}
                          className={`github-cell level-${day.level}${tooltip?.key === day.date ? ' pinned' : ''}`}
                          onClick={(e) => {
                            const cellRect = e.currentTarget.getBoundingClientRect();
                            const containerRect = outputRef.current.getBoundingClientRect();
                            toggleTooltip(
                              day.date,
                              cellRect.left - containerRect.left + cellRect.width / 2,
                              cellRect.top - containerRect.top,
                              `${day.count} contribution${day.count === 1 ? '' : 's'} on ${formatDate(day.date)}`
                            );
                          }}
                        />
                      ) : (
                        <div key={di} className="github-cell github-cell--empty" />
                      )
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="github-graph-legend">
              <span>Less</span>
              {[0, 1, 2, 3, 4].map((level) => (
                <div key={level} className={`github-cell level-${level}`} />
              ))}
              <span>More</span>
            </div>
          </div>
        </div>
      </div>

      <div className="github-footer-row">
        <a
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="term-link github-profile-link"
        >
          view full profile →
        </a>
        <span className="github-disclaimer"># public repos only, excludes work account</span>
      </div>

      {tooltip && (
        <div
          className="github-tooltip"
          style={{ left: tooltip.x, top: tooltip.y }}
        >
          {tooltip.text}
        </div>
      )}
    </div>
  );
}

export default GithubActivity;

import GithubActivity from './GithubActivity';
import { useReveal } from '../../hooks/useReveal';
import './Terminal.css';

function GithubSection() {
  const { ref, revealed } = useReveal({ immediate: true });

  return (
    <div ref={ref} className={`terminal-section reveal reveal-frame${revealed ? ' reveal-in' : ''}`} style={{ '--reveal-delay': '600ms' }}>
      <div className="terminal-titlebar">
        <span className="terminal-title-text">~/profile $ ./github.sh --contributions</span>
        <div className="window-dots">
          <span className="window-dot window-dot--red" />
          <span className="window-dot window-dot--yellow" />
          <span className="window-dot window-dot--green" />
        </div>
      </div>

      <div className="terminal-screen">
        <div className="scanlines" />
        <div className="screen-inner">
          <div className="term-content">
            <GithubActivity />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GithubSection;

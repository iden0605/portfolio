import GithubActivity from './GithubActivity';
import './Terminal.css';

function GithubSection() {
  return (
    <div className="terminal-section" data-aos="fade-up">
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

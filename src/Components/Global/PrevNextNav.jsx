import { Link } from 'react-router-dom';
import './PrevNextNav.css';

function PrevNextNav({ prevHref, prevLabel, nextHref, nextLabel }) {
  return (
    <div className="prev-next-wrapper">
      <div className="section-divider-subtle" />
      <nav className="prev-next-nav" aria-label="Previous and next">
        <Link to={prevHref} className="prev-next-link prev-next-link--prev">
          <span className="prev-next-arrow">‹</span>
          <span className="prev-next-label">{prevLabel}</span>
        </Link>
        <Link to={nextHref} className="prev-next-link prev-next-link--next">
          <span className="prev-next-label">{nextLabel}</span>
          <span className="prev-next-arrow">›</span>
        </Link>
      </nav>
    </div>
  );
}

export default PrevNextNav;

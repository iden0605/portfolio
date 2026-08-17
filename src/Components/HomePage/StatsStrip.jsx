import './StatsStrip.css';
import projectData from '../../Data/projectData';
import jobExperienceData from '../../Data/jobExperienceData';
import { skills } from '../../Data/skillsData';
import { useReveal } from '../../hooks/useReveal';

const projectCount = Object.keys(projectData).length;
const awardCount = Object.values(projectData).filter((p) => p.award).length;
const roleCount = Object.keys(jobExperienceData).length;
const techCount = Object.values(skills).reduce((sum, list) => sum + list.length, 0);
const techCountRounded = Math.floor(techCount / 10) * 10;

const STATS = [
  { value: `${projectCount}`, label: 'Projects Shipped' },
  { value: `${awardCount}`, label: 'Hackathon Awards' },
  { value: `${roleCount}`, label: 'Roles & Ventures' },
  { value: `${techCountRounded}+`, label: 'Technologies Used' },
];

function StatsStrip() {
  const { ref, revealed } = useReveal({ immediate: true });

  return (
    <div className="stats-strip" ref={ref}>
      {STATS.map((stat, i) => (
        <div
          className={`stat-chip reveal${revealed ? ' reveal-in' : ''}`}
          key={stat.label}
          style={{ '--reveal-delay': `${300 + i * 90}ms` }}
        >
          <span className="stat-value">{stat.value}</span>
          <span className="stat-label">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}

export default StatsStrip;

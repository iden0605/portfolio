import './StatsStrip.css';
import projectData from '../../Data/projectData';
import jobExperienceData from '../../Data/jobExperienceData';
import { skills } from '../../Data/skillsData';

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
  return (
    <div className="stats-strip" data-aos="fade-up" data-aos-offset="-150">
      {STATS.map((stat, i) => (
        <div className="stat-chip" key={stat.label} style={{ '--stat-delay': `${i * 90}ms` }}>
          <span className="stat-value">{stat.value}</span>
          <span className="stat-label">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}

export default StatsStrip;

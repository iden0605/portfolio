import { useState } from 'react';
import {
  LuChevronDown,
  LuGitBranch,
  LuGitMerge,
  LuSparkles,
  LuClapperboard,
  LuBookOpen,
} from 'react-icons/lu';
import './ProjectDetails.css';
import ImageModal from '../Global/ImageModal';
import TroopCarousel from './TroopCarousel';
import { useReveal } from '../../hooks/useReveal';

const TYPE_META = {
  demo:    { icon: LuClapperboard, label: 'demo',    className: 'commit-type--demo' },
  system:  { icon: LuGitBranch,    label: 'system',  className: 'commit-type--system' },
  feature: { icon: LuSparkles,     label: 'feature', className: 'commit-type--feature' },
  notes:   { icon: LuBookOpen,     label: 'notes',    className: 'commit-type--notes' },
};

function inferType(content) {
  if (content.some((item) => item.type === 'video')) return 'demo';
  if (content.some((item) => item.type === 'troop-carousel')) return 'system';
  if (content.some((item) => item.type === 'image')) return 'feature';
  return 'notes';
}

function ProjectDetailTabSection({ details, projectName }) {
  const [openIndex, setOpenIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const { ref: revealRef, className: revealClassName } = useReveal();

  const slug = projectName.toLowerCase().replace(/\s+/g, '-');
  const fileSlug = (title) => title.toLowerCase().replace(/\s+/g, '-') + '.txt';
  const hexTag = (index) => `0x${String(index + 1).padStart(2, '0')}`;

  if (!details || details.length === 0) return null;

  const toggle = (index) => setOpenIndex((current) => (current === index ? null : index));

  const renderContentBlock = (item, key) => {
    switch (item.type) {
      case 'image':
        return (
          <div className="desc-image project-detail-image-wrapper" key={key}>
            <img
              src={item.src}
              alt={`${projectName} screenshot`}
              style={{ width: item.width || '100%' }}
              onClick={() => { setSelectedImage(item.src); setModalOpen(true); }}
            />
          </div>
        );
      case 'text':
        return (
          <div className="description" style={{ textAlign: 'left' }} key={key}>
            <p>{item.text}</p>
          </div>
        );
      case 'video':
        return (
          <div key={key} style={{ maxWidth: item.width || '900px', margin: '0 auto 1rem' }}>
            <video src={item.src} autoPlay loop muted playsInline style={{ width: '100%', height: 'auto', borderRadius: '8px', display: 'block' }} />
          </div>
        );
      case 'troop-carousel':
        return <TroopCarousel key={key} items={item.items} />;
      default:
        return null;
    }
  };

  return (
    <>
      <section ref={revealRef} className={`section detail-terminal-section ${revealClassName}`}>

        <div className="detail-titlebar">
          <span className="detail-title-text">~/projects/{slug} $ git log --graph</span>
          <div className="window-dots">
            <span className="window-dot window-dot--red" />
            <span className="window-dot window-dot--yellow" />
            <span className="window-dot window-dot--green" />
          </div>
        </div>

        <div className="commit-branch-row">
          <LuGitMerge size={14} />
          <span className="commit-branch-name">main</span>
          <span className="commit-branch-sep">·</span>
          <span className="commit-branch-count">{details.length} commits</span>
        </div>

        <ul className="commit-log">
          {details.map((block, i) => {
            const type = inferType(block.content);
            const meta = TYPE_META[type];
            const Icon = meta.icon;
            const isOpen = openIndex === i;
            const isLast = i === details.length - 1;

            return (
              <li className={`commit-row${isLast ? ' commit-row--last' : ''}`} key={i}>
                <span className={`commit-node ${meta.className}`}>
                  <span className="commit-node-dot" />
                </span>

                <button
                  className="commit-header"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                >
                  <div className="commit-meta-row">
                    <span className={`commit-type-badge ${meta.className}`}>
                      <Icon size={11} />
                      {meta.label}
                    </span>
                    <span className="commit-hash">{hexTag(i)}</span>
                    <span className="commit-scope">{fileSlug(block.title)}</span>
                    <LuChevronDown size={14} className={`commit-chevron${isOpen ? ' open' : ''}`} />
                  </div>
                  <p className="commit-title">{block.title}</p>
                </button>

                <div className={`commit-body-wrap${isOpen ? ' open' : ''}`}>
                  <div className="commit-body-clip">
                    <div className="commit-body detail-cat-content">
                      {block.content.map((item, j) => renderContentBlock(item, j))}
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

      </section>

      {modalOpen && (
        <ImageModal
          src={selectedImage}
          alt={`${projectName} screenshot`}
          onClose={() => { setModalOpen(false); setSelectedImage(''); }}
        />
      )}
    </>
  );
}

export default ProjectDetailTabSection;

import { useState, useRef, useCallback, useLayoutEffect } from 'react';
import './ProjectDetails.css';
import ImageModal from '../Global/ImageModal';
import TroopCarousel from './TroopCarousel';

function ProjectDetailTabSection({ details, projectName }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const glitchTimers = useRef([]);
  const screenRef = useRef(null);
  const innerRef = useRef(null);

  const slug = projectName.toLowerCase().replace(/\s+/g, '-');
  const fileSlug = (title) => title.toLowerCase().replace(/\s+/g, '-') + '.txt';
  const hexTag = (index) => `0x${String(index + 1).padStart(2, '0')}`;

  const syncHeight = useCallback(() => {
    if (screenRef.current && innerRef.current) {
      screenRef.current.style.height = `${innerRef.current.offsetHeight}px`;
    }
  }, []);

  useLayoutEffect(() => { syncHeight(); }, [activeIndex, syncHeight]);
  useLayoutEffect(() => {
    if (!innerRef.current) return;
    const ro = new ResizeObserver(syncHeight);
    ro.observe(innerRef.current);
    return () => ro.disconnect();
  }, [syncHeight]);

  if (!details || details.length === 0) return null;

  const selectFile = (index) => {
    if (index === activeIndex || isGlitching) return;
    glitchTimers.current.forEach(clearTimeout);
    setIsGlitching(true);
    glitchTimers.current = [
      setTimeout(() => setActiveIndex(index), 150),
      setTimeout(() => setIsGlitching(false), 380),
    ];
  };

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

  const active = details[activeIndex];

  return (
    <>
      <section className="section detail-terminal-section" data-aos="fade-up">

        <div className="detail-titlebar">
          <span className="detail-title-text">~/projects/{slug} $ ls</span>
          <div className="window-dots">
            <span className="window-dot window-dot--red" />
            <span className="window-dot window-dot--yellow" />
            <span className="window-dot window-dot--green" />
          </div>
        </div>

        <div className="explorer-layout">
          <div className="explorer-sidebar">
            <div className="explorer-sidebar-label">Explorer</div>
            <div className="explorer-folder-row">
              <span className="explorer-folder-caret">▾</span>
              <span className="explorer-folder-name">{slug}/</span>
            </div>
            <div className="explorer-file-list">
              {details.map((block, i) => (
                <button
                  key={i}
                  className={`explorer-file${i === activeIndex ? ' active' : ''}`}
                  onClick={() => selectFile(i)}
                >
                  <span className="explorer-file-hex">{hexTag(i)}</span>
                  <span className="explorer-file-name">{fileSlug(block.title)}</span>
                </button>
              ))}
            </div>
          </div>

          <div ref={screenRef} className={`detail-screen explorer-content${isGlitching ? ' glitch' : ''}`}>
            <div ref={innerRef} className="detail-screen-inner">
              <div className="detail-prompt-line" key={activeIndex}>
                <span className="dp-arrow">❯</span>
                <span className="dp-cmd" style={{ '--cmd-len': fileSlug(active.title).length + 5 }}> cat {fileSlug(active.title)}</span>
              </div>
              <div className="detail-cat-content">
                {active.content.map((item, i) => renderContentBlock(item, i))}
              </div>
            </div>
          </div>
        </div>

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

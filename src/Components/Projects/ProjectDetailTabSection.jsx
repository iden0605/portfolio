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
  const tabsRef = useRef(null);

  const slug = projectName.toLowerCase().replace(/\s+/g, '-');
  const tabSlug = (title) => title.toLowerCase().replace(/\s+/g, '-') + '.txt';

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

  const switchTab = (index) => {
    if (index === activeIndex || isGlitching) return;
    glitchTimers.current.forEach(clearTimeout);
    setIsGlitching(true);
    glitchTimers.current = [
      setTimeout(() => setActiveIndex(index), 150),
      setTimeout(() => setIsGlitching(false), 380),
    ];
  };

  const scrollTabs = (dir) => {
    if (tabsRef.current) {
      tabsRef.current.scrollBy({ left: dir * 160, behavior: 'smooth' });
    }
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

        <div className="detail-tabs-wrapper">
          <button className="detail-tabs-arrow" onClick={() => scrollTabs(-1)} aria-label="Scroll tabs left">‹</button>
          <div ref={tabsRef} className="detail-tabs">
            {details.map((block, i) => (
              <button
                key={i}
                className={`detail-tab${i === activeIndex ? ' active' : ''}`}
                onClick={() => switchTab(i)}
              >
                {tabSlug(block.title)}
              </button>
            ))}
          </div>
          <button className="detail-tabs-arrow" onClick={() => scrollTabs(1)} aria-label="Scroll tabs right">›</button>
        </div>

        <div ref={screenRef} className={`detail-screen${isGlitching ? ' glitch' : ''}`}>
          <div ref={innerRef} className="detail-screen-inner">
            <div className="detail-prompt-line" key={activeIndex}>
              <span className="dp-arrow">❯</span>
              <span className="dp-cmd" style={{ '--cmd-len': tabSlug(active.title).length + 5 }}> cat {tabSlug(active.title)}</span>
            </div>
            <div className="detail-cat-content">
              {active.content.map((item, i) => renderContentBlock(item, i))}
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

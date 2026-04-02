import React, { useState } from 'react';
import projectData from '../../Data/projectData';
import ProjectHeader from './ProjectHeader';
import './ProjectDetails.css';
import ImageModal from '../Global/ImageModal';
import TroopCarousel from './TroopCarousel';

function EverchangingGrimoireDetail() {
  const project = projectData["Everchanging Grimoire"];

  if (!project) {
    return <div>Project not found.</div>;
  }

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage('');
  };

  const renderContentBlock = (item, key) => {
    switch (item.type) {
      case 'image':
        return (
          <div className="desc-image project-detail-image-wrapper" key={key}>
            <img
              src={item.src}
              alt="Everchanging Grimoire description"
              style={{ width: item.width || '100%' }}
              onClick={() => handleImageClick(item.src)}
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
          <div className="video-container" key={key} style={{ maxWidth: item.width || '900px', margin: '0 auto 1rem' }}>
            <video
              src={item.src}
              autoPlay
              loop
              muted
              playsInline
              style={{ width: '100%', borderRadius: '8px' }}
            />
          </div>
        );
      case 'troop-carousel':
        return <TroopCarousel key={key} items={item.items} />;
      default:
        return null;
    }
  };

  return (
    <main className="main-content">
      <div className="project-detail-container">
        <ProjectHeader projectName="Everchanging Grimoire" />
        <section className="section" data-aos="fade-up">
          <div className="project-header-content">
            <div className="image-description-section">
              {project.details?.map((detailBlock, blockIndex) => (
                <div className="image-description-block" key={blockIndex}>
                  <div style={{ textAlign: 'left', alignSelf: 'flex-start', marginTop: '-20px' }}>
                    <h3><span className="subtitle">{detailBlock.title}</span></h3>
                  </div>
                  {detailBlock.content.map((item, itemIndex) =>
                    renderContentBlock(item, `${blockIndex}-${itemIndex}`)
                  )}
                  {blockIndex < project.details.length - 1 && (
                    <div className="section-divider-subtle"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {modalOpen && (
        <ImageModal
          src={selectedImage}
          alt="Expanded image for Everchanging Grimoire"
          onClose={closeModal}
        />
      )}
    </main>
  );
}

export default EverchangingGrimoireDetail;

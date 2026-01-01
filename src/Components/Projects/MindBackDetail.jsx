import React, { useState } from 'react';
import projectData from '../../Data/projectData';
import ProjectHeader from './ProjectHeader';
import './ProjectDetails.css';
import ImageModal from '../Global/ImageModal';

function MindBackDetail() {
  // get project data for MindBack
  const project = projectData.MindBack;

  // handle case where project data is not found
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

  // render the project detail page
  return (
    <main className="main-content">
      <div className="project-detail-container">
        <ProjectHeader projectName="MindBack" />
        {/*
          Add image sections here if MindBack project data includes images.
          Example structure:
          <section className="section" data-aos="fade-up">
            <div className="project-header-content">
              {project.details?.map((detailBlock, blockIndex) => (
                <div className="image-description-section" key={blockIndex}>
                  {detailBlock.content.map((item, itemIndex) => (
                    item.type === "image" ? (
                      <div className="desc-image project-detail-image-wrapper" key={itemIndex}>
                        <img
                          src={item.src}
                          alt={`MindBack Description ${blockIndex}-${itemIndex}`}
                          style={{ width: item.width || '100%' }}
                          onClick={() => handleImageClick(item.src)}
                        />
                      </div>
                    ) : null
                  ))}
                </div>
              ))}
            </div>
          </section>
        */}
      </div>

      {modalOpen && (
        <ImageModal
          src={selectedImage}
          alt={`Expanded image for MindBack`}
          onClose={closeModal}
        />
      )}
    </main>
  );
}

export default MindBackDetail;

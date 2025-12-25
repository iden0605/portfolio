import projectData from '../../Data/projectData';
import ProjectHeader from './ProjectHeader';
import './ProjectDetails.css';

function OverGrownDetail() {
  // get project data for OverGrown
  const project = projectData.OverGrown;

  // handle case where project data is not found
  if (!project) {
    return <div>Project not found.</div>;
  }

  // render the project detail page
  return (
    <div className="project-detail-container">
      <ProjectHeader projectName="OverGrown" />
      <section className="section" data-aos="fade-up">
        <div className="project-header-content">
          <div className="image-description-section">
            <div className="image-description-block">
              <div style={{ textAlign: 'left', alignSelf: 'flex-start', marginTop: '-20px' }}>
                <h3><span className="subtitle">Responsive Ranged Combat System</span></h3>
              </div>
              <div className="desc-image">
                <img src="/assets/project/OverGrown/OverGrown-desc-1.png" alt="OverGrown Description 1" style={{ width: '600px' }} />
              </div>
              <div className="description" style={{ textAlign: 'left' }}>
                <p>A dynamic projectile system was implemented to enable ranged attacks for the player character. This included handling firing input, managing the firing rate with a delay, and calculating projectile direction based on the mouse cursor's world position. The system spawns bullet prefabs with the necessary velocity to move toward the target.</p>
              </div>
              <div className="section-divider-subtle"></div>
            </div>
            <div className="image-description-block">
              <div style={{ textAlign: 'left', alignSelf: 'flex-start', marginTop: '-20px' }}>
                <h3><span className="subtitle">Tree-Linked Health System for Mother Nature</span></h3>
              </div>
              <div className="desc-image">
                <img src="/assets/project/OverGrown/OverGrown-desc-2.png" alt="OverGrown Description 2" style={{ width: '800px' }} />
              </div>
              <div className="description" style={{ textAlign: 'left' }}>
                <p>A unique environmental health system was developed, linking Mother Nature's health directly to the state of the trees. Each tree's destruction reduces Mother Nature’s overall health, with the damage scaled dynamically based on the initial number of trees. This design encourages players to protect the environment itself, not just their character.</p>
              </div>
              <div className="section-divider-subtle"></div>
            </div>
            <div className="image-description-block">
              <div style={{ textAlign: 'left', alignSelf: 'flex-start', marginTop: '-20px' }}>
                <h3><span className="subtitle">Bear AI Behavior</span></h3>
              </div>
              <div className="description" style={{ textAlign: 'left' }}>
                <p>The bear's movement is context-dependent, reacting dynamically to Mother Nature and nearby enemies. This adaptive behavior creates a more natural and engaging gameplay experience.</p>
              </div>
              <div style={{ textAlign: 'left', alignSelf: 'flex-start', marginTop: '-20px' }}>
                <h4><span className="subtitle">Bear Orbiting Movement</span></h4>
              </div>
              <div className="desc-image">
                <img src="/assets/project/OverGrown/OverGrown-desc-3.png" alt="OverGrown Description 3" style={{ width: '800px' }} />
              </div>
              <div className="description" style={{ textAlign: 'left' }}>
                <p>When no Lumberjacks are detected, this function makes the bear orbit the player at a set radius and speed. The orbiting motion is achieved by calculating a target position on a circle around the player and smoothly moving the bear toward it.</p>
              </div>
              <div style={{ textAlign: 'left', alignSelf: 'flex-start', marginTop: '-20px' }}>
                <h4><span className="subtitle">Bear Follow Movement</span></h4>
              </div>
              <div className="desc-image">
                <img src="/assets/project/OverGrown/OverGrown-desc-4.png" alt="OverGrown Description 4" style={{ width: '800px' }} />
              </div>
              <div className="description" style={{ textAlign: 'left' }}>
                <p>After being freed, this function governs the bear's follow behavior. It calculates a target position based on the player's current location and last movement direction, ensuring the bear trails at a specified distance. The bear halts when it reaches a minimum threshold distance from the player.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OverGrownDetail;

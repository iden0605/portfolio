import projectData from '../../Data/projectData';
import ProjectHeader from './ProjectHeader';
import ProjectBackButton from '../Utilities/ProjectBackButton';
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
                <img src="/src/assets/project/OverGrown/OverGrown-desc-1.png" alt="OverGrown Description 1" style={{ width: '600px' }} />
              </div>
              <div className="description" style={{ textAlign: 'left' }}>
                <p>I worked on a dynamic projectile system that allows the player character to perform ranged attacks. This involved handling player input for firing, setting up a delay between shots to control the firing rate, and calculating the direction of each projectile based on the mouse cursor’s position in the game world. When the player shoots, the system spawns bullet prefabs and gives them velocity so they move toward the target.</p>
              </div>
              <div className="section-divider-subtle"></div>
            </div>
            <div className="image-description-block">
              <div style={{ textAlign: 'left', alignSelf: 'flex-start', marginTop: '-20px' }}>
                <h3><span className="subtitle">Tree-Linked Health System for Mother Nature</span></h3>
              </div>
              <div className="desc-image">
                <img src="/src/assets/project/OverGrown/OverGrown-desc-2.png" alt="OverGrown Description 2" style={{ width: '800px' }} />
              </div>
              <div className="description" style={{ textAlign: 'left' }}>
                <p>I developed a unique environmental health system where the destruction of trees directly affects the health of Mother Nature. Each tree tracks its individual health and, upon being destroyed, reduces Mother Nature’s overall health, with the damage scaled dynamically based on the initial number of trees in the level. This uniquely encourages players to defend the environment rather than themselves.</p>
              </div>
              <div className="section-divider-subtle"></div>
            </div>
            <div className="image-description-block">
              <div style={{ textAlign: 'left', alignSelf: 'flex-start', marginTop: '-20px' }}>
                <h3><span className="subtitle">Bear AI Behavior</span></h3>
              </div>
              <div className="description" style={{ textAlign: 'left' }}>
                <p>The bear moves differently depending on what’s happening in the game, reacting to Mother Nature and nearby enemies in its own way. This makes its behavior feel more natural and keeps the gameplay interesting.</p>
              </div>
              <div style={{ textAlign: 'left', alignSelf: 'flex-start', marginTop: '-20px' }}>
                <h4><span className="subtitle">Bear Orbiting Movement</span></h4>
              </div>
              <div className="desc-image">
                <img src="/src/assets/project/OverGrown/OverGrown-desc-3.png" alt="OverGrown Description 3" style={{ width: '800px' }} />
              </div>
              <div className="description" style={{ textAlign: 'left' }}>
                <p>This function defines the bear's behavior when no Lumberjacks are detected. It causes the bear to orbit around the player character at a set radius and speed. The orbiting motion is achieved by calculating a target position on a circle around the player and moving the bear towards that point.</p>
              </div>
              <div style={{ textAlign: 'left', alignSelf: 'flex-start', marginTop: '-20px' }}>
                <h4><span className="subtitle">Bear Follow Movement</span></h4>
              </div>
              <div className="desc-image">
                <img src="/src/assets/project/OverGrown/OverGrown-desc-4.png" alt="OverGrown Description 4" style={{ width: '800px' }} />
              </div>
              <div className="description" style={{ textAlign: 'left' }}>
                <p>This function dictates the bear's movement after being freed from the cage. It enables the bear to follow behind the player character at a specified distance. This is done by calculating a target position based on the player's current position and their last movement direction, ensuring the bear trails the player. The bear stops moving when it gets within a threshold distance of the target position.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ProjectBackButton />
    </div>
  );
}

export default OverGrownDetail;

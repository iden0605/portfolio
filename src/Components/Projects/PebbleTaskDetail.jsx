import projectData from '../../Data/projectData';
import ProjectHeader from './ProjectHeader';
import './ProjectDetails.css';

function PebbleTaskDetail() {
  // get project data for PebbleTask
  const project = projectData.PebbleTask;

  if (!project) {
    return <div>Project not found.</div>;
  }
  return (
    <div className="project-detail-container">
      <ProjectHeader projectName="PebbleTask" />
      <section className="section" data-aos="fade-up">
        <div className="project-header-content">
          <div className="image-description-section">
            <div className="image-description-block">
              <div style={{ textAlign: 'left', alignSelf: 'flex-start', marginTop: '-20px' }}>
                <h3><span className="subtitle">Managing Component State with useState</span></h3>
              </div>
              <div className="desc-image">
                <img src="/assets/project/PebbleTask/PebbleTask-desc-1.png" alt="PebbleTask Description 1" style={{ width: '600px' }} />
              </div>
              <div className="description" style={{ textAlign: 'left' }}>
                <p>I’m using React’s useState hook to manage all the key parts of the Task Manager’s state—like the task list, input values, whether a task is being edited, and the widget’s position, size, and interaction status. This helps keep everything reactive and in sync as users interact with the app.</p>
              </div>
              <div className="section-divider-subtle"></div>
            </div>
            <div className="image-description-block">
              <div style={{ textAlign: 'left', alignSelf: 'flex-start', marginTop: '-20px' }}>
                <h3><span className="subtitle">Handling Widget Interaction: Drag and Resize Logic</span></h3>
              </div>
              <div className="desc-image">
                <img src="/assets/project/PebbleTask/PebbleTask-desc-2.png" alt="PebbleTask Description 2" style={{ width: '800px' }} />
              </div>
              <div className="description" style={{ textAlign: 'left' }}>
                <p>To handle dragging and resizing the widget, I use a few key functions. handleMouseDown starts the dragging process by setting dragging to true and recording the offset between the mouse and the widget’s corner—this helps keep the drag smooth and accurate. If the user clicks the resize handle instead, handleResizeStart sets resizing to true and saves the mouse’s starting position for width calculations. While the mouse moves, handleMouseMove checks if we’re dragging or resizing and updates the widget’s position or width accordingly. Once the mouse is released, handleMouseUp resets both states to stop the interaction.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PebbleTaskDetail;

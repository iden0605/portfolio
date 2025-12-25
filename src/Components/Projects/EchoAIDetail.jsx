import projectData from '../../Data/projectData';
import ProjectHeader from './ProjectHeader';
import './ProjectDetails.css';

function EchoAIDetail() {
  // get project data for EchoAI
  const project = projectData["EchoAI"];

  // handle case where project data is not found
  if (!project) {
    return <div>Project not found.</div>;
  }

  // render the project detail page
  return (
    <div className="project-detail-container">
      <ProjectHeader projectName="EchoAI" />
      <section className="section" data-aos="fade-up">
        <div className="project-header-content">
          <div className="image-description-section">
            <div className="image-description-block">
              <div style={{ textAlign: 'left', alignSelf: 'flex-start', marginTop: '-20px' }}>
                <h3><span className="subtitle">Message Pairing and Structuring</span></h3>
              </div>
              <div className="desc-image">
                <img src="/assets/project/EchoAi/EchoAi-desc-1.png" alt="EchoAI Description 1" style={{ width: '800px' }} />
              </div>
              <div className="description" style={{ textAlign: 'left' }}>
                <p>The conversation flow is organised by pairing user messages with their corresponding AI responses.</p>
              </div>
              <div className="description" style={{ textAlign: 'left' }}>
                <p>To ensure the chat interface feels expansive and does not feel cramped on larger screens, the "MessageInstance.jsx" component dynamically calculates a minimum height. This calculation is based on the height of the input box at the bottom and the header at the top, effectively making the chat log fill the available vertical space.</p>
              </div>
              <div className="section-divider-subtle"></div>
            </div>
            <div className="image-description-block">
              <div style={{ textAlign: 'left', alignSelf: 'flex-start', marginTop: '-20px' }}>
                <h3><span className="subtitle">Chat Rendering</span></h3>
              </div>
              <div className="desc-image">
                <img src="/assets/project/EchoAi/EchoAi-desc-2.png" alt="EchoAI Description 2" style={{ width: '700px' }} />
              </div>
              <div className="description" style={{ textAlign: 'left' }}>
                <p>Once the messages are paired, "ChatInterface.jsx" renders the conversation. It maps over the "messagePairs" array and passes each pair to a "MessageInstance" component.</p>
              </div>
              <div className="description" style={{ textAlign: 'left' }}>
                <p>This modular approach keeps the code clean; "ChatInterface" handles the overall structure, while "MessageInstance" manages the detailed presentation of each user-AI exchange, including animations and interaction options like editing.</p>
              </div>
              <div className="section-divider-subtle"></div>
            </div>
            <div className="image-description-block">
              <div style={{ textAlign: 'left', alignSelf: 'flex-start', marginTop: '-20px' }}>
                <h3><span className="subtitle">Right Split Screen Logic</span></h3>
              </div>
              <div className="desc-image">
                <img src="/assets/project/EchoAi/EchoAi-desc-3.png" alt="EchoAI Description 3" style={{ width: '900px' }} />
              </div>
              <div className="description" style={{ textAlign: 'left' }}>
                <p>1. Intent Classification (AI Model 1): When a user sends a message, the first AI model classifies the request, determining whether it is a simple text response or a request for a specific learning tool (e.g., flashcard, quiz, or notes).</p>
              </div>
              <img src="/assets/project/EchoAi/EchoAi-desc-4.png" alt="EchoAI Description 4" style={{ width: '700px' }} />
              <div className="description" style={{ textAlign: 'left' }}>
                <p>2. Content Generation (AI Model 2): If a learning tool is requested, a second AI model is invoked. This model uses function declarations that define the data structure for each quiz type to generate and format the content (questions, answers, descriptions) as required by the function triggered by the first AI.</p>
              </div>
              <img src="/assets/project/EchoAi/EchoAi-desc-5.png" alt="EchoAI Description 5" style={{ width: '700px' }} />
              <div className="description" style={{ textAlign: 'left' }}>
                <p>3. Frontend Rendering: The final data object, containing a "type" and "content," is sent to the frontend. The "RightSplit.jsx" component receives this data and uses a switch statement on the "type" property to render the appropriate React component, passing the generated content as props.</p>
              </div>
              <div className="section-divider-subtle"></div>
            </div>

            <div className="image-description-block">
              <div style={{ textAlign: 'left', alignSelf: 'flex-start', marginTop: '-20px' }}>
                <h3><span className="subtitle">The future of EchoAi</span></h3>
              </div>
              <div className="desc-image">
                <img src="/assets/project/EchoAi/EchoAi-desc-6.png" alt="EchoAI Description 6" style={{ width: '700px' }} />
              </div>
              <div className="description" style={{ textAlign: 'left' }}>
                <p>The future vision for EchoAI is to become a seamless blend of Obsidian, GoodNotes, and Google Docs, integrating features like handwritten notes, note linking, collaboration, and advanced organization.</p>
              </div>
              <img src="/assets/project/EchoAi/EchoAi-desc-7.png" alt="EchoAI Description 7" style={{ width: '800px' }} />
              <div className="description" style={{ textAlign: 'left' }}>
                <p>Additional quiz options are also planned, including true/false, short answer, matching, and diagram labeling.</p>
              </div>
              <img src="/assets/project/EchoAi/EchoAi-desc-8.png" alt="EchoAI Description 8" style={{ width: '800px' }} />
              <div className="description" style={{ textAlign: 'left' }}>
                <p>AI enhancements will include automated marking for short answer questions, content regeneration, and image generation.</p>
              </div>
              <div className="description" style={{ textAlign: 'left' }}>
                <p>A sneak peek of the potential future interface:</p>
              </div>
              <img src="/assets/project/EchoAi/EchoAi-desc-9.png" alt="EchoAI Description 9" style={{ width: '900px' }} />
              <div className="section-divider-subtle"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EchoAIDetail;

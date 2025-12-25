import projectData from '../../Data/projectData';
import ProjectHeader from './ProjectHeader';
import './ProjectDetails.css';

function AcademicPerformanceDetail() {
  // get project data for Academic Performance Predictive Models
  const project = projectData["Academic Predictive Models"];

  // handle case where project data is not found
  if (!project) {
    return <div>Project not found.</div>;
  }

  // render the project detail page
  return (
    <div className="project-detail-container">
      <ProjectHeader projectName="Academic Predictive Models" />
      <section className="section" data-aos="fade-up">
        <div className="project-header-content">
          <div className="image-description-section">
            <div className="image-description-block">
              <div style={{ textAlign: 'left', alignSelf: 'flex-start', marginTop: '-20px' }}>
                <h3><span className="subtitle">Data Preprocessing</span></h3>
              </div>
              <div className="desc-image">
                <img src="/assets/project/PredictiveModels/PredictiveModels-desc-1.png" alt="PredictiveModels Description 1" style={{ width: '600px' }} />
              </div>
              <div className="desc-image">
                <img src="/assets/project/PredictiveModels/PredictiveModels-desc-2.png" alt="PredictiveModels Description 2" style={{ width: '600px' }} />
              </div>
              <div className="description" style={{ textAlign: 'left' }}>
                <p>Two student datasets were merged, retaining key family-related features. Final grades were then normalized and categorized into "Low," "Medium," and "High" as a new variable, <i>grades_grouped</i>.</p>
              </div>
              <div className="description" style={{ textAlign: 'left' }}>
                <p>Categorical and ordinal features were converted to a numerical format using one-hot encoding, enabling models to process non-numeric data without implying an order.</p>
              </div>
              <div className="description" style={{ textAlign: 'left' }}>
                <p>The data was split into training and testing sets (70:30) using a fixed random state to ensure reproducibility and diverse model evaluation.</p>
              </div>
              <div className="section-divider-subtle"></div>
            </div>
            <div className="image-description-block">
              <div style={{ textAlign: 'left', alignSelf: 'flex-start', marginTop: '-20px' }}>
                <h3><span className="subtitle">Correlation Analysis</span></h3>
              </div>
              <div className="desc-image">
                <img src="/assets/project/PredictiveModels/PredictiveModels-desc-3.png" alt="PredictiveModels Description 3" style={{ width: '600px' }} />
              </div>
              <div className="desc-image">
                <img src="/assets/project/PredictiveModels/PredictiveModels-desc-4.png" alt="PredictiveModels Description 4" style={{ width: '600px' }} />
              </div>
              <div className="description" style={{ textAlign: 'left' }}>
                <p>To identify key predictors of student performance, Normalised Mutual Information (NMI) was used to measure relationships between family-related categorical variables and academic outcomes. Unlike Pearson’s correlation, NMI captures non-linear associations without assuming specific data distributions, making it ideal for this type of data.</p>
              </div>
              <div className="section-divider-subtle"></div>
            </div>
            <div className="image-description-block">
              <div style={{ textAlign: 'left', alignSelf: 'flex-start', marginTop: '-20px' }}>
                <h3><span className="subtitle">Predictive Model training and testing</span></h3>
              </div>
              <div className="desc-image">
                <img src="/assets/project/PredictiveModels/PredictiveModels-desc-5.png" alt="Predictive Models Description 5" style={{ width: '800px' }} />
              </div>
              <div className="desc-image">
                <img src="/assets/project/PredictiveModels/PredictiveModels-desc-6.png" alt="Predictive Models Description 6" style={{ width: '800px' }} />
              </div>
              <div className="description" style={{ textAlign: 'left' }}>
                <p>A K-Nearest Neighbors (k=3) and a Decision Tree (entropy criterion) model were implemented to classify students into performance groups. These models were trained on the preprocessed data and evaluated on a testing set, with accuracy results stored in a DataFrame for comparison.</p>
              </div>
              <div className="description" style={{ textAlign: 'left' }}>
                <p> KNN (45.5%) and Decision Tree (43.0%) outperformed random guessing, but accuracy was limited, reflecting weak feature correlations and suggesting other factors like motivation or mental health may play a larger role. </p>
              </div>
              <div className="section-divider-subtle"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AcademicPerformanceDetail;

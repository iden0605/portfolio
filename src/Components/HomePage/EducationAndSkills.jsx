import './EducationAndSkills.css';

function EducationAndSkills() {
  // education data
  const education = [
    {
      institution: "University of Melbourne | WAM 85",
      period: "2024–2026",
      qualification: "Bachelor of Science in Computing and Software Systems",
      awards: "Melbourne International Undergraduate Scholarship (Excellence Award)"
    },
    {
      institution: "Xceleration Education | A* A* A*",
      period: "2022–2023",
      qualification: "International A-Levels — Mathematics, Further Mathematics, Physics",
      awards: "Pearson Certificate of Excellence"
    }
  ];

  // language proficiency data
  const languages = [
    { name: "English", level: "Native" },
    { name: "Cantonese", level: "Proficient" },
    { name: "Mandarin", level: "Intermediate" }
  ];

  // render education and skills section
  return (
    <section className="section education-section" data-aos="fade-up">
      <h2 className="main-title">Education</h2>

      <div className="education-cards-container">
        {education.map((item, index) => (
          <div className="education-card" key={index}>
            <div className="education-header">
              <span className="institution-name">{item.institution}</span>
              <span className="education-period">({item.period})</span>
            </div>
            <div className="qualification-text"><strong>Qualification: </strong>{item.qualification}</div>
            <div className="qualification-text"><strong>Awards: </strong>{item.awards}</div>
          </div>
        ))}
      </div>

      <div className="languages-container">
        <ul className="language-list">
          {languages.map((lang, index) => (
            <li className="language-item" key={index}>
              <span className="language-name">{lang.name}:</span> <span className="language-level">{lang.level}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default EducationAndSkills;

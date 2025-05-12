import './EducationAndSkills.css';

function EducationAndSkills() {
  const education = [
    {
      institution: "University of Melbourne (2024–2026)",
      qualification: "Bachelor of Science in Computing and Software Systems | WAM 84.7"
    },
    {
      institution: "Xceleration Education (2022–2023)",
      qualification: "International A-Levels: Mathematics, Further Mathematics, Physics | A* A* A*"
    }
  ];

  const languages = [
    <><strong>English:</strong> Native</>,
    <><strong>Cantonese:</strong> Proficient</>,
    <><strong>Mandarin:</strong> Basic Proficiency</>
  ];

  const skills = {
    "Programming Languages": ["Python", "Java", "C#", "Javascript"],
    "Frameworks & Libraries": ["React", "Flask", "Unity"],
    "Databases": ["SQL", "MongoDB"],
    "Tools & Technologies": ["Git"]
  };


  return (
    <section className="section" data-aos="fade-up">
      <h2>Education and Skills</h2>

      <h3>Education</h3>
      <div className="education-table">
        <div className="table-header">
          <div>Institution</div>
          <div>Qualification</div>
        </div>
        {education.map((item, index) => (
          <div className="table-row" key={index}>
            <div>{item.institution}</div>
            <div>{item.qualification}</div>
          </div>
        ))}
      </div>

      <div className="skills-languages-container">
        <div>
          <h3>Skills</h3>
          <ul className="skills-list">
            {Object.entries(skills).map(([category, items], index) => (
              <li key={index}>
                <strong>{category}:</strong> {items.join(', ')}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Languages</h3>
          <ul className="skills-list">
            {languages.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default EducationAndSkills;

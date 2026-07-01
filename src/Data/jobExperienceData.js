// data for work experience section
const jobExperienceData = {
  "Kewpump": {
    tokenizedName: "kewpump",
    jobTitle: "Junior DevOps Engineer | Software Developer",
    cardImage: "/assets/WorkExperience/KewPump/KewPump-image.jpg",
    headerImage: "/assets/WorkExperience/KewPump/KewPump-image.jpg",
    description: `Worked on the infrastructure and deployment architecture for a centralized factory and product management platform used internally by company employees. Initially designed and deployed the system on Google Cloud, but later migrated development to a local server environment to reduce infrastructure costs. After stabilizing the application locally, helped transition the full stack (frontend, backend, and database) to DigitalOcean for scalable staging and production deployments.`,
    date: "Nov 2025 - Present",
    teamSize: 8,
    keyResponsibilities: [
      "Contributed to the development and deployment of a centralized factory and product management platform used internally by company employees.",
      "Designed and implemented initial cloud infrastructure on Google Cloud for hosting the application and supporting services.",
      "Evaluated infrastructure costs and helped migrate development and testing environments from Google Cloud to a local company server to reduce operational expenses.",
      "Configured and maintained the full application stack locally, including frontend, backend, and PostgreSQL database services.",
      "Containerized application services using Docker to standardize development and deployment environments.",
      "Planned and executed the migration of the application from local infrastructure to DigitalOcean for scalable cloud hosting.",
      "Configured staging and production environments on DigitalOcean to support reliable deployments and future scalability.",
      "Documented infrastructure architecture, deployment workflows, and environment setup processes for the development team."
    ],
    technologies: ["DigitalOcean", "Google Cloud Platform (GCP)", "Docker", "CI/CD", "PostgreSQL", "RBAC", "Authentik", "Linux Server Administration", "Cloud Infrastructure", "ASP.NET Core"],
    positions: [
      {
        title: "Junior DevOps Engineer | Software Developer",
        date: "Jan 2026 - Present",
        paragraphs: [
          "Promoted to a development role after successfully delivering CI/CD pipelines and automated testing infrastructure during my DevOps internship.",
          "Led the migration of the application infrastructure from local hosting to DigitalOcean, improving scalability and reliability for both staging and production environments.",
          "Implemented secure authentication using <strong>Authentik</strong>, along with role-based access control (RBAC) using group-based permissions to manage employee access to the platform.",
          "Improved frontend styling and user experience across the platform to make the system clearer and easier for factory employees to use.",
          "Continue to support the system part-time by maintaining the infrastructure, CI/CD pipelines, and GitHub workflows while providing internal IT support for deployment and operational issues."
        ]
      },
      {
        title: "Intern DevOps Engineer",
        date: "Nov 2025 - Jan 2026",
        paragraphs: [
          "Responsible for designing the development and deployment architecture for a centralized factory and product management web application used internally by employees. The platform manages factory equipment, production information, and operational data across the business.",
          "Initially deployed the application on Google Cloud, but after evaluating infrastructure costs, helped migrate development environments to a local company server to reduce expenses while maintaining reliable internal access.",
          "Containerized the full application stack using Docker and implemented branch-based CI/CD pipelines using GitHub Actions to automate staged and production deployments.",
          "After stabilizing the system locally, planned and executed the migration of the full stack (frontend, backend, and database) to DigitalOcean to support scalable cloud hosting and improved deployment workflows.",
          "Documented deployment processes and infrastructure setup to ensure the development team could reliably manage and deploy the system going forward."
        ]
      }
    ]
  },

  "Stego Studios": {
    tokenizedName: "stego-studios",
    jobTitle: "Game Developer (Programmer)",
    cardImage: "/assets/WorkExperience/StegoStudios/StegoStudios-image.jpg",
    headerImage: "/assets/WorkExperience/StegoStudios/StegoStudios-image.jpg",
    description: `Working with a team of 9 to develop our game Cascade over the course of a year. I focus on implementing core gameplay systems such as player movement and camera mechanics, as well as advanced physics-based features including gravity and fluid mechanics.`,
    date: "Mar 2026 - Present",
    teamSize: 9,
    keyResponsibilities: [
      "Designed and implemented core gameplay mechanics, including player movement and camera systems.",
      "Integrated character animations and visual assets created by artists into the game engine.",
      "Implemented and synchronized music and audio assets provided by composers.",
      "Developed advanced physics-based mechanics, including gravity and fluid-based interactions.",
      "Collaborated with the development team to brainstorm and refine gameplay ideas and systems.",
      "Created environmental effects and interactions that dynamically influence player behavior and gameplay.",
      "Implemented local save systems to persist player progress and game state.",
      "Developed and integrated in-game achievements and progression tracking.",
      "Prepared the game for distribution on Steam, including build configuration, deployment, and platform integration."
    ],
    technologies: ["Unity", "C#", "Git", "GitHub", "Steamworks SDK"],
    positions: [
      {
        title: "Game Developer (Programmer)",
        date: "Mar 2026 - Present",
        paragraphs: [
          "At Stego Studios, I am part of a dedicated 9-person team building <em>Cascade</em>, a game we have been developing over the course of a year. I specialize in programming core gameplay mechanics, bringing the player experience to life by building robust movement and camera systems. Beyond the basics, I also focus on creating advanced, physics-based interactions like complex gravity and fluid mechanics.",
          "My role frequently involves collaborating with artists and composers to integrate character animations, visual assets, and dynamic audio seamlessly into the Unity engine. I've also implemented foundational infrastructure for the game, including local save systems to persist player progress, dynamic environmental effects, and in-game achievement tracking. Recently, I've been preparing <em>Cascade</em> for distribution on Steam by handling build configurations and integrating the Steamworks SDK."
        ]
      }
    ]
  },

  "Unimelb MoMU Club": {
    tokenizedName: "momu",
    jobTitle: "IT and Analytics Officer",
    cardImage: "/assets/WorkExperience/Momu/Momu-image.jpg",
    headerImage: "/assets/WorkExperience/Momu/Momu-image.jpg",
    description: `Serving as the sole IT and Analytics Officer for the Malaysians of Melbourne University club, responsible for the maintenance and improvement of the club's website, alongside collecting and analyzing social media analytics to guide outreach strategies.`,
    date: "Oct 2025 - Present",
    teamSize: 25,
    keyResponsibilities: [
      "Club website maintenance and enhancement.",
      "Social media analytics, including use of Instagram API and Notion.",
      "Collecting and reporting social media performance metrics to the publicity team."
    ],
    technologies: ["HTML", "Vanilla CSS", "Javascript", "Google Sheets", "Squarespace", "Notion"],
    positions: [
      {
        title: "IT and Analytics Officer",
        date: "Oct 2025 - Present",
        paragraphs: [
          "Responsibilities include maintaining and updating the <a href='https://www.momumomu.org/' target='_blank' rel='noopener noreferrer' class='about-me-link'>MoMU website</a>, implementing UI/UX improvements, and reporting social media analytics to the club's publicity team."
        ]
      }
    ]
  },

  "Unimelb GameMakers Club": {
    tokenizedName: "umgmc",
    jobTitle: "Technical Officer | Full-stack Developer",
    cardImage: "/assets/WorkExperience/UMGMC/UMGMC-image.jpg",
    headerImage: "/assets/WorkExperience/UMGMC/UMGMC-image.jpg",
    description: `Technical Officer in the University of Melbourne GameMakers club, responsibilities include full-stack development for the club's main website and Product Division's website in a team of 8 designers and developers. Also assisting with side projects focused on improving club workflows and automation.`,
    date: "Aug 2025 - Present",
    teamSize: 20,
    keyResponsibilities: [
      "Club website full-stack development.",
      "Product Division website full-stack development.",
      "Notion and Google Calendar integration for event management.",
      "Notion database management."
    ],
    technologies: ["Next (Typescript)", "React (Typescript)", "Notion database", "Vanilla CSS", "Tailwind CSS", "HTML", "Google Calendar API", "Notion APIs"],
    positions: [
      {
        title: "Technical Officer | Full-stack Developer",
        date: "Aug 2025 - Present",
        paragraphs: [
          "For the <a href='https://www.gamemakersclub.org/' target='_blank' rel='noopener noreferrer'>club website</a>, committee data from the Notion backend was parsed and integrated to dynamically render committee information. The committee webpage was implemented based on the provided designs, along with several UX improvements to improve navigation and usability.",
          "On the <a href='https://stegostudios.gamemakersclub.org/' target='_blank' rel='noopener noreferrer'>Product Division website</a>, the team and team member data structure was designed and implemented to support structured profile data. The team member pages were developed to showcase member profiles and experience, alongside UX enhancements such as a dynamic header for improved visual presentation."
        ]
      }
    ]
  },

  "Bookings Made Easy": {
    tokenizedName: "bookings-made-easy",
    jobTitle: "Co-founder | Software/Web Developer",
    cardImage: "/assets/WorkExperience/BookingsMadeEasy/BookingsMadeEasy-image.jpg",
    headerImage: "/assets/WorkExperience/BookingsMadeEasy/BookingsMadeEasy-image.jpg",
    description: `Co-founded a web development service based in Kota Kinabalu, Malaysia, specializing in creating custom websites for hotels and Airbnb hosts. As co-founder and lead developer, responsibilities included designing and maintaining client-facing platforms.`,
    date: "Nov 2024 - Jun 2025",
    teamSize: 2,
    keyResponsibilities: [
      "Web development (Frontend)",
      "Database planning and development",
      "Software development (Booking management software)"
    ],
    technologies: ["GoHighLevel", "Javascript", "HTML", "CSS"],
    positions: [
      {
        title: "Web Developer",
        date: "Nov 2024 - Jun 2025",
        paragraphs: [
          "Websites were built for clients through the MonthlySoft platform, using GoHighLevel, JavaScript, HTML, and CSS. A notable project was the site for <a href='https://DolphinBayIslandResort.com' target='_blank' rel='noopener noreferrer'>DolphinBayIslandResort</a> in Kota Kinabalu. While design direction was a collaborative effort, the focus of this role was on technical implementation."
        ]
      }
    ]
  },

  "Iden McElhone (Freelance)": {
    tokenizedName: "iden-mcelhone-freelance",
    jobTitle: "Tutor",
    cardImage: "/assets/WorkExperience/Tutoring/Tutoring-image.jpg",
    headerImage: "/assets/WorkExperience/Tutoring/Tutoring-image.png",
    description: `Provided tutoring in Mathematics and Programming through private and group sessions, employing tailored strategies such as creating practice questions and reviewing past papers to enhance student learning.`,
    date: "Mar 2024 - Oct 2024",
    teamSize: 1,
    keyResponsibilities: [
      "Tutoring and mentoring students in Mathematics and Programming",
      "Planning Lessons and exercise sheets for students",
      "Guiding students through past papers",
      "Supporting students off-hours (helping with homework or assignments)"
    ],
    technologies: ["Python", "C"],
    positions: [
      {
        title: "Tutor",
        date: "Mar 2024 - Oct 2024",
        paragraphs: [
          "Provided one-on-one tutoring in Mathematics and Programming (Python and C) to five students from Trinity College Foundation Studies. Sessions focused on content revision, conceptual reinforcement, and exam preparation using practice questions and past papers. All five students achieved exceptional results, scoring over 80/100 in Mathematics, and have since progressed to become University of Melbourne alumni."
        ]
      }
    ]
  }
};

export default jobExperienceData;

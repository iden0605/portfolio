// data for project section
const projectData = {
  "EchoAI": {
    tokenizedName: "echoai",
    description: `An innovative, AI-powered web application designed to transform conversations into interactive learning experiences. Echo dynamically creates educational materials such as quizzes, flashcards, and notes directly from chat interactions. This project was the winner of the Education Track at MelbourneHack 2025.`,
    date: "MelbourneHack 2025 Winner",
    type: "Hackathon",
    teamSize: 2,
    role: "Fullstack Developer",
    thumbnail: "/assets/project/EchoAi/EchoAi-image.png",
    previewVid: "/EchoAi-hover.mp4",
    images: [],
    technologies: ["React (Javascript)", "Python", "Gemini API", "Tailwind CSS"],
    liveLink: "https://www.youtube.com/watch?v=RlUeeHvd93g",
    githubLink: "https://github.com/iden0605/Echo",
    itchLink: "",
    wwwLink: "https://echoai.academy/",
    status: "Released",
    projectTime: "4 Days",
    keyResponsibilities: [
      "Designed and developed the chat interface.",
      "Created and coded the right-split-screen calling logic.",
      "Implemented Multiple-choice quiz, Blanks quiz, Flashcards and Notes UI.",
      "Ensured seamless connectivity between the backend and frontend.",
      "Deployed the application to www.echoai.academy."]
  },
  "PebbleTask": {
    tokenizedName: "pebbletask",
    description: `
    Pebble Task is a minimalist and flexible task manager designed for streamlined organization. The widget is movable and resizable, with intuitive controls for adding, editing, and reordering tasks. It features automatic progress saving, customizable themes (Light, Dark, and Matcha), and task highlighting for better focus.
    `,
    date: "HackMelbourne Hackiethon 2025",
    type: "Hackathon",
    teamSize: 1,
    role: "Frontend Developer",
    thumbnail: "/assets/project/PebbleTask/PebbleTask-image.png",
    images: [

    ],
    technologies: ["React (Javascript)"],
    liveLink: "https://www.youtube.com/watch?v=S6Kpp-MXBes&ab_channel=IdenMcElhone",
    githubLink: "https://github.com/iden0605/PebbleTask",
    itchLink: "",
    wwwLink: "https://iden0605.github.io/PebbleTask/",
    previewVid: "/PebbleTask-hover.mp4",
    status: "Released",
    projectTime: "2 Days",
    keyResponsibilities: [
      "Designed and developed the task manager.",
      "Built a draggable, resizable, and responsive user interface.",
      "Implemented task creation, prioritization, and persistence.",
      "Added theme switching and smooth user-friendly animations.",
      "Managed state and styling using modern tools."]
  },
  "OverGrown": {
    tokenizedName: "overgrown",
    description: `
    A town has been overrun by Cyborg Lumberjacks, and Mother Nature must restore it. Playing as a nature fairy, you uncover her story, confront environmental damage, and free a companion to help heal the land. This exploration-focused game emphasizes themes of healing, friendship, and the conflict between nature and machine.
    `,
    date: "CISSA x GMC Game Jam 2025",
    type: "Game Jam",
    teamSize: 4,
    role: "Programmer (Unity)",
    thumbnail: "/assets/project/OverGrown/OverGrown-image.png",
    images: [

    ],
    technologies: ["Unity (C#)"],
    liveLink: "https://www.youtube.com/watch?v=KPQG4P6r2QU",
    githubLink: "https://github.com/yourusername/project4",
    itchLink: "https://iden0605.itch.io/overgrown",
    wwwLink: "",
    previewVid: "/OverGrown-hover.mp4",
    status: "Completed",
    projectTime: "5 Days",
    keyResponsibilities: [
      "Designed and implemented player character mechanics, including movement, attack systems, health management, and inventory.",
      "Developed enemy AI and spawning systems.",
      "Created user interface elements for inventory and health bars.",
      "Implemented game management logic, including scene transitions and overall game flow.",
      "Programmed interactive elements such as chests, hearts, and environmental objects like trees and lumber huts.",
      "Developed visual effects and shaders for elements like the renderer fader.",
      "Managed and organised project assets and code structure."
    ]
  },
  "Academic Predictive Models": {
    tokenizedName: "academic-predictive-models",
    description: `
    This university project investigates how well predictive models can estimate student academic performance based on family-related factors. The study involved a correlation analysis using Normalized Mutual Information (NMI) to identify relevant features, followed by the training of two predictive models: a Decision Tree classifier and a K-Nearest Neighbours (KNN) classifier. Their performance was evaluated and compared using metrics and visualizations from scikit-learn, Matplotlib, and Seaborn, combining statistical analysis with machine learning to explore the influence of family background on academic outcomes.
    `,
    date: "June 2025 - July 2025",
    type: "University Project",
    teamSize: 1,
    role: "Programmer and Writer",
    thumbnail: "/assets/project/PredictiveModels/PredictiveModels-image.png",
    technologies: ["Python", "Jupyter Notebook", "Quarto", "Seaborn", "MatPlotLib", "sklearn"],
    liveLink: "",
    githubLink: "https://github.com/iden0605/digital-report",
    itchLink: "",
    wwwLink: "https://iden0605.github.io/digital-report/",
    previewVid: "/PredictiveModels-hover.mp4",
    status: "Completed",
    projectTime: "2 weeks",
    keyResponsibilities: [
      "Preprocessed and cleaned the dataset using Python.",
      "Conducted correlation analysis using Normalised Mutual Information (NMI).",
      "Visualized data with bar charts and confusion matrices using MatPlotLib and Seaborn.",
      "Trained, tested, and evaluated predictive models using Python.",
      "Analysed and compared the performance of the deployed models.",
      "Authored and structured a report of the findings using Jupyter Notebook and Quarto."
    ]
  },
  "MindBack": {
    tokenizedName: "mindback",
    description: `MindBack is a web application that allows users to reconnect with their past selves or friends through a conversational AI. By uploading personal data archives from platforms like WhatsApp and Instagram, users can interact with an AI persona that emulates communication styles from a specific year.`,
    date: "April 2025 - May 2025",
    type: "Hackathon",
    teamSize: 2,
    role: "Fullstack Developer",
    thumbnail: "/assets/project/MindBack/MindBack-image.png",
    images: [

    ],
    technologies: ["React (Javascript)", "Flask (Python)", "Google Gemini API", "Beautiful Soup"],
    liveLink: "",
    githubLink: "https://github.com/iden0605/MindBack",
    itchLink: "",
    wwwLink: "",
    status: "Completed",
    projectTime: "1 week",
    keyResponsibilities: [
      "Designed and developed the home page and chat interface.",
      "Implemented file uploads and data processing to handle social media input.",
      "Optimised data parsing of Whatsapp, Instagram and Discord chat files."
    ]
  },
  "Lunarly": {
    tokenizedName: "lunarly",
    description: `A conversational chatbot designed to build a personal connection with users over time. As the conversation progresses, the bond strengthens, creating a unique and engaging experience.`,
    date: "May 2025 - Present",
    type: "Long Term Project",
    teamSize: 2,
    role: "Frontend Developer",
    thumbnail: "/assets/project/Lunarly/Lunarly-image.png",
    images: [

    ],
    technologies: ["React (Javascript)", "Flask (Python)"],
    liveLink: "https://example.com/project3",
    githubLink: "https://github.com/yourusername/project3",
    itchLink: "",
    wwwLink: "",
    status: "In Progress",
    projectTime: "Ongoing",
    keyResponsibilities: []
  }
};

export default projectData;

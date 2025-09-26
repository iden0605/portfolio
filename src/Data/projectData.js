// data for project section
const projectData = {
  "EchoAI": {
    tokenizedName: "echoai",
    description: `Echo is an innovative, AI-powered web application designed to transform conversations 
    into interactive learning experiences. Echo dynamically creates educational materials such as quizzes, 
    flashcards, and notes directly from your chat interactions. MelbourneHack 2025 Education Track Winner.`,
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
      "Responsible for ensuring the backend and frontend connected smoothly.",
      "Deployed the website at www.echoai.academy."]
  },
  "PebbleTask": {
    tokenizedName: "pebbletask",
    description: `
    Pebble Task is a simple and flexible task manager designed to keep you organized without
    cluttering your workspace. You can easily move and resize the widget, manage tasks by adding,
    editing, deleting, or reordering them, and your progress is saved automatically. It offers
    customizable themes like Light, Dark, and Matcha to suit your preferences, and allows you to
    highlight important tasks for better focus. With smooth transitions and convenient right-click
    controls, the experience remains clean and efficient. And when you complete all your tasks,
    you're rewarded with a fun confetti celebration.
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
    In this game, a town has been taken over by Cyborg Lumberjacks, and it’s up to
    Mother Nature to bring it back to life. With the help of a small nature fairy, you uncover
    her story and face the challenges caused by the damage to the environment. Along the way,
    you free a companion who joins you on your journey as you work together to clean up the town
    and find what was lost—your heart. The game focuses on simple exploration, with themes of
    healing, friendship, and the fight between nature and machines.
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
    For a university project, I investigated the question: "How well can predictive models estimate 
    student academic performance based on family-related factors?" To address this, I began by 
    conducting a correlation analysis using Normalized Mutual Information (NMI) to identify the 
    most relevant features. Based on this analysis, I trained two predictive models: a Decision 
    Tree classifier and a K-Nearest Neighbours (KNN) classifier. I evaluated and compared their 
    performance using various metrics and visualizations, employing tools and methods from the 
    scikit-learn, Matplotlib, and Seaborn libraries. The project combined statistical analysis 
    with machine learning techniques to explore the extent to which family background influences 
    student academic outcomes.
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
      "Wrote Python code to preprocess and clean the dataset.",
      "Conducted correlation analysis using Normalised Mutual Information (NMI).",
      "Plotted bar charts and confusion matrices using MatPlotLib and Seaborn for visualisation.",
      "Wrote Python code to train, test and evaluate the predictive models.",
      "Analysed and compared the performance of the predictive models.",
      "Wrote and structured the report based on findings using Jupyter Notebook and Quarto."
    ]
  },
  "MindBack": {
    tokenizedName: "mindback",
    description: `MindBack is a web application designed to help you reconnect with your past self
    or friends by interacting with your digital memories through a conversational AI. Upload your
    personal data archives (from WhatsApp and Instagram), and MindBack will process them, allowing
    you to chat with an AI persona based on the communication style and content from a specific year.`,
    date: "April 2025 - Present",
    type: "Short Term Project",
    teamSize: 2,
    role: "Fullstack Developer",
    thumbnail: "/assets/project/MindBack/MindBack-image.png",
    images: [

    ],
    technologies: ["React (Javascript)", "Flask (Python)", "Google Gemini API", "Beautiful Soup"],
    liveLink: "https://example.com/project2",
    githubLink: "https://github.com/yourusername/project2",
    itchLink: "",
    wwwLink: "",
    status: "In Progress",
    projectTime: "Ongoing",
    keyResponsibilities: []
  },
  "Lunarly": {
    tokenizedName: "lunarly",
    description: `A conversational companion chatbot that builds a closer friendship with users
    over time. The more you chat, the more the bond grows — creating a personalized and engaging
    experience.`,
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

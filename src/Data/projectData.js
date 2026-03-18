// data for project section
const projectData = {
  "Afloat": {
    tokenizedName: "afloat",
    description: `Afloat is a tactical tower defense game where players build a nature-powered defense force to hold back waves of creeping enemies and plastic pollution threatening a fragile ecosystem. Deploy a roster of unique creatures — from ants that dash into melee, to koi that fire piercing laser beams — each with their own attack behaviour, upgrade path, and evolution form.`,
    date: "Click & Claw 2026 Finalist",
    type: "Game Jam",
    award: "Finalist",
    teamSize: 3,
    role: "Game Programmer | Animator | Artist",
    thumbnail: "/assets/project/Afloat/Afloat-image.png",
    previewVid: "/Afloat-hover.mp4",
    images: [],
    technologies: ["Unity (C#)", "Unity Particle System", "Unity UI Toolkit", "Pixel Studio"],
    liveLink: "https://youtu.be/LgwHPMVk6FU",
    githubLink: "https://github.com/iden0605/Afloat",
    itchLink: "https://elytride.itch.io/afloat",
    wwwLink: "",
    status: "Released",
    projectTime: "4 Days",
    keyResponsibilities: [
      "Designed and implemented the core tower defense architecture — TroopBehavior, TroopInstance, WaveManager, and GoldManager.",
      "Built a scalable upgrade and evolution system: a consistent framework for adding new troops and progression paths.",
      "Implemented unique attack behaviours and procedural VFX for 10+ troops using Unity's Particle System and runtime LineRenderers.",
      "Developed all troop status effect logic — burn, poison, freeze, stun, and daze — as well as conditional and proximity-based damage buffs.",
      "Created the in-game UI, including the troop drag-and-drop sidebar with placement zone validation and live range indicators.",
      "Implemented map masking and layering to handle troop placement restrictions and enemy pathing collisions."
    ],
    details: [
      {
        title: "The World of Afloat",
        content: [
          { type: "image", src: "/assets/project/Afloat/Afloat-desc-1.png", width: "900px" },
          { type: "text", text: "Afloat is set in a threatened natural ecosystem. Waves of enemies — carrying plastic pollution and other hazards — advance along predetermined paths toward the exit. Players must deploy troops strategically, manage their gold economy, and time their upgrades and evolutions to withstand escalating pressure." },
          { type: "text", text: "Troops are selected and placed through a drag-and-drop sidebar built with Unity UI Toolkit. Dragging a troop card spawns a ghost icon that follows the cursor; on release, TroopDragController validates the drop position against placement zone masks — water zone, land zone, or path-only (for the Anchovy swarm)." },
        ]
      },
      {
        title: "Normal Troops",
        content: [
          {
            type: "troop-carousel",
            items: [
              {
                name: "Aquatic Worm",
                sprite: "/assets/project/Afloat/Troops/Normal/pngs/aquatic_worm.png",
                gif: "/assets/project/Afloat/Troops/Normal/gifs/aquaticworm-attack.gif",
                attackName: "Lunge Strike",
                description: "Swims directly to its target and bites for melee damage — immediately chains to the next enemy in range without returning home, sustaining relentless pressure across multiple targets."
              },
              {
                name: "Centipede",
                sprite: "/assets/project/Afloat/Troops/Normal/pngs/centipede.png",
                gif: "/assets/project/Afloat/Troops/Normal/gifs/centipede-attack.gif",
                attackName: "Acid Spit",
                description: "Spits a travelling acid projectile at the target; at upgrade tier 3 the projectile pierces through 2 enemies before dissolving."
              },
              {
                name: "Beetle",
                sprite: "/assets/project/Afloat/Troops/Normal/pngs/beetle.png",
                gif: "/assets/project/Afloat/Troops/Normal/gifs/beetle-attack.gif",
                attackName: "Ground Pound",
                description: "Winds up with a cartoonish scale-up, then slams down launching an expanding shockwave ring that deals splash damage and stuns every enemy it sweeps through."
              },
              {
                name: "Anchovies",
                sprite: "/assets/project/Afloat/Troops/Normal/pngs/anchovy.png",
                gif: "/assets/project/Afloat/Troops/Normal/gifs/anchovy-attack.gif",
                attackName: "Swarm Sweep",
                description: "Deployed on the enemy path; the school charges perpendicular to the path in a wide sweep, dealing damage to every enemy caught in the rectangular strike zone."
              },
              {
                name: "Praying Mantis",
                sprite: "/assets/project/Afloat/Troops/Normal/pngs/praying_mantis.png",
                gif: "/assets/project/Afloat/Troops/Normal/gifs/mantis-attack.gif",
                attackName: "Predator Leap",
                description: "Leaps to the primary target with an arcing jump; if 2+ enemies are in range, leaps to a second enemy before returning — gains a War Frenzy damage buff the more enemies are in range."
              },
              {
                name: "DragonFly",
                sprite: "/assets/project/Afloat/Troops/Normal/pngs/dragon_fly.png",
                gif: "/assets/project/Afloat/Troops/Normal/gifs/dragonfly-attack.gif",
                attackName: "Egg Bomb",
                description: "Orbits its placement in a continuous figure-8 flight path, dropping timed egg bombs that flicker as they burn — each explodes in a splash radius, hitting all enemies nearby."
              },
              {
                name: "Ant",
                sprite: "/assets/project/Afloat/Troops/Normal/pngs/ant.png",
                gif: "/assets/project/Afloat/Troops/Normal/gifs/ant-attack.gif",
                attackName: "Bite Rush",
                description: "Lunges to melee range, bites once, and dashes back to its home tile — re-engages immediately if the cooldown expires before it returns."
              },
              {
                name: "Axolotl",
                sprite: "/assets/project/Afloat/Troops/Normal/pngs/axolotl.png",
                gif: "/assets/project/Afloat/Troops/Normal/gifs/axolotl-attack.gif",
                attackName: "Water Ball",
                description: "Charges up a spinning Saturn-ring orb, then launches it — the ball ricochets between up to 3 enemies (more with upgrades), slowing each hit target to 45% speed for 1.5 seconds."
              },
              {
                name: "Frog",
                sprite: "/assets/project/Afloat/Troops/Normal/pngs/frog.png",
                gif: "/assets/project/Afloat/Troops/Normal/gifs/frog-attack.gif",
                attackName: "Tongue Snap",
                description: "Fires a procedural fleshy tongue at the target; at upgrade tier 3, the hit spawns two concentric water-ripple rings that slow enemies to 45% speed for 1.8 seconds as they expand outward."
              },
              {
                name: "Eagle",
                sprite: "/assets/project/Afloat/Troops/Normal/pngs/eagle.png",
                gif: "/assets/project/Afloat/Troops/Normal/gifs/eagle-attack.gif",
                attackName: "Dive Bomb",
                description: "Ascends to altitude (scale-up trick), locks onto a target, then plunges full speed — slamming the ground with a particle burst and an expanding golden shockwave ring on impact."
              },
              {
                name: "Koi",
                sprite: "/assets/project/Afloat/Troops/Normal/pngs/koi.png",
                gif: "/assets/project/Afloat/Troops/Normal/gifs/koi-attack.gif",
                attackName: "Laser Beam",
                description: "Charges up with crackling blue particles, then fires a 5-layer neon laser beam that pierces every enemy in its path simultaneously in a single shot."
              }
            ]
          }
        ]
      },
      {
        title: "Evolved Troops",
        content: [
          {
            type: "troop-carousel",
            items: [
              {
                name: "Fire Ant",
                sprite: "/assets/project/Afloat/Troops/Evolved/pngs/fire_ant.png",
                gif: "/assets/project/Afloat/Troops/Evolved/gifs/fireant-attack.gif",
                attackName: "Fire Bite",
                description: "Same melee lunge-and-bite attack, now with fiery orange-red impact VFX; radiates a growing ember aura when nearby Ant allies are present, boosting allied damage and speed."
              },
              {
                name: "Bullet Ant",
                sprite: "/assets/project/Afloat/Troops/Evolved/pngs/bullet_ant.png",
                gif: "/assets/project/Afloat/Troops/Evolved/gifs/bulletant-attack.gif",
                attackName: "Kinetic Sting",
                description: "Powerful melee sting with cyan-white shockwave impact; colony aura scales visually with the number of nearby same-type allies — the larger the colony, the stronger the aura buff."
              },
              {
                name: "Giant Mantis",
                sprite: "/assets/project/Afloat/Troops/Evolved/pngs/giant_praying_mantis.png",
                gif: "/assets/project/Afloat/Troops/Evolved/gifs/giantmantis-attack.gif",
                attackName: "Devastator Leap",
                description: "Enhanced double-leap attack; radiates a crimson War Frenzy fire aura (damage scales with enemies in range) and a red/blue Rampage aura (damage doubles per consecutive hit, up to 3 stacks)."
              },
              {
                name: "Poison Frog",
                sprite: "/assets/project/Afloat/Troops/Evolved/pngs/poison_frog.png",
                gif: "/assets/project/Afloat/Troops/Evolved/gifs/poisonfrog-attack.gif",
                attackName: "Poison Tongue",
                description: "Tongue attack now poisons enemies on hit, dealing damage over time; passively drips purple poison drool from its mouth — drool intensity increases with further upgrades."
              },
              {
                name: "Megalotl",
                sprite: "/assets/project/Afloat/Troops/Evolved/pngs/megalotl.png",
                gif: "/assets/project/Afloat/Troops/Evolved/gifs/megalotl-attack.gif",
                attackName: "Void Orb",
                description: "Violet-blue Saturn-ring orb ricochets between 5 enemies, slowing and dazing each hit; at high upgrades, chains feedback lightning arcs to nearby dazed enemies and triggers a Mind Shatter burst (5-second strong slow) when the daze expires."
              }
            ]
          }
        ]
      },
      {
        title: "Evolution Animation",
        content: [
          { type: "video", src: "/assets/project/Afloat/Afloat-evolve.mp4", width: "900px" },
          { type: "text", text: "The evolution sequence is fully procedural — no pre-baked clips. The troop's sprite spins with accelerating rotation while flipping orientation mid-turn to simulate a 3D tumble. At peak spin the old GameObject swaps for the evolved prefab in-place, transferring all accumulated state invisibly." },
          { type: "text", text: "A CameraShake coroutine fires simultaneously, applying randomised positional offsets scaled per evolution tier. The background pulses between two complementary colours tied to the troop's palette, giving each evolution a distinct visual signature." }
        ]
      },
      {
        title: "Wave System & Map Architecture",
        content: [
          { type: "image", src: "/assets/project/Afloat/Afloat-desc-2.png", width: "900px" },
          { type: "text", text: "The enemy path is defined by a series of waypoints. Each enemy's EnemyMovement component follows the chain while TroopBehavior uses waypoint index as a targeting priority key — always directing fire at the enemy closest to the exit. EnemyInstance handles health, applies incoming attack-type modifiers (melee immunity, damage reduction, speed burst), and notifies WaveManager on death." },
          { type: "text", text: "Troop placement uses layered Physics2D colliders to define valid zones: a water mask, an enemy-path mask for path-only troops, and land platforms. Troops are sorted by Y position each frame to produce correct depth ordering over the tiled map art, ensuring troops always appear to stand on the correct layer." }
        ]
      }
    ]
  },
  "EchoAI": {
    tokenizedName: "echoai",
    description: `An innovative, AI-powered web application designed to transform conversations into interactive learning experiences. Echo dynamically creates educational materials such as quizzes, flashcards, and notes directly from chat interactions. This project was the winner of the Education Track at MelbourneHack 2025.`,
    date: "MelbourneHack 2025 Winner",
    type: "Hackathon",
    award: "Winner",
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
      "Deployed the application to www.echoai.academy."],
    details: [
      {
        title: "Right Split Screen Logic",
        content: [
          { type: "image", src: "/assets/project/EchoAi/EchoAi-desc-3.png", width: "900px" },
          { type: "text", text: "1. Intent Classification (AI Model 1): When a user sends a message, the first AI model classifies the request, determining whether it is a simple text response or a request for a specific learning tool (e.g., flashcard, quiz, or notes)." },
          { type: "image", src: "/assets/project/EchoAi/EchoAi-desc-4.png", width: "700px" },
          { type: "text", text: "2. Content Generation (AI Model 2): If a learning tool is requested, a second AI model is invoked. This model uses function declarations that define the data structure for each quiz type to generate and format the content (questions, answers, descriptions) as required by the function triggered by the first AI." },
          { type: "image", src: "/assets/project/EchoAi/EchoAi-desc-5.png", width: "700px" },
          { type: "text", text: "3. Frontend Rendering: The final data object, containing a \"type\" and \"content,\" is sent to the frontend. The \"RightSplit.jsx\" component receives this data and uses a switch statement on the \"type\" property to render the appropriate React component, passing the generated content as props." }
        ]
      },
      {
        title: "The future of EchoAi",
        content: [
          { type: "image", src: "/assets/project/EchoAi/EchoAi-desc-6.png", width: "700px" },
          { type: "text", text: "The future vision for EchoAI is to become a seamless blend of Obsidian, GoodNotes, and Google Docs, integrating features like handwritten notes, note linking, collaboration, and advanced organization." },
          { type: "image", src: "/assets/project/EchoAi/EchoAi-desc-7.png", width: "800px" },
          { type: "text", text: "Additional quiz options are also planned, including true/false, short answer, matching, and diagram labeling." },
          { type: "image", src: "/assets/project/EchoAi/EchoAi-desc-8.png", width: "800px" },
          { type: "text", text: "AI enhancements will include automated marking for short answer questions, content regeneration, and image generation." },
          { type: "text", text: "A sneak peek of the potential future interface:" },
          { type: "image", src: "/assets/project/EchoAi/EchoAi-desc-9.png", width: "900px" }
        ]
      }
    ]
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
  }
};

export default projectData;

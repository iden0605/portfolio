// data for project section
const projectData = {
  "Road Accident Injury Analysis": {
    tokenizedName: "eodp-report",
    category: "university",
    description: `Road Accident Injury Analysis is a data science pipeline examining how seatbelt usage, seating position, and vehicle type relate to injury severity in Victorian road accidents. It combines correlation analysis (NMI scoring), K-Means clustering, and supervised learning (KNN and Decision Tree) to identify patterns and predict injury outcomes. Built as part of COMP20008 (Elements of Data Processing).`,
    date: "COMP20008 - Semester 1 2025",
    type: "University Project",
    teamSize: 4,
    role: "Data Analyst",
    thumbnail: "/assets/project/RoadAccidentInjuryAnalysis/eodp-report-image-1.png",
    technologies: ["Python", "pandas", "NumPy", "scikit-learn", "Matplotlib", "Seaborn"],
    liveLink: "",
    githubLink: "https://github.com/iden0605/EODP-report",
    itchLink: "",
    wwwLink: "",
    presentationLink: "https://docs.google.com/presentation/d/1UcdcDZ6U2yEj9p7NzXMXi6-1FQsNiiXwY28Xwpdc1aY/edit",
    status: "Completed",
    projectTime: "4 Weeks",
    keyResponsibilities: [
      "Built a data preprocessing pipeline that merges vehicle and person records on accident number, filters to seatbelt-relevant rows, and removes unknown vehicle types and incomplete seating position data.",
      "Implemented correlation analysis computing feature distributions and Normalized Mutual Information (NMI) scores between seatbelt usage, seating position, vehicle type, and injury severity, visualised with Seaborn bar charts.",
      "Developed K-Means clustering on one-hot encoded and scaled features, using the Elbow Method to determine the optimal cluster count and a heatmap to visualise injury severity across clusters.",
      "Trained and cross-validated KNN and Decision Tree classifiers using scikit-learn to predict injury severity from categorical accident features.",
      "Evaluated model performance with confusion matrices, classification reports, and a visualised decision tree diagram.",
      "Authored shared dataframe merging and one-hot encoding utilities used throughout the analysis pipeline.",
    ],
    details: [
      {
        title: "Correlation Analysis",
        content: [
          { type: "image", src: "/assets/project/RoadAccidentInjuryAnalysis/eodp-report-1.png", width: "900px" },
          { type: "text", text: "Each candidate feature — seatbelt worn, seating position, and vehicle type — is scored against injury level using Normalized Mutual Information (NMI), which captures non-linear dependence without assuming a particular relationship shape. Individually, all three features score below the 0.02 threshold marked on the chart, indicating that no single feature strongly predicts injury severity on its own — motivating a combined, model-based approach instead." },
        ]
      },
      {
        title: "K-Means Cluster Analysis",
        content: [
          { type: "image", src: "/assets/project/RoadAccidentInjuryAnalysis/eodp-report-2.png", width: "900px" },
          { type: "image", src: "/assets/project/RoadAccidentInjuryAnalysis/eodp-report-3.png", width: "900px" },
          { type: "text", text: "Categorical features are one-hot encoded and combined with a min-max scaled injury level before clustering. The Elbow Method plots inertia against k to identify the point of diminishing returns, settling on k=3. The resulting heatmap cross-tabulates each cluster against injury severity, revealing groupings that correspond to distinct combinations of seatbelt usage and seating position." },
        ]
      },
      {
        title: "Supervised Learning & Evaluation",
        content: [
          { type: "image", src: "/assets/project/RoadAccidentInjuryAnalysis/eodp-report-4.png", width: "900px" },
          { type: "image", src: "/assets/project/RoadAccidentInjuryAnalysis/eodp-report-5.png", width: "900px" },
          { type: "image", src: "/assets/project/RoadAccidentInjuryAnalysis/eodp-report-6.png", width: "900px" },
          { type: "text", text: "KNN and Decision Tree classifiers are trained on the encoded feature set and evaluated with 5-fold cross-validation for a more reliable accuracy estimate. The decision tree (depth-limited to 2 for visualisation) shows the model's top-level splits, while confusion matrices for both models highlight where predictions diverge from true injury levels — most notably confusion between adjacent severity classes." },
        ]
      }
    ]
  },
  "Image Classification Pipeline": {
    tokenizedName: "image-classification-pipeline",
    category: "university",
    description: `Image Classification Pipeline is an image classification system built for a University of Melbourne ML assignment, combining handcrafted computer vision features with transfer-learned ResNet50 embeddings. Three classifiers are benchmarked across two tasks using stratified cross-validation, with feature-group ablation studies isolating which inputs matter most.`,
    date: "COMP30027 2026 - Project 2",
    type: "University Project",
    teamSize: 1,
    role: "ML Engineer | Data Scientist",
    thumbnail: "/assets/project/ImageClassificationPipeline/image-classification-pipeline-image-1.png",
    technologies: ["Python", "scikit-learn", "PyTorch", "pandas", "NumPy", "Matplotlib", "Seaborn", "Pillow"],
    liveLink: "",
    githubLink: "https://github.com/iden0605/COMP30027-Project-2",
    itchLink: "",
    wwwLink: "",
    datasetLink: "https://www.kaggle.com/datasets/alessiocorrado99/animals10/data",
    docsLink: "https://docs.google.com/document/d/1FHnPNzXjPvoCEubfBwXmR1OPi7lGqbwQ/edit",
    status: "Completed",
    projectTime: "3 Weeks",
    keyResponsibilities: [
      "Built a multi-source feature pipeline combining colour histograms, HOG-PCA, and handcrafted features with pretrained ResNet50 embeddings.",
      "Benchmarked Logistic Regression, RBF-SVM, and Random Forest classifiers via stratified holdout and 5-fold cross-validation.",
      "Designed a feature-group ablation study to isolate the contribution of each feature source to accuracy.",
      "Built PCA and confusion matrix diagnostics to analyse class separability and model errors.",
      "Automated the full pipeline end-to-end, from feature extraction to Kaggle submission generation.",
    ],
    details: [
      {
        title: "Feature Pipeline Architecture",
        content: [
          { type: "text", text: "Each image is represented by concatenating three provided feature groups — a 96-dim colour histogram, a 100-dim HOG-PCA descriptor, and 23 additional handcrafted features — with a 2048-dim embedding extracted from an ImageNet-pretrained ResNet50's penultimate layer. The backbone runs in inference mode only, with extracted embeddings cached to disk so repeat runs skip the forward pass entirely." },
        ]
      },
      {
        title: "Class Separability via PCA",
        content: [
          { type: "image", src: "/assets/project/ImageClassificationPipeline/image-classification-pipeline-1.png", width: "900px" },
          { type: "text", text: "Standardised features are projected to two principal components per task, coloured by class label. The resulting scatter reveals how well-separated the classes are in feature space before any classifier is trained, with axis limits clipped to the 1st–99th percentile so outliers don't compress the visible clustering." },
        ]
      },
      {
        title: "Model Confusion Matrices",
        content: [
          { type: "image", src: "/assets/project/ImageClassificationPipeline/image-classification-pipeline-2.png", width: "900px" },
          { type: "text", text: "Logistic Regression, RBF-SVM, and Random Forest are each fit on an 80/20 stratified holdout split and evaluated with accuracy, precision, recall, and F1. Logistic Regression came out ahead on both tasks; its confusion matrix here breaks down exactly which classes it confuses most often." },
        ]
      },
      {
        title: "Feature-Group Ablation",
        content: [
          { type: "image", src: "/assets/project/ImageClassificationPipeline/image-classification-pipeline-3.png", width: "900px" },
          { type: "text", text: "The best-performing model is retrained on isolated feature subsets — colour only, HOG-PCA only, extra features only, all provided features, ResNet50 only, and everything combined — to quantify how much each source contributes to validation accuracy." },
        ]
      },
    ]
  },
  "Mixed Naïve Bayes Classifier": {
    tokenizedName: "mixed-naive-bayes-classifier",
    category: "university",
    description: `Mixed Naïve Bayes Classifier is a from-scratch income prediction system for the UCI Adult Census dataset, combining Gaussian and Categorical Naïve Bayes to classify individuals as earning above or below $50K. Built for COMP30027 Machine Learning, the project extends the base classifier with a semi-supervised label propagation pipeline and rigorously evaluates its impact on accuracy and confidence calibration.`,
    date: "COMP30027 2026 - Project 1",
    type: "University Project",
    teamSize: 1,
    role: "Machine Learning Developer",
    thumbnail: "/assets/project/MixedNaiveBayesClassifier/mixed-naive-bayes-classifier-image-1.png",
    technologies: ["Python", "scikit-learn", "pandas", "NumPy", "Matplotlib", "Seaborn"],
    liveLink: "",
    githubLink: "https://github.com/iden0605/COMP30027-Project-1",
    itchLink: "",
    wwwLink: "",
    datasetLink: "https://www.kaggle.com/datasets/uciml/adult-census-income",
    docsLink: "https://docs.google.com/document/d/1oi-P5k8m5dYgPdkPJjCRMb4uqG7cDPWZnqceAskdUOA/edit?tab=t.0#heading=h.tr61mkxnurdp",
    status: "Completed",
    projectTime: "2 Weeks",
    keyResponsibilities: [
      "Implemented a Mixed Naïve Bayes classifier from scratch, combining GaussianNB for continuous features and CategoricalNB with Laplace smoothing for categorical features via scikit-learn.",
      "Built an ordinal encoding pipeline to handle unseen categorical values at test time, mapping out-of-vocabulary entries to a dedicated unknown value.",
      "Evaluated model performance using accuracy, confusion matrices, and per-class F1 scores, and analysed prediction confidence via posterior probability ratios.",
      "Designed a two-stage semi-supervised label propagation pipeline that iteratively pseudo-labels unlabelled data above a tuned confidence threshold and retrains the model.",
      "Diagnosed why label propagation degraded accuracy (81.01% vs 83.07% baseline), tracing the cause to noisy pseudo-labels amplifying class imbalance on the minority (>50K) class.",
      "Authored a full written report analysing prior probabilities, top predictive features, threshold tuning, and comparative confidence distributions across model variants.",
    ],
    details: [
      {
        title: "Supervised Model & Top Predictors",
        content: [
          { type: "image", src: "/assets/project/MixedNaiveBayesClassifier/mixed-naive-bayes-classifier-1.png", width: "900px" },
          { type: "text", text: "The classifier splits features by type: continuous attributes (age, hours-per-week, capital gain/loss) are modeled with GaussianNB, while categorical attributes (occupation, education, marital status) use CategoricalNB with Laplace smoothing (α=1.0) to handle zero-frequency categories. Top predictors are identified via the probability ratio R = P(feature value | >50K) / P(feature value | ≤50K), surfacing which categorical values most strongly separate the two income classes." },
        ]
      },
      {
        title: "Evaluation & Confidence Calibration",
        content: [
          { type: "image", src: "/assets/project/MixedNaiveBayesClassifier/mixed-naive-bayes-classifier-2.png", width: "900px" },
          { type: "text", text: "On the held-out test set, the model achieves 83.07% accuracy, with F1=0.89 for ≤50K and F1=0.61 for >50K — reflecting the class imbalance in the training data. An ordinal encoder maps unseen categorical values at test time to a dedicated unknown-value token rather than failing, and out-of-vocabulary rows are tracked separately to quantify their impact on predictions." },
          { type: "image", src: "/assets/project/MixedNaiveBayesClassifier/mixed-naive-bayes-classifier-3.png", width: "900px" },
          { type: "text", text: "Prediction confidence is measured via the log posterior ratio log(P(>50K|x) / P(≤50K|x)). Plotting this distribution across correct and incorrect predictions shows the model is well-calibrated on confident predictions but produces a cluster of low-margin, easily-flipped predictions near the decision boundary — concentrated in the minority >50K class." },
        ]
      },
      {
        title: "Semi-Supervised Label Propagation",
        content: [
          { type: "image", src: "/assets/project/MixedNaiveBayesClassifier/mixed-naive-bayes-classifier-4.png", width: "900px" },
          { type: "text", text: "To leverage unlabelled data, a two-stage semi-supervised pipeline first trains on the labelled set, then iteratively pseudo-labels unlabelled instances whose posterior ratio exceeds a confidence threshold, retraining on the expanded set. Thresholds from 0.5 to 10.0 are swept to balance how many pseudo-labels get admitted against how noisy they are." },
        ]
      },
      {
        title: "Supervised vs Semi-Supervised Comparison",
        content: [
          { type: "image", src: "/assets/project/MixedNaiveBayesClassifier/mixed-naive-bayes-classifier-5.png", width: "900px" },
          { type: "text", text: "Despite the additional pseudo-labelled data, the semi-supervised model underperforms the baseline — 81.01% vs 83.07% accuracy. Comparing confusion matrices and Gaussian feature means before and after propagation shows the >50K class (with only 53% recall) generates disproportionately noisy pseudo-labels, which reinforce the model's existing bias toward the majority ≤50K class rather than correcting it." },
          { type: "image", src: "/assets/project/MixedNaiveBayesClassifier/mixed-naive-bayes-classifier-6.png", width: "900px" },
        ]
      },
    ]
  },
  "NAUT": {
    tokenizedName: "naut",
    category: "hackathons",
    description: `NAUT is a third-person wave-survival game set on a fully traversable, tiny spherical planet, winner of MAC Game Jam 2026. Players fend off escalating enemy waves and arena boss contracts while upgrading their suit and pistol between runs, with movement, combat, and gravity all following the planet's curved surface. Built alongside one teammate in 2 days.`,
    date: "MAC Game Jam 2026 Winner",
    type: "Game Jam",
    award: "Winner",
    teamSize: 2,
    role: "Game Programmer | Animator | SFX Engineer",
    thumbnail: "/assets/project/NAUT/naut-image-1.png",
    previewVid: "/naut-hover.mp4",
    technologies: ["Unity (C#)", "Universal Render Pipeline", "Unity Visual Effect Graph", "Unity Input System", "Unity UI"],
    liveLink: "https://www.youtube.com/watch?v=mfNldfKpMiU",
    githubLink: "https://github.com/IJ-hackies/mac-hackathon-2026",
    itchLink: "https://iden0605.itch.io/naut",
    wwwLink: "",
    status: "Released",
    projectTime: "2 Days",
    keyResponsibilities: [
      "Implemented planet-relative player movement and a stable third-person camera across the spherical world's curved surface.",
      "Designed and integrated all sound effects and audio for combat, movement, and environmental feedback.",
      "Built enemy and player attack systems, including projectile and melee logic paired with custom VFX for impacts and abilities.",
      "Authored the guided tutorial sequence teaching movement, combat, pickups, and base interaction.",
      "Developed the leaderboard system end-to-end, including backend score submission and the in-game UI.",
      "Implemented the run-scoped scoring system tied to wave survival and gold economy.",
      "Built out the explorable landing zone and world, including base layout, arenas, and environmental dressing.",
    ],
    details: [
      {
        title: "Planet Traversal",
        content: [
          { type: "video", src: "/assets/project/NAUT/naut-1.mp4", width: "900px" },
          { type: "text", text: "Movement, gravity, and camera orientation all follow the curved surface of the planet. The player's controller reorients itself to the local surface normal each frame, applying radial gravity that pulls toward the planet's center, while the third-person camera stays stable relative to the player's up axis as they circumnavigate the globe." },
        ]
      },
      {
        title: "Combat & VFX",
        content: [
          { type: "video", src: "/assets/project/NAUT/naut-2.mp4", width: "900px" },
          { type: "text", text: "The astronaut's pistol fires projectiles with a reloadable magazine and reserve ammunition, backed by a targeted secondary melee attack. Enemy and player attacks trigger custom VFX built with Unity's Visual Effect Graph, layered with hit-reaction feedback and enemy dissolve effects on death." },
        ]
      },
      {
        title: "Boss Fight",
        content: [
          { type: "video", src: "/assets/project/NAUT/naut-3.mp4", width: "900px" },
          { type: "text", text: "Every tenth wave culminates in an untimed, two-stage arena encounter against Barbara the Bee. The fight escalates across both stages with distinct attack patterns, testing the player's build against a single high-pressure threat rather than a swarm." },
        ]
      },
      {
        title: "Leaderboard",
        content: [
          { type: "image", src: "/assets/project/NAUT/naut-4.png", width: "900px" },
          { type: "text", text: "The leaderboard tracks both highest score and furthest wave reached, backed by a persistent backend for submission and retrieval. Podium and paginated table views highlight top runs, with medal tiers awarded based on rank." },
        ]
      },
      {
        title: "Skills & Upgrades",
        content: [
          { type: "image", src: "/assets/project/NAUT/naut-5.png", width: "900px" },
          { type: "text", text: "Gold earned during a run is spent at three base stations: Supply for healing and ammunition, Archive for ten-level stat upgrades across health, speed, fire rate, and damage, and Special for one-time build-defining skills like Hold to Fire, Fortune, and Med Kit. Progression resets at the start of each new run." },
        ]
      },
      {
        title: "Mech Ultimate",
        content: [
          { type: "video", src: "/assets/project/NAUT/naut-6.mp4", width: "900px" },
          { type: "text", text: "The 20-second Thunder Ultimate transforms the astronaut into a Mech with infinite ammunition, electric attacks, slowing bolts, and a damage-blocking shield — a temporary power spike for cutting through dense wave pressure." },
        ]
      },
    ]
  },
  "Everchanging Grimoire": {
    tokenizedName: "everchanging-grimoire",
    category: "hackathons",
    description: `Everchanging Grimoire is a 2D top-down roguelite dungeon crawler built in 3 days at HackMelbourne Hackiethon 2026. Winner among 50 submissions, awarded "Most Entertaining Game". The dungeon is a sentient, hungry book. After every floor, the Gemini API reads your playstyle, spells, and damage taken to generate the next floor's theme, enemies, and a new spell designed to counter you. Spells are composed from a vocabulary of around 60 behaviour tags, letting the LLM create emergent, never-repeating combinations without any runtime code generation.`,
    date: "HackMelbourne Hackiethon 2026 Winner",
    type: "Game Jam",
    award: "Winner",
    teamSize: 2,
    role: "Game Developer | Game Designer",
    thumbnail: "/assets/project/EverchangingGrimoire/everchanging-grimoire-image-1.png",
    previewVid: "/everchanging-grimoire-hover.mp4",
    images: [],
    technologies: ["Unity (C#)", "Gemini API", "Google AI Function Calling", "PixelLab", "Python"],
    liveLink: "https://www.youtube.com/watch?v=GSL-hCWdvF8&t=1s",
    githubLink: "https://github.com/IJ-hackies/MelbourneHack-Hackiethon-2026",
    itchLink: "https://elytride.itch.io/everchanging-grimoire",
    wwwLink: "",
    status: "Completed",
    projectTime: "3 Days",
    keyResponsibilities: [
      "Implemented A* pathfinding, attack behaviour, and frame-by-frame attack animations for all enemy types.",
      "Designed and implemented Unity 2D lighting, proximity-based spatial audio, and all sound effects across the game.",
      "Configured and managed TilemapCollider2D and CompositeCollider2D across all tileset chambers, and physics colliders for all in-game entities.",
      "Built all player movement mechanics and spell-casting attack systems, including quickswap between 3 active loadout slots.",
      "Authored the full ~60-tag spell behaviour vocabulary used by Gemini to compose unique spells each run; covering movement types, trajectory modifiers, on-impact effects, status effects, and corruption tags.",
      "Implemented Gemini-driven environmental item placement, using structured LLM output to populate each floor with context-aware props and hazards.",
      "Created the introduction cutscene using Unity's Timeline and Animator systems.",
      "Designed and built the Player HUD, including health display, active spell hotbar, and spell quickswap indicators.",
      "Implemented the tutorial section, guiding new players through movement, spell casting, and the Grimoire system.",
    ],
    details: [
      {
        title: "All Enemies",
        content: [
          {
            type: "troop-carousel",
            items: [
              { name: "Alien", sprite: "/assets/project/EverchangingGrimoire/Enemies/pngs/Alien.png", gif: "/assets/project/EverchangingGrimoire/Enemies/mp4s/Alien.mp4", attackName: "Corrosive Spit", description: "Launches a glob of toxic goo at the player. On hit, the poison seeps in — leaving them vulnerable and taking 10% increased damage from all sources for the duration." },
              { name: "Bear", sprite: "/assets/project/EverchangingGrimoire/Enemies/pngs/Bear.png", gif: "/assets/project/EverchangingGrimoire/Enemies/mp4s/Bear.mp4", attackName: "Savage Mauling", description: "Lunges forward with a ferocious bite that tears through defences. The wound bleeds heavily, dealing escalating damage over time." },
              { name: "Dragon Newt", sprite: "/assets/project/EverchangingGrimoire/Enemies/pngs/DragonNewt.png", gif: "/assets/project/EverchangingGrimoire/Enemies/mp4s/DragonNewt.mp4", attackName: "Leaping Barrage", description: "Launches into the air before crashing down with explosive force. The impact detonates a burst of projectiles in all directions, punishing anyone caught nearby." },
              { name: "Evil Paladin", sprite: "/assets/project/EverchangingGrimoire/Enemies/pngs/EvilPaladin.png", gif: "/assets/project/EverchangingGrimoire/Enemies/mp4s/EvilPaladin.mp4", attackName: "Wrath Strike", description: "A measured, crushing blow delivered with a corrupted iron fist. Simple but devastating — each hit carries the full weight of a fallen warrior." },
              { name: "Fire Wizard", sprite: "/assets/project/EverchangingGrimoire/Enemies/pngs/FireWizard.png", gif: "/assets/project/EverchangingGrimoire/Enemies/mp4s/FireWizard.mp4", attackName: "Cinder Bolt", description: "Hurls a blazing bolt of condensed flame. The searing heat lingers on impact, threatening to set the player ablaze." },
              { name: "Ghost", sprite: "/assets/project/EverchangingGrimoire/Enemies/pngs/Ghost.png", gif: "/assets/project/EverchangingGrimoire/Enemies/mp4s/Ghost.mp4", attackName: "Haunting Orb", description: "Hurls a spectral ice sphere in a slow arc toward the player. A direct hit deals instant damage — but a miss shatters it on the ground, leaving a lingering chill zone that slows anyone who passes through." },
              { name: "Ice Wizard", sprite: "/assets/project/EverchangingGrimoire/Enemies/pngs/IceWizard.png", gif: "/assets/project/EverchangingGrimoire/Enemies/mp4s/IceWizard.mp4", attackName: "Frost Shard", description: "Fires a razor-sharp ice shard with precision. On hit, the intense cold slows the player's movement — making escape, and retaliation, far more difficult." },
              { name: "Skeleton", sprite: "/assets/project/EverchangingGrimoire/Enemies/pngs/Skeleton.png", gif: "/assets/project/EverchangingGrimoire/Enemies/mp4s/Skeleton.mp4", attackName: "Rattling Kick", description: "Winds up with a telegraphed spinning kick, bones rattling on the swing. Deceptively fast for an undead creature — the impact carries surprising force behind those brittle limbs." },
              { name: "Vampire", sprite: "/assets/project/EverchangingGrimoire/Enemies/pngs/Vampire.png", gif: "/assets/project/EverchangingGrimoire/Enemies/mp4s/Vampire.mp4", attackName: "Sanguine Beam", description: "Draws power inward with a brief charge before unleashing a concentrated beam of pressurised blood, dealing sustained damage to anything caught in its crimson path." },
              { name: "Zombie", sprite: "/assets/project/EverchangingGrimoire/Enemies/pngs/Zombie.png", gif: "/assets/project/EverchangingGrimoire/Enemies/mp4s/Zombie.mp4", attackName: "Lurching Punch", description: "A slow, lumbering punch that telegraphs every move — but hits surprisingly hard. What the Zombie lacks in speed, it makes up for in relentless persistence." },
            ]
          }
        ]
      },
      {
        title: "Introduction Cutscene",
        content: [
          { type: "video", src: "/assets/project/EverchangingGrimoire/everchanging-grimoire-1.mp4", width: "900px" },
          { type: "text", text: "The introduction cutscene is built using Unity's Timeline and Animator systems. A CutscenePlayer component sequences timed tracks: dialogue panels fade in and out using CanvasGroup alpha tweens, sprite animations play in lockstep with narration text, and the camera drifts with a slow lerp to establish the Grimoire's world before the player takes control." },
        ]
      },
      {
        title: "Spell Composition System",
        content: [
          { type: "video", src: "/assets/project/EverchangingGrimoire/everchanging-grimoire-spells.mp4", width: "900px" },
          { type: "text", text: "Spells are pure data, no runtime code generation. SpellExecutor composes behaviour at cast time from ~60 registered tag handlers covering movement types, trajectory modifiers, on-impact effects, status effects, and corruption tags. A Merge Ritual fuses 2–3 spells into one that fires all components simultaneously, inheriting every tag." },
        ]
      },
      {
        title: "Spell Merging",
        content: [
          { type: "video", src: "/assets/project/EverchangingGrimoire/everchanging-grimoire-merge.mp4", width: "900px" },
          { type: "text", text: "This is the merge ritual, where the player selects 2 or 3 spells from their Grimoire to fuse into a single spell that fires all components simultaneously, inheriting every tag from every source. The merged spell's name and flavor text are generated by a separate Gemini call, framing the fusion as an act of defiance against the Grimoire. Source spells are consumed on merge, and merged spells cannot be merged further." },
        ]
      },
      {
        title: "Gemini-Driven Floor Generation",
        content: [
          { type: "video", src: "/assets/project/EverchangingGrimoire/everchanging-grimoire-2.mp4", width: "900px" },
          { type: "text", text: "At the end of every floor, SessionLogger assembles a payload capturing combat style, dominant element, damage sources, HP, time spent, and full spell loadout details. This is sent to Gemini via function calling, enforcing a strict generate_floor schema. The manifest drives the next floor's tileset, enemy spawns with modifier flags, a new spell, player HP scaling, and a stage_message written in the Chronicle's voice, taunting the player directly about how they played." },
        ]
      },
      {
        title: "The Chronicle's Verdict",
        content: [
          { type: "image", src: "/assets/project/EverchangingGrimoire/everchanging-grimoire-death.png", width: "900px" },
          { type: "text", text: "On death, the full run's session history is sent to Gemini for a final performance analysis — the Chronicle delivers a personalised post-mortem in its taunting voice, reflecting on the player's combat style, spell choices, floors reached, and what ultimately finished them. It's the Grimoire's closing statement on the Seeker it just collected." },
        ]
      },
    ]
  },
  "EchoAI": {
    tokenizedName: "echoai",
    category: "hackathons",
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
  "Git Gud Coach": {
    tokenizedName: "git-gud-coach",
    category: "hackathons",
    description: `Git Gud Coach is a VS Code extension that watches your Git behaviour and roasts you for it like a toxic esports coach. Every commit, push, and merge is scored across a Bronze-to-Diamond rank ladder with AI-generated roasts powered by 5 providers, 20 achievements, and a Weekly Hygiene Report quantifying how unhinged your week actually was. Built at Trendhacker 2026 by team Trend Hackers.`,
    date: "Trendhacker 2026",
    type: "Hackathon",
    teamSize: 3,
    role: "Fullstack Extension Developer",
    thumbnail: "/assets/project/GitGud/git-gud-image.png",
    previewVid: "",
    images: [],
    technologies: ["TypeScript", "VS Code Extension API", "Node.js", "Next.js", "React", "Gemini API"],
    liveLink: "",
    instagramLink: "https://www.instagram.com/p/DX4QxVyiTJe-xHEW-OICwsUxRRHvPIl84w3umU0/?hl=en",
    githubLink: "https://github.com/IJ-hackies/HackMelbourne-Trend-Hackers",
    itchLink: "",
    wwwLink: "https://git-gud-extension.app/",
    status: "Released",
    projectTime: "4 Days",
    keyResponsibilities: [
      "Designed and implemented the Git Gud Coach landing page, including layout, copy, and deployment to GitHub Pages.",
      "Built the Git event pipeline — a filesystem watcher that captures commits, pushes, file diffs, and merge activity in real time.",
      "Implemented the AI coaching pipeline: structured prompt construction from raw Git event data, fed into the Gemini API using a prompt-engineered system prompt tuned for toxic esports coach tone.",
      "Developed live merge conflict resolution assistance, detecting active conflict state via the Git pipeline and triggering per-block roasts through the same parsing and AI flow.",
      "Curated and implemented the meme and reaction image library, including the tag taxonomy and verdict bridge that scopes which meme categories the AI can draw from per offense.",
      "Improved the VS Code extension sidebar UI, including layout, card structure, and visual polish across the Rank, Latest Roast, and Settings cards.",
      "Packaged and published the extension to the VS Code Marketplace, handling build configuration and the publishing workflow.",
    ],
    details: [
      {
        title: "Source Control & Commit UI",
        content: [
          { type: "image", src: "/assets/project/GitGud/git-gud-image-1.png", width: "900px" },
          { type: "text", text: "The in-sidebar Source Control card connects directly to the VS Code Git API. A branch dropdown lists all local and remote branches, and switching prompts for confirmation before checkout. The AI Generate button constructs a prompt from the staged diff and fires a Gemini request, returning a commit message in either clean (Conventional Commits) or savage (toxic-coach) tone based on the active toggle. The Commit and Push button auto-stages changes before committing and auto-sets the upstream remote on first push." },
        ]
      },
      {
        title: "Roast & Tip History",
        content: [
          { type: "image", src: "/assets/project/GitGud/git-gud-image-2.png", width: "900px" },
          { type: "text", text: "Every Git event produces a scored verdict that feeds the AI coaching pipeline. A structured prompt is built from the event type, file diff summary, and a scoped subset of meme tags matched to the offense category. Gemini returns a roast and a coaching tip as a paired response. The Recent Offenses card renders these pairs in sequence, newest first, with the roast styled in the extension's hot-pink accent and the tip in muted text below." },
        ]
      },
      {
        title: "VS Code Notifications",
        content: [
          { type: "image", src: "/assets/project/GitGud/git-gud-image-3.png", width: "900px" },
          { type: "text", text: "Git Gud surfaces feedback as native VS Code notifications immediately after each scored event. Positive deltas trigger hype messages while negative deltas trigger roasts. Each notification fires from the extension host using the VS Code notifications API, keeping feedback in the editor flow without requiring the sidebar to be open." },
        ]
      },
      {
        title: "Achievements",
        content: [
          { type: "image", src: "/assets/project/GitGud/git-gud-image-4.png", width: "900px" },
          { type: "text", text: "Twenty achievements unlock from real Git behaviour tracked across the session, including clean streaks, force-push counts, late-night commits, and merge conflict volume. Each achievement has a threshold condition evaluated against the running stats object. Unlocking one fires a notification and appends it to the Achievements card with the unlock timestamp." },
        ]
      },
      {
        title: "Weekly Hygiene Report",
        content: [
          { type: "image", src: "/assets/project/GitGud/git-gud-image-5.png", width: "900px" },
          { type: "text", text: "The Weekly Hygiene Report is a webview panel that aggregates 7 days of Git activity into a structured metrics summary. It tracks total commits, force-pushes, pushes to main, merge conflicts, branch switches, average commit size, score delta, savage roast rate, and clean streak. Each metric is paired with a roast caption generated from the week's data, and the panel opens via the Weekly Hygiene Report command." },
        ]
      },
      {
        title: "Rank Card",
        content: [
          { type: "image", src: "/assets/project/GitGud/git-gud-image-6.png", width: "900px" },
          { type: "text", text: "The rank card is a 1200x630 SVG generated from the current session stats, displaying rank tier, personality archetype, and top offenses as a shareable rap sheet. It is constructed entirely in memory from the stats object and exported via the Export Rank Card command, ready to post directly to X." },
        ]
      },
    ]
  },
  "Afloat": {
    tokenizedName: "afloat",
    category: "hackathons",
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
  "Stella Taco": {
    tokenizedName: "stella-taco",
    category: "hackathons",
    description: `Stella Taco is an AI-powered platform that transforms any uploaded content (PDFs, lecture notes, journals, and transcripts)into a navigable 3D galaxy. A Gemini-powered pipeline breaks the material into solar systems, planets, and concepts, then weaves long-form character-driven stories through them. The result is rendered as an interactive Three.js space where knowledge becomes a cosmos to explore, complete with a public discovery feed where anyone can browse and share their galaxies.`,
    date: "CISSA CodeBrew 2026",
    type: "Hackathon",
    teamSize: 3,
    role: "Fullstack Developer | UI Designer",
    thumbnail: "/assets/project/StellaTaco/stella-taco-image-1.png",
    previewVid: "/stella-taco-hover.mp4",
    images: [],
    technologies: ["Vue 3 (TypeScript)", "Three.js", "D3 Force-3D", "GSAP", "Tailwind CSS v4", "Bun", "Hono", "Gemini API", "SQLite"],
    liveLink: "https://www.youtube.com/watch?v=EIP-Je_wtPs",
    githubLink: "https://github.com/IJ-hackies/CISSA-codebrew-2026",
    itchLink: "",
    wwwLink: "https://www.stellataco.com/",
    status: "Completed",
    projectTime: "3 Days",
    keyResponsibilities: [
      "Implemented the full 3D interactive galaxy and solar system scene using Three.js, including textured planet spheres, particle-formation suns, concept soul sprites, and force-directed graph layout.",
      "Built all frontend logic for galaxy creation, append, and deletion. Including polling, loading states, cancel flows, and frontend data caching with localStorage hydration.",
      "Designed and implemented The Taco, a public discovery feed where users browse, search, and sort all published galaxies.",
      "Implemented the fullstack append pipeline, which involved wiring the frontend upload flow through the Gemini API to expand an existing galaxy with new solar systems, planets, and stories, then reflecting all changes in the UI.",
      "Designed all solar system particle presets, planet texture assignments (20 types: 9 NASA-style, 11 procedural exotic), and all GSAP transition animations including warp-speed effects and camera fly-ins.",
      "Built the planet drawer, concept soul drawer, and story reader sidebar. Including wikilink rendering, cross-system planet traversal, and the one-rail-at-a-time drawer stack pattern.",
    ],
    details: [
      {
        title: "Galaxy View",
        content: [
          { type: "video", src: "/assets/project/StellaTaco/stella-taco-1.mp4", width: "900px" },
          { type: "text", text: "The galaxy is a Three.js force-directed graph where each solar system is a cluster of particle formations. D3 Force-3D runs the simulation: charge repulsion separates systems, a centering force keeps the graph compact, and link forces pull connected entities together. Each system's formation shape is randomly assigned on first generation and persisted to localStorage, so the layout is stable across refreshes. Concept souls float between systems as THREE.Sprite objects with a sine-wave bob and distance-based opacity fade. The deep-space background is a layered CSS radial gradient showing through the transparent Three.js canvas, backed by viewport-scaled hero stars, nebula billboard sprites, and a filamentary space rift fixed in the upper sky." },
        ]
      },
      {
        title: "Solar System & Planets",
        content: [
          { type: "video", src: "/assets/project/StellaTaco/stella-taco-2.mp4", width: "900px" },
          { type: "text", text: "Clicking a solar system triggers a GSAP camera fly-in through a warp-speed effect before landing in the solar system view. Each planet is a textured THREE.Mesh: 20 types seeded from the planet's ID, covering 9 NASA Solar System Scope 2K textures and 11 procedural exotic canvas textures including lava, crystal, void, and gas giant variants. Saturn-type planets render a RingGeometry with radially-remapped UVs. The central sun is the same particle formation from the galaxy view, scaled to 60% and matched by colour via a shared palette and seeded RNG, so the cluster shape and sun always agree. Opening a planet drawer fans out animated ShaderMaterial dash lines to all connected planets, marching away from the active planet toward its neighbours." },
        ]
      },
      {
        title: "Story Reader",
        content: [
          { type: "image", src: "/assets/project/StellaTaco/stella-taco-3.png", width: "900px" },
          { type: "text", text: "Each galaxy contains multiple long-form stories, thousands of words of character-driven narrative generated by Gemini. The story reader is a left-rail DrawerShell that lives in both the galaxy and solar system views. Stories are structured as an introduction, a series of planet scenes, and a conclusion. Each scene's 'Visit planet' button triggers cross-system traversal: if the destination is in a different solar system, the current story state is captured, the camera transitions back to the galaxy, auto-enters the target system, and restores the story as a Resume affordance on arrival. Wikilinks in prose bodies resolve via a wikiLinkIndex to open the relevant planet or soul drawer inline." },
        ]
      },
      {
        title: "The Taco",
        content: [
          { type: "image", src: "/assets/project/StellaTaco/stella-taco-4.png", width: "900px" },
          { type: "text", text: "The Taco is a public discovery feed where any galaxy can be published and browsed by anyone. Publishing requires the owner token stored in localStorage at galaxy creation. The feed supports sorting by newest, most planets, and A→Z, plus a live search filter. Each card shows the galaxy's AI-generated title, tagline, and planet count. Unpublishing removes the galaxy from the feed immediately. The frontend data cache hydrates the gallery from localStorage on import, return visits render the feed instantly before any network request completes." },
        ]
      },
      {
        title: "Upload & Launch",
        content: [
          { type: "video", src: "/assets/project/StellaTaco/stella-taco-5.mp4", width: "900px" },
          { type: "text", text: "The chat landing accepts pasted text, PDFs, images, and other files up to 10 MB total. On submit, the input animates into a rocket launch sequence, a black-hole collapse, then a warp-speed streak before the galaxy view fades in. Pipeline progress is streamed via SSE, with per-stage rotating status messages and an animated ellipsis above the rocket. A cancel button aborts at any point: it clears the mesh store, stops the animation, and navigates back to the landing page." },
        ]
      },
    ]
  },
  "GoT Card Game": {
    tokenizedName: "got-card-game",
    category: "university",
    description: `GoT Card Game is a Game-of-Thrones-themed trick-taking card game built for SWEN30006, featuring an AI opponent driven by a utility-based decision system. Rather than scripted logic, the bot weighs "considerations" — attack, defence, and magic value — across both its own team and opponents to choose optimal plays each turn. Built on the jCardGame/jGameGrid framework with a strong emphasis on design patterns (Strategy, Template Method) and test-driven correctness.`,
    date: "SWEN30006 - Sem 1 2026",
    type: "University Project",
    teamSize: 3,
    role: "AI/Bot Systems Programmer",
    thumbnail: "/assets/project/GoTCardGame/got-card-game-image-1.png",
    technologies: ["Java", "jCardGame", "jGameGrid", "JUnit", "Gradle"],
    liveLink: "",
    githubLink: "https://github.com/iden0605/SWEN30006-Project",
    itchLink: "",
    wwwLink: "",
    diagramLink: "https://app.diagrams.net/#G1BVWYMf6pt39tDre5Mqp2IJQipgTEY-Vp#%7B%22pageId%22%3A%22KRCQmE4dGvrjPAfybiek%22%7D",
    docsLink: "https://docs.google.com/document/d/153oycY4yHrhkKXyIFyI3zxOLeZuUR2ItS5ROYUbh5Dk/edit?tab=t.o46iujvcilzz",
    status: "Completed",
    projectTime: "2 Weeks",
    keyResponsibilities: [
      "Designed a utility-based decision system for the AI bot, using weighted Consideration classes (attack, defence, magic) scored across team and opponent state via a ConsiderationFactory.",
      "Implemented SmartBotPlayer and SmartBotMode, selecting optimal moves by evaluating scored considerations against legal plays.",
      "Refactored the smart bot's decision logic to the Template Method pattern for cleaner extensibility across attack/defence modes.",
      "Diagnosed and fixed pile calculation and scoring bugs in PileCalculator, correcting test failures in GameTest.",
      "Authored project documentation, including static/dynamic design diagrams and team specifications.",
    ],
    details: [
      {
        title: "Trick-Taking Gameplay",
        content: [
          { type: "image", src: "/assets/project/GoTCardGame/got-card-game-1.png", width: "900px" },
          { type: "text", text: "Each round, four players battle across two piles — Attack and Defence — built from Hand objects rendered via jGameGrid. Suits map to distinct mechanics: hearts are played to score, while clubs, diamonds, and spades modify each pile's attack or defence value, prompting the active player to select a valid card and target pile each turn." },
        ]
      },
      {
        title: "Adaptive Move Selection",
        content: [
          { type: "image", src: "/assets/project/GoTCardGame/got-card-game-2.png", width: "900px" },
          { type: "text", text: "SmartBotPlayer delegates each turn to LegalBotPlayer.selectMove, which first checks for a pending forced pass, then compares the bot's own pile ranks against its opponent's. Based on whether its attack can beat the opponent's defence, it dispatches to either attackingMode or defendingMode — swappable SmartBotMode strategies that each search legal plays for the best-scoring move." },
        ]
      },
      {
        title: "Consideration Factory Pattern",
        content: [
          { type: "image", src: "/assets/project/GoTCardGame/got-card-game-3.png", width: "900px" },
          { type: "text", text: "Move legality and priority are decided by a chain of Consideration implementations — TeamAttackConsideration, OpponentDefenceConsideration, and similar — each returning PLAY, PASS, or NO_OPINION for a given card and pile. ConsiderationFactory builds the active chain from a config string, and LegalBotPlayer walks it in order, using the first non-NO_OPINION verdict to decide the move." },
        ]
      },
    ]
  },
  "OverGrown": {
    tokenizedName: "overgrown",
    category: "hackathons",
    description: `A town has been overrun by Cyborg Lumberjacks, and Mother Nature must restore it. Playing as a nature fairy, you uncover her story, confront environmental damage, and free a companion to help heal the land. This exploration-focused game emphasizes themes of healing, friendship, and the conflict between nature and machine.`,
    date: "CISSA x GMC Game Jam 2025",
    type: "Game Jam",
    teamSize: 4,
    role: "Programmer (Unity)",
    thumbnail: "/assets/project/OverGrown/OverGrown-image.png",
    images: [

    ],
    technologies: ["Unity (C#)"],
    liveLink: "https://www.youtube.com/watch?v=KPQG4P6r2QU",
    githubLink: "https://github.com/iden0605/OverGrown",
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
    ],
    details: [
      {
        title: "Responsive Ranged Combat System",
        content: [
          { type: "image", src: "/assets/project/OverGrown/OverGrown-desc-1.png", width: "600px" },
          { type: "text", text: "A dynamic projectile system was implemented to enable ranged attacks for the player character. This included handling firing input, managing the firing rate with a delay, and calculating projectile direction based on the mouse cursor's world position. The system spawns bullet prefabs with the necessary velocity to move toward the target." },
        ]
      },
      {
        title: "Tree-Linked Health System",
        content: [
          { type: "image", src: "/assets/project/OverGrown/OverGrown-desc-2.png", width: "800px" },
          { type: "text", text: "A unique environmental health system was developed, linking Mother Nature's health directly to the state of the trees. Each tree's destruction reduces Mother Nature's overall health, with the damage scaled dynamically based on the initial number of trees. This design encourages players to protect the environment itself, not just their character." },
        ]
      },
      {
        title: "Bear Orbiting Movement",
        content: [
          { type: "image", src: "/assets/project/OverGrown/OverGrown-desc-3.png", width: "800px" },
          { type: "text", text: "The bear's movement is context-dependent, reacting dynamically to Mother Nature and nearby enemies. This adaptive behavior creates a more natural and engaging gameplay experience." },
          { type: "text", text: "When no Lumberjacks are detected, this function makes the bear orbit the player at a set radius and speed. The orbiting motion is achieved by calculating a target position on a circle around the player and smoothly moving the bear toward it." },
        ]
      },
      {
        title: "Bear Follow Movement",
        content: [
          { type: "image", src: "/assets/project/OverGrown/OverGrown-desc-4.png", width: "800px" },
          { type: "text", text: "The bear's movement is context-dependent, reacting dynamically to Mother Nature and nearby enemies. This adaptive behavior creates a more natural and engaging gameplay experience." },
          { type: "text", text: "After being freed, this function governs the bear's follow behavior. It calculates a target position based on the player's current location and last movement direction, ensuring the bear trails at a specified distance. The bear halts when it reaches a minimum threshold distance from the player." },
        ]
      },
    ]
  },
  "PebbleTask": {
    tokenizedName: "pebbletask",
    category: "hackathons",
    description: `Pebble Task is a minimalist and flexible task manager designed for streamlined organization. The widget is movable and resizable, with intuitive controls for adding, editing, and reordering tasks. It features automatic progress saving, customizable themes (Light, Dark, and Matcha), and task highlighting for better focus.`,
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
      "Managed state and styling using modern tools."],
    details: [
      {
        title: "Managing Component State with useState",
        content: [
          { type: "image", src: "/assets/project/PebbleTask/PebbleTask-desc-1.png", width: "600px" },
          { type: "text", text: "I'm using React's useState hook to manage all the key parts of the Task Manager's state—like the task list, input values, whether a task is being edited, and the widget's position, size, and interaction status. This helps keep everything reactive and in sync as users interact with the app." },
        ]
      },
      {
        title: "Handling Widget Interaction",
        content: [
          { type: "image", src: "/assets/project/PebbleTask/PebbleTask-desc-2.png", width: "800px" },
          { type: "text", text: "To handle dragging and resizing the widget, I use a few key functions. handleMouseDown starts the dragging process by setting dragging to true and recording the offset between the mouse and the widget's corner—this helps keep the drag smooth and accurate. If the user clicks the resize handle instead, handleResizeStart sets resizing to true and saves the mouse's starting position for width calculations. While the mouse moves, handleMouseMove checks if we're dragging or resizing and updates the widget's position or width accordingly. Once the mouse is released, handleMouseUp resets both states to stop the interaction." },
        ]
      },
    ]
  },
  "Academic Predictive Models": {
    tokenizedName: "academic-predictive-models",
    category: "university",
    description: `This university project investigates how well predictive models can estimate student academic performance based on family-related factors. The study involved a correlation analysis using Normalized Mutual Information (NMI) to identify relevant features, followed by the training of two predictive models: a Decision Tree classifier and a K-Nearest Neighbours (KNN) classifier. Their performance was evaluated and compared using metrics and visualizations from scikit-learn, Matplotlib, and Seaborn, combining statistical analysis with machine learning to explore the influence of family background on academic outcomes.`,
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
    ],
    details: [
      {
        title: "Data Preprocessing",
        content: [
          { type: "image", src: "/assets/project/PredictiveModels/PredictiveModels-desc-1.png", width: "600px" },
          { type: "image", src: "/assets/project/PredictiveModels/PredictiveModels-desc-2.png", width: "600px" },
          { type: "text", text: "Two student datasets were merged, retaining key family-related features. Final grades were then normalized and categorized into \"Low,\" \"Medium\" and \"High\" as a new variable, grades_grouped." },
          { type: "text", text: "Categorical and ordinal features were converted to a numerical format using one-hot encoding, enabling models to process non-numeric data without implying an order." },
          { type: "text", text: "The data was split into training and testing sets (70:30) using a fixed random state to ensure reproducibility and diverse model evaluation." },
        ]
      },
      {
        title: "Correlation Analysis",
        content: [
          { type: "image", src: "/assets/project/PredictiveModels/PredictiveModels-desc-3.png", width: "600px" },
          { type: "image", src: "/assets/project/PredictiveModels/PredictiveModels-desc-4.png", width: "600px" },
          { type: "text", text: "To identify key predictors of student performance, Normalised Mutual Information (NMI) was used to measure relationships between family-related categorical variables and academic outcomes. Unlike Pearson's correlation, NMI captures non-linear associations without assuming specific data distributions, making it ideal for this type of data." },
        ]
      },
      {
        title: "Predictive Model Training and Testing",
        content: [
          { type: "image", src: "/assets/project/PredictiveModels/PredictiveModels-desc-5.png", width: "800px" },
          { type: "image", src: "/assets/project/PredictiveModels/PredictiveModels-desc-6.png", width: "800px" },
          { type: "text", text: "A K-Nearest Neighbors (k=3) and a Decision Tree (entropy criterion) model were implemented to classify students into performance groups. These models were trained on the preprocessed data and evaluated on a testing set, with accuracy results stored in a DataFrame for comparison." },
          { type: "text", text: "KNN (45.5%) and Decision Tree (43.0%) outperformed random guessing, but accuracy was limited, reflecting weak feature correlations and suggesting other factors like motivation or mental health may play a larger role." },
        ]
      },
    ]
  },
};

export default projectData;

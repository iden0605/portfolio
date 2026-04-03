// data for project section
const projectData = {
  "Everchanging Grimoire": {
    tokenizedName: "everchanging-grimoire",
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

// mainStories.js
const mainStories = [
    {
      id: "chapter-0",
      name: "Prologue: Evil Time Part 1",
      category: "main-story",
      url: "story-prologue.html",
      stages: [
        {
          code: "Prologue",
          title: "",
          operators: ["amiya", "dobermann"]
        },
        {
          code: "0-1",
          title: "Collapse",
          operators: ["amiya", "dobermann", "crownslayer"]
        },
        {
          code: "0-2",
          title: "Protection",
          operators: ["amiya", "dobermann", "crownslayer"]
        },
        {
          code: "0-4",
          title: "Brawl",
          operators: ["ace", "amiya", "dobermann"]
        },
        {
          code: "0-6",
          title: "Strike",
          operators: ["ace", "amiya", "dobermann"]
        },
        {
          code: "0-7",
          title: "Infection",
          operators: ["ace", "amiya", "dobermann", "crownslayer", "mephisto"]
        },
        {
          code: "0-8",
          title: "Hunting",
          operators: ["amiya", "dobermann", "crownslayer", "mephisto"]
        },
        {
          code: "0-9",
          title: "Nearl",
          operators: ["ace", "amiya", "dobermann", "mephisto", "nearl"]
        },
        {
          code: "0-10",
          title: "Dilemma",
          operators: ["ace", "amiya", "dobermann", "mephisto", "nearl", "faust"]
        },
        {
          code: "0-11",
          title: "Blockade Running",
          operators: ["ace", "amiya", "dobermann", "mephisto", "nearl", "faust"]
        }
      ]
    },
    {
      id: "episode-1",
      name: "Episode 01: Evil Time Part 2",
      category: "main-story",
      url: "story-episode1.html",
      stages: [
        {
            "code": "1-1",
            "title": "Isolated Island",
            "operators": ["ace", "amiya", "dobermann", "nearl"]
          },
          {
            "code": "1-3",
            "title": "Running Wild",
            "operators": ["amiya", "dobermann", "nearl"]
          },
          {
            "code": "1-4",
            "title": "Omen",
            "operators": ["ace", "amiya", "dobermann", "nearl"]
          },
          {
            "code": "1-6",
            "title": "Catastrophe",
            "operators": ["ace", "amiya", "dobermann", "nearl", "crownslayer", "mephisto", "talulah", "frostnova", "skullshatterer", "patriot"]
          },
          {
            "code": "1-7",
            "title": "The Tyrant",
            "operators": ["ace", "amiya", "dobermann", "nearl", "talulah"]
          },
          {
            "code": "1-8",
            "title": "Resolve",
            "operators": ["ace", "amiya", "dobermann", "nearl", "talulah"]
          },
          {
            "code": "1-10",
            "title": "Remnants",
            "operators": ["amiya", "dobermann", "nearl", "mephisto", "frostnova", "talulah"]
          },
          {
            "code": "1-12",
            "title": "Pyrrhic Victory",
            "operators": ["ace", "amiya", "dobermann", "nearl", "wuh"]
          }
      ] 
    },
    {
      id: "episode-2",
      name: "Episode 02: Separated Hearts",
      category: "main-story",
      url: "story-episode2.html",
      stages: [
        {
          code: "2-1",
          title: "To Lungmen",
          operators: ["amiya", "dobermann", "chen"]
        },
        {
          code: "2-2",
          title: "War of Words",
          operators: ["amiya", "chen", "wei yenwu","kaltsit"]
        },
        {
          code: "2-3",
          title: "Presumption of Innocence",
          operators: ["amiya", "chen", "wei yenwu", "misha","franka","liskarm"]
        },
        {
          code: "2-4",
          title: "Penguin Logistics",
          operators: ["amiya", "chen", "franka","liskarm","exusiai","misha"]
        },
        {
            code: "2-5",
            title: "Falling Objects",
            operators: ["amiya", "texas", "franka","liskarm","skullshatterer"]
        },
        {
            code: "2-6",
            title: "Hold on Tight",
            operators: ["amiya", "texas", "liskarm","franka","exusiai","misha"]
        },
        {
            code: "2-7",
            title: "A Matter of Public Health",
            operators: ["amiya", "texas", "liskarm","exusiai","misha"]
        },
        {
            code: "2-8",
            title: "No Promises",
            operators: ["amiya", "chen","misha","franka","liskarm","texas","exusiai","crownslayer"]
        },
        {
            code: "2-9",
            title: "Cubiculum Obscurum",
            operators: ["amiya", "liskarm","franka","skullshatterer","misha","chen","wuh"]
        },
        {
            code: "2-10",
            title: "Beyond Cure",
            operators: ["amiya", "franka", "liskarm","chen","skullshatterer"]
        }
      ]  
    },
    {
      id: "episode-3",
      name: "Episode 03: Stinging Shock",
      category: "main-story",
      url: "story-episode3.html",
      stages: [
        {
          code: "3-1",
          title: "Meeting",
          operators: ["amiya", "chen","faust","franka"]
        },
        {
          code: "3-2",
          title: "Memory",
          operators: ["amiya", "chen","hoshiguma","misha","skullshatterer","exusiai","texas"]
        },
        {
          code: "3-3",
          title: "Convolution",
          operators: ["amiya","misha","skullshatterer","exusiai","texas","wuh"]
        },
        {
          code: "3-4",
          title: "Cracked",
          operators: ["amiya", "chen","hoshiguma","franka","liskarm","exusiai","texas","skullshatterer","misha"]
        },
        {
          code: "3-5",
          title: "Call",
          operators: ["amiya","hoshiguma","wuh","chen","misha"]
        },
        {
          code: "3-6",
          title: "Decision",
          operators: ["amiya","chen","hoshiguma","franka","liskarm","wuh","misha"]
        },
        {
          code: "3-7",
          title: "Roar",
          operators: ["franka","liskarm","hoshiguma","amiya","texas","exusiai","misha"] 
          // not sure: misha = skullshatter
        },
        {
          code: "3-8",
          title: "Dusk",
          operators: ["misha","hoshiguma","franka","chen","amiya","wuh"]
        },
      ]
    }
  ];
  
  if (typeof module !== 'undefined') {
    module.exports = mainStories;
  } else {
    window.mainStories = mainStories;
  }
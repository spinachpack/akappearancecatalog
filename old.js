const arknightsData = {
    // Operator data
    operators: [
        {
          id: "amiya",
          name: "Amiya",
          image: "images/Amiya_icon.webp",
          playable: true
        },
        {
          id: "dobermann",
          name: "Dobermann",
          image: "images/Dobermann_icon.webp",
          playable: true
        },
        {
          id: "phantom",
          name: "Phantom",
          image: "images/phantom.png",
          playable: true
        },
        {
          id: "ace",
          name: "Ace",
          image: "images/Ace_icon.webp",
          playable: false
        },
        {
          id: "crownslayer",
          name: "Crownslayer",
          image: "images/Crownslayer_icon.webp",
          playable: true 
        },
        {
          id: "mephisto",
          name: "Mephisto", 
          image: "images/Mephisto_icon.webp",
          playable: false
        },
        {
          id: "nearl",
          name: "Nearl",
          image: "images/Nearl_icon.webp",
          playable: true
        },
        {
          id: "faust",
          name: "Faust",
          image: "images/Faust_icon.webp",
          playable: false 
        },
        {
          id: "chen",
          name: "Ch'en",
          image: "images/Ch'en_icon.webp",
          playable: true
        },
        {
          id: "wei yenwu",
          name: "Wei Yenwu",
          image: "images/Wei_Yenwu_icon.webp",
          playable: false 
        },
        {
          id: "misha",
          name: "Misha",
          image: "images/Misha_icon.png",
          playable: false 
        },
        {
          id: "franka",
          name: "Franka",
          image: "images/Franka_icon.webp",
          playable: true
        },
        {
          id: "liskarm",
          name: "Liskarm",
          image: "images/Liskarm_icon.webp",
          playable: true
        },
        {
          id: "skullshatterer",
          name: "Skullshatter",
          image: "images/Skullshatterer_icon.webp",
          playable: false 
        },
        {
          id: "texas",
          name: "Texas",
          image: "images/Texas_icon.webp",
          playable: true 
        },
        {
          id: "exusiai",
          name: "Exusiai",
          image: "images/Exusiai_icon.webp",
          playable: true 
        },

      ],
    
    // Stories data
    stories: [
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
          },
      
        ]
      },
      {
        id: "episode-1",
        name: "Episode 01: Evil Time Part 2",
        category: "main-story",
        url: "story-episode1.html",
        stages: [
          {
            code: "1-2",
            title: "test",
            operators: ["ace", "amiya", "dobermann", "mephisto", "nearl", "faust"]
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
            operators: ["amiya", "chen", "wei yenwu"]
          },
          {
            code: "2-3",
            title: "Presumption of Innocence",
            operators: ["amiya", "chen", "wei yenwu", "misha","franka","liskarm"]
          },
          {
            code: "2-2",
            title: "War of Words",
            operators: ["amiya", "chen", "wei yenwu"]
          }
        ]  
      },



      // side stories
      {
        id: "darknights-memoir",
        name: "Darknights Memoir",
        category: "side-story",
        url: "story-darknights.html",
        stages: []
      },


      {
        id: "code-of-brawl",
        name: "Code of Brawl",
        category: "side-story",
        url: "story-codeofbrawl.html",
        stages: [
          {
            code: "CB-1",
            title: "test",
            operators: ["ace", "amiya", "dobermann"]
          }
        ]
      },
      {
        id: "operational-intelligence",
        name: "Operational Intelligence",
        category: "vignette",
        url: "story-intelligence.html",
        episodes: [  // For vignettes, use episodes instead of stages
          {
            title: "Episode 1",
            operators: ["amiya", "dobermann"]
          }
        ]
      },
      {
        id: "amiya-records",
        name: "Amiya's Records",
        category: "operator-record",
        url: "record-amiya.html",
        episodes: [
          {
            title: "Record 1",
            operators: ["amiya"]
          }
        ]
      }
    ]
  };
  
  // Make data available globally
  if (typeof module !== 'undefined') {
    module.exports = arknightsData;
  } else {
    window.arknightsData = arknightsData;
  }
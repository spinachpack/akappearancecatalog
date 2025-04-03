// sideStories.js
const sideStories = [
    {
      id: "knights-treasure",
      name: "Grani and the Knights' Treasure",
      category: "side-story",
      url: "story-knightstreasure.html",
      stages: [
      {
        code: "GT-1",
        title: "High Noon",
        operators: ["grani","carol"]
      },
      {
        code: "GT-2",
        title: "Sophistication",
        operators: ["skadi","grani","carol","bigbob"]
      },
      {
        code: "GT-3",
        title: "An Unexpected Journey",
        operators: ["skadi","grani","carol","bigbob"]
      },
      {
        code: "GT-4",
        title: "Turn State's Evidence",
        operators: ["grani","carol","bigbob"]
      },
      {
        code: "GT-5",
        title: "Different Opinions",
        operators: ["skadi","grani","carol","bigbob"]
      },
      {
        code: "GT-6",
        title: "Golden Triangle",
        operators: ["skadi","grani","carol","bigbob","mudrock"]
      },
      {
        code: "GT-EX-1",
        title: "True Grit",
        operators: ["skadi","specter"]
      },
      {
        code: "GT-EX-2",
        title: "Dances with Wolves",
        operators: ["nearl"]
      },
      {
        code: "GT-HX-1",
        title: "The Treasure of the Kazimierz Mortica",
        operators: ["carol","grani"]
      },
      {
        code: "GT-HX-3",
        title: "Once Upon a Time in the West",
        operators: ["skadi","kaltsit"]
      }
      
      
    ]
  },
  {
    id: "heart-flame",
      name: "Heart of Surging Flame",
      category: "side-story",
      url: "story-heartflame.html",
      stages: [
      {
        code: " ",
        title: "It's Showtime",
        operators: ["ddd"]
      },
      {
        code: "OF-ST-1",
        title: "Rock On",
        operators: ["amiya","ceylon","kaltsit","sora","provence","skyfire","gummy","bigbob","chen","schwarz","cronin"]
      },
      {
        code: "OF-1",
        title: "Made of Lava",
        operators: ["provence","skyfire","ceylon"]
      },
      {
        code: "OF-ST-2",
        title: "Break Free",
        operators: ["eyja","provence","skyfire","ceylon"]
      },
      {
        code: "OF-2",
        title: "To be Continued",
        operators: ["ddd","ceylon","cronin","schwarz"]
      },
      {
        code: "OF-3",
        title: "Race Walking",
        operators: ["schwarz","ceylon","hellagur","ifrit"]
      },
      {
        code: "OF-4",
        title: "The General",
        operators: ["ceylon","hellagur","ceylon"]
      },
      {
        code: "OF-ST-3",
        title: "Under the Gun",
        operators: ["ceylon","schwarz","hellagur"]
      },
      {
        code: "OF-5",
        title: "Don't Stop Me Now",
        operators: ["ceylon","schwarz","vigna"]
      },
      {
        code: "OF-6",
        title: "Killer Queen",
        operators: ["ddd","cronin","hellagur","vigna"]
      },
      {
        code: "OF-ST-4",
        title: "In the Name of Love",
        operators: ["schwarz","cronin","vigna","ddd","herman","ceylon","hellagur","ifrit","gummy","provence","skyfire"]
      },
      {
        code: "OF-7",
        title: "Final Stroke",
        operators: ["ceylon","schwarz","alty","cronin","herman","hellagur","eyja","provence"]
      },
      {
        code: "OF-8",
        title: "Siesta Rhapsody",
        operators: ["ceylon","provence","skyfire"]
      },
      {
        code: "OF-ST-5",
        title: "Love of this Life",
        operators: ["amiya","herman","schwarz","ceylon"]
      },
      {
        code: "OF-ST-6",
        title: "Seaside Serendipity",
        operators: ["elysium","thorns","provence","skyfire","alty","aya","frostaus","dan","vigna","cutter","ifrit","beeswax"]
      },
      {
        code: "OF-EX-1",
        title: "Warming-up",
        operators: ["ddd"]
      },
      {
        code: "OF-EX-3",
        title: "Interview Time",
        operators: ["emperor","sora","texas","exusiai","croissant"]
      },
      {
        code: "OF-EX-1",
        title: "Warming-up",
        operators: ["alty","kaltsit","m3"]
      },
      
      

    ]
  }
]
 

  
  // Export for both browser and Node.js environments
  if (typeof module !== 'undefined') {
    module.exports = sideStories;
  } else {
    window.sideStories = sideStories;
  }
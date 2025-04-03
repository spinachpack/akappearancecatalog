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
  }
]
 

  
  // Export for both browser and Node.js environments
  if (typeof module !== 'undefined') {
    module.exports = sideStories;
  } else {
    window.sideStories = sideStories;
  }
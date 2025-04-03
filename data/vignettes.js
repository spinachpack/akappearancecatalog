// vignettes.js
const vignettes = [
    {
      id: "operational-intelligence",
      name: "Operational Intelligence",
      category: "vignette",
      url: "story-intelligence.html",
      episodes: [
        {
          title: "The Anonymous Ones' War",
          operators: ["scout","patriot","hellagur"]
        },
        {
            title: "Destroyer",
            operators: ["wuh","flamebringer","dobermann"]
        },
        {
            title: "Sniper Training",
            operators: ["liskarm","franka","jessica"]
        },
        {
            title: "Survival Notorization",
            operators: ["vermeil","executor"]
        },
      ]
    },
  ];
  
  // Export for both browser and Node.js environments
  if (typeof module !== 'undefined') {
    module.exports = vignettes;
  } else {
    window.vignettes = vignettes;
  }
// vignettes.js
const operatorRecords = [
    {
      id: "enforcer-records",
      name: "Enforcer's Operator Record",
      category: "operator-record",
      url: "record-enforcer.html",
      episodes: [
        {
          title: "Departure Plans",
          operators: ["enforcer","vigna","flamebringer","hibiscus","lava","mudrock"]
        },
        
      ]
    },
    {
      id: "blaze-records",
      name: "Blaze's Operator Record",
      category: "operator-record",
      url: "record-blaze.html",
      episodes: [
        {
          title: "Will You?",
          operators: ["blaze","ace","kaltsit","amiya","weedy"]
        },
      ]
    },
    {
      id: "croissant-records",
      name: "Croissant's Operator Record",
      category: "operator-record",
      url: "record-croissant.html",
      episodes: [
        {
          title: "The Business",
          operators: ["sora","croissant","exusiai"]
        },
      ]
    },
    {
      id: "elysium-records",
      name: "Elysiums's Operator Record",
      category: "operator-record",
      url: "record-elysium.html",
      episodes: [
        {
          title: "Long Journey",
          operators: ["elysium"]
        },
      ]
    },
    {
      id: "exu-records",
      name: "Exusiai's Operator Record 1",
      category: "operator-record",
      url: "record-exu.html",
      episodes: [
        {
          title: "Incoming Mail",
          operators: ["exusiai","texas","croissant","emperor","sora"]
        },
      ]
    },
    {
      id: "exu-records2",
      name: "Exusiai's Operator Record 2",
      category: "operator-record",
      url: "record-exu2.html",
      episodes: [
        {
          title: "Constants Within Changes",
          operators: ["exusiai","texas","mostima","croissant","sora","emperor"]
        },
      ]
    },
    {
      id: "eyja-records",
      name: "Eyjafjalla's Operator Record 1",
      category: "operator-record",
      url: "record-eyja.html",
      episodes: [
        {
          title: "Heart of a Scholar",
          operators: ["eyja","ceylon"]
        },
      ]
    },
    {
      id: "eyja-records2",
      name: "Eyjafjalla's Operator Record 2",
      category: "operator-record",
      url: "record-eyja2.html",
      episodes: [
        {
          title: "Volcano",
          operators: ["eyja"]
        },
      ]
    },
    {
      id: "eyjaalter-records",
      name: "Eyjafjalla the Hvít Aska's Operator Record ",
      category: "operator-record",
      url: "record-eyja2.html",
      episodes: [
        {
          title: "The First Step Into Night",
          operators: ["eyja"]
        },
      ]
    }
  ];
  
  if (typeof module !== 'undefined') {
    module.exports = operatorRecords;
  } else {
    window.operatorRecords = operatorRecords;}
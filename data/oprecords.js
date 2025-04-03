// vignettes.js
const operatorRecords = [
    {
      id: "amiyiiii-records",
      name: "Enforcer's Operator Record",
      category: "operator-record",
      url: "record-amiya.html",
      episodes: [
        {
          title: "Departure Plans",
          operators: ["enforcer","vigna","flamebringer","hibiscus","lava","mudrock"]
        },
        
      ]
    }
  ];
  
  if (typeof module !== 'undefined') {
    module.exports = operatorRecords;
  } else {
    window.operatorRecords = operatorRecords;}
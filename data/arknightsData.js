
if (typeof window !== 'undefined') {
    const operators = window.operators || [];
    const mainStories = window.mainStories || [];
    const sideStories = window.sideStories || [];
    const vignettes = window.vignettes || [];
    const operatorRecords = window.operatorRecords || [];
    
    const stories = [...mainStories, ...sideStories, ...vignettes, ...operatorRecords];
    
    window.arknightsData = {
      operators: operators,
      stories: stories
    };
  } 
  else if (typeof module !== 'undefined') {
    const operators = require('./operators.js');
    const mainStories = require('./mainStories.js');
    const sideStories = require('./sideStories.js');
    const vignettes = require('./vignettes.js');
    const operatorRecords = require('./oprecords.js');
    
    const stories = [...mainStories, ...sideStories, ...vignettes, ...operatorRecords];
    
    module.exports = {
      operators,
      stories
    };
  }
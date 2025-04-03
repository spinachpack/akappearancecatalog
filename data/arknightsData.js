// arknightsData.js - Main file that combines all data

// For browser environment
if (typeof window !== 'undefined') {
    // Make sure the arknightsData object is created even if some data objects are missing
    const operators = window.operators || [];
    const mainStories = window.mainStories || [];
    const sideStories = window.sideStories || [];
    const vignettes = window.vignettes || [];
    const operatorRecords = window.operatorRecords || [];
    
    // Combine all story types
    const stories = [...mainStories, ...sideStories, ...vignettes, ...operatorRecords];
    
    // Create the main data object and assign to window
    window.arknightsData = {
      operators: operators,
      stories: stories
    };
  } 
  // For Node.js environment
  else if (typeof module !== 'undefined') {
    const operators = require('./operators.js');
    const mainStories = require('./mainStories.js');
    const sideStories = require('./sideStories.js');
    const vignettes = require('./vignettes.js');
    const operatorRecords = require('./oprecords.js');
    
    // Combine all story types
    const stories = [...mainStories, ...sideStories, ...vignettes, ...operatorRecords];
    
    // Export the combined data
    module.exports = {
      operators,
      stories
    };
  }
const { defineConfig } = require("cypress");



module.exports = defineConfig({

  baseURL: "https://localhost:5500",
  reporter: 'junit',
    reporterOptions: {
      mochaFile: 'results/TEST-[hash].xml'
    },

  e2e: {
    setupNodeEvents(on, config) { 
      // implement node event listeners here
  
    },
  },
});


require('@applitools/eyes-cypress')(module);

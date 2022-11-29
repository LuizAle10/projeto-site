const { defineConfig } = require("cypress");



module.exports = defineConfig({

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

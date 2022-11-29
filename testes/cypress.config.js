const { defineConfig } = require("cypress");



module.exports = defineConfig({

  report: 'junit',
    reporterOptions: {
      mochaFile: 'results/TESTe-[hash].xml'
    },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
  
    },
  },
});


require('@applitools/eyes-cypress')(module);

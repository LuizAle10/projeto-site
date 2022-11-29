const { defineConfig } = require("cypress");



module.exports = defineConfig({

  reporter: 'junit',
    reporterOptions: {
      mochaFile: 'results/TEST-[hash].xml'
    }
  })


require('@applitools/eyes-cypress')(module);

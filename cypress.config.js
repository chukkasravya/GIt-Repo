const { defineConfig } = require("cypress");
const mochawesome = require("cypress-mochawesome-reporter/plugin");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://practice.expandtesting.com/',
    setupNodeEvents(on, config) {
      mochawesome(on); // Add this to register the plugin
      return config;
    },
    specPattern: "cypress/e2e/**/*.cy.js",
    supportFile: "cypress/support/e2e.js", // or wherever your support file is
  },
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "reports",
    overwrite: false,
    html: true,
    json: true
  }
});

const { defineConfig } = require("cypress");
const mochawesome = require("cypress-mochawesome-reporter/plugin");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://practice.expandtesting.com/',
    setupNodeEvents(on, config) {
      mochawesome(on);  // register the plugin
      return config;
    },
    specPattern: "cypress/e2e/**/*.cy.js",
    supportFile: "cypress/support/e2e.js",
  },
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "reports",
    charts: true,
    reportPageTitle: "My Test Report",
    embeddedScreenshots: true,
    inlineAssets: true,
  },
});

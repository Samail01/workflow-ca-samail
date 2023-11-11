import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      config.env.email = process.env.USER_EMAIL;
      return config;
      // implement node event listeners here
    },
  },
});

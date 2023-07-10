import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    video: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents() {
      // implement node event listeners here
    },
  },
});

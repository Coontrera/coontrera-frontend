import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://coontrera.vercel.app/",
    supportFile: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
    },
});
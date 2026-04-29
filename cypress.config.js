import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://coontrera.vercel.app/",
    //baseUrl: "http://localhost:5173/",
    supportFile: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  },
});
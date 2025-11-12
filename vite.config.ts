import { defineConfig } from 'vite'
import path from "path"
import tailwindcss from "@tailwindcss/vite"
import { reactRouter } from "@react-router/dev/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import netlifyReactRouter from "@netlify/vite-plugin-react-router";
import netlify from "@netlify/vite-plugin";
// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths(), netlifyReactRouter(),  netlify()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./app"),
    },
  },
  ssr: {
    // Keep this SDK out of the Node build
    noExternal: ["@mappedin/react-sdk"],
  }
})

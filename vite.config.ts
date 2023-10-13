import {fileURLToPath, URL} from "node:url";
import {defineConfig} from 'vite'
import solid from 'vite-plugin-solid'

export default defineConfig({
  base: '/web-kripik-tempe/',
  plugins: [solid()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    },
  },
  build: {
    target: 'esnext',
  },
})

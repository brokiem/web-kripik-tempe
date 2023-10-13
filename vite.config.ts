import {defineConfig} from 'vite'
import solid from 'vite-plugin-solid'

export default defineConfig({
  base: '/web-kripik-tempe',
  plugins: [solid()],
  build: {
    target: 'esnext',
  },
})

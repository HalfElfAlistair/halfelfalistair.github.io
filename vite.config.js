import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: 'https://HalfElfAlistair.github.io/halfelfalistair.github.io'
  // base: 'https://github.com/HalfElfAlistair/halfelfalistair.github.io'
  base: 'halfelfalistair.github.io'
  // base: '/halfelfalistair.github.io/'
})
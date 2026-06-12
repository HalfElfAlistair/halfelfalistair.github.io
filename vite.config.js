// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import { TanStackRouterVite } from '@tanstack/router-plugin/vite';

// export default defineConfig({
//   plugins: [
//     react(),
//     TanStackRouterVite(),
//   ],
// })

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   // base: 'https://HalfElfAlistair.github.io/halfelfalistair.github.io'
//   // base: 'https://github.com/HalfElfAlistair/halfelfalistair.github.io'
//   base: 'halfelfalistair.github.io'
//   // base: '/halfelfalistair.github.io/'
// })


// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

// export default defineConfig({
//   plugins: [
//     react(),
//     TanStackRouterVite(),
//   ],
// })



import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

export default defineConfig({
  plugins: [
    react(),
    TanStackRouterVite({
      routesDirectory: './src/routes',
      // 👇 THIS is the important part
      extensions: ['.js', '.jsx'],
    }),
  ],
})

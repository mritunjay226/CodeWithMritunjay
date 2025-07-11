<<<<<<< HEAD
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
=======
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer';
>>>>>>> 9c178e0 (hello)

export default defineConfig({
<<<<<<< HEAD
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['@emailjs/browser']
    }
  }
});
=======
  plugins: [react() , visualizer()],
})
>>>>>>> 9c178e0 (hello)

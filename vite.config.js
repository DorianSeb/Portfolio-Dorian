import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Portfolio-Dorian/', // 👈 exact nom du dépôt
  plugins: [react()],
})
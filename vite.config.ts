import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/tt/' : '/',  // '/' in dev, '/tt/' in prod
  plugins: [react()],
  resolve: { alias: { '@': path.resolve(__dirname, './src') } }
}))

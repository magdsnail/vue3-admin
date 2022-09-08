import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // alias: [{
    //   find: '@',
    //   replacement: resolve(__dirname, 'src')
    // }],
    alias: {
      '@': resolve(__dirname, 'src')
    },
    extensions: ['.ts', '.js', '.jsx', '.tsx', '.json', '.vue']
  },
  server: {
    open: true,
    proxy: {
      '/api': {
        target: '',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
})


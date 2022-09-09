import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    createSvgIconsPlugin({
      iconDirs: [resolvePath('src/svgs')],
      symbolId: 'svg-[dir]-[name]',
    }),
    Components({
      resolvers: [
        ElementPlusResolver()
      ]
    })
  ],
  resolve: {
    // alias: [{
    //   find: '@',
    //   replacement: resolve(__dirname, 'src')
    // }],
    alias: {
      '@': resolve(__dirname, 'src')
    },
    extensions: ['.ts', '.d.ts', '.js', '.jsx', '.tsx', '.json', '.vue']
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


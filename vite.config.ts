import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import autoprefixer from 'autoprefixer'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { defineConfig } from 'vite'
import flexbugsFixes from 'postcss-flexbugs-fixes'
import postcssNesting from 'postcss-nesting'
import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
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
  css: {
    postcss: {
      plugins: [
        postcssNesting,
        autoprefixer({
          overrideBrowserslist: [
            'Android 4.1',
            'iOS 7.1',
            'Chrome > 31',
            'ff > 31',
            'ie >= 8',
            '> 1%',
          ],
          grid: true,
        }),
        flexbugsFixes
      ]
    }
  },
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

function resolvePath(src: string) {
  return resolve(__dirname, src)
}


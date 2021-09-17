import * as path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pkg from './package.json'
import { viteMockServe } from 'vite-plugin-mock'
process.env.VITE_APP_BUILD_EPOCH = new Date().getTime()
process.env.VITE_APP_VERSION = pkg.version

export default defineConfig({
  plugins: [
    vue({
      script: {
        refSugar: true,
      },
    }),
    viteMockServe({ supportTs: true }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@cpn':path.resolve(__dirname,'./src/components')
    },
  },
  server: {
    open: true,
    /* 设置为0.0.0.0则所有的地址均能访问 */
    host: '0.0.0.0',
    port: 8088,
    https: false,
    proxy: {
      '/api': {
        target: 'http://dx8.rocksea.net.cn:9030',
        changeOrigin: true,
        configure: (proxy, options) => {
          // proxy 是 'http-proxy' 的实例
        },
      },
    },
  },
})

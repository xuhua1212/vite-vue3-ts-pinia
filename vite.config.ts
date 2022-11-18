import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

const resolve = (dir) => path.resolve(__dirname, dir);

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve("src"),
    },
  },
  plugins: [
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    vue()
  ],
  server: {
    port: 8080, //本地启动端口
    open: true,
    host: '0.0.0.0',
    // hmr: {
    //   host: "127.0.0.1",
    //   port: 8080,
    // },
    // // 设置 https 代理
    // proxy: {
    //   "/api": {
    //     target: "",
    //     changeOrigin: true,
    //     rewrite: (path: string) => path.replace(/^\/api/, ""),
    //   },
    // },
  },
});

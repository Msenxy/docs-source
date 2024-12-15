import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

import Markdown from 'unplugin-vue-markdown/vite'
import VueRouter from 'unplugin-vue-router/vite'

import { markdownHeadingPlugin } from './src/plugin/markdown-heading'

export default defineConfig({
    plugins: [
        VueRouter({
            extensions: ['.vue', '.md'],
            routesFolder: 'src/pages'
        }),

        vue({ include: [/\.vue$/, /\.md$/] }),

        Markdown({
            markdownItSetup(md) {
                md.use(markdownHeadingPlugin)
            }
        }),

        vueDevTools()
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})

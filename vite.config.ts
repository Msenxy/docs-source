import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

import Markdown from 'unplugin-vue-markdown/vite'
import VueRouter from 'unplugin-vue-router/vite'

import { heading } from './src/plugin/markdown-heading'
import { filename } from './src/plugin/markdown-filename'

export default defineConfig({
    plugins: [
        VueRouter({
            extensions: ['.vue', '.md'],
            routesFolder: 'src/pages'
        }),

        vue({ include: [/\.vue$/, /\.md$/] }),

        Markdown({
            markdownItSetup(md) {
                md.use(heading)
                md.use(filename)
            },
            transforms: {
                before(code) {
                    return code
                }
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

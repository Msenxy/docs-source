import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

import Markdown from 'unplugin-vue-markdown/vite'
import Shikiji from '@shikijs/markdown-it'
import { rendererRich, transformerTwoslash } from '@shikijs/twoslash'
import VueRouter from 'unplugin-vue-router/vite'

import { heading } from './src/plugin/markdown-heading'
import { filename } from './src/plugin/markdown-filename'
import { space } from './src/plugin/markdown-space'

export default defineConfig({
    plugins: [
        VueRouter({
            extensions: ['.vue', '.md'],
            routesFolder: 'src/pages'
        }),

        vue({ include: [/\.vue$/, /\.md$/] }),

        Markdown({
            async markdownItSetup(md) {
                md.use(
                    await Shikiji({
                        themes: {
                            light: 'vitesse-light',
                            dark: 'vitesse-dark'
                        },
                        transformers: [
                            transformerTwoslash({
                                explicitTrigger: true,
                                renderer: rendererRich()
                            })
                        ]
                    })
                )

                md.use(heading)
                md.use(filename)
                md.use(space)
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

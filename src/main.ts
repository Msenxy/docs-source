import { ViteSSG } from 'vite-ssg'
import App from '@/App.vue'
import routes from '@/router'

import '@/styles/main.scss'
import '@/styles/markdown.scss'
import '@shikijs/twoslash/style-rich.css'

export const createApp = ViteSSG(App, { routes }, ({ router }) => {
    router.beforeEach((to, _from, next) =>
        to.path !== decodeURIComponent(to.path) ?
            next({ path: decodeURIComponent(to.path), replace: true })
        :   next()
    )
})

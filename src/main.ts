import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'

import '@/styles/main.scss'
import '@/styles/markdown.scss'
import '@shikijs/twoslash/style-rich.css'

const app = createApp(App)

app.use(router)

app.mount('#app')

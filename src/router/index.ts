import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/home/index.vue'
import { routes } from 'vue-router/auto-routes'

export default createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        ...routes
    ]
})

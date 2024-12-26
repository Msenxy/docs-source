import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/home/index.vue'
import { routes } from 'vue-router/auto-routes'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/directory',
            name: 'directory',
            component: () => import('@/views/directory/index.vue')
        },
        ...routes
    ]
})

router.beforeEach((to, _from, next) =>
    to.path !== decodeURIComponent(to.path) ?
        next({ path: decodeURIComponent(to.path), replace: true })
    :   next()
)

export default router

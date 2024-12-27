import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/home/index.vue'
import { routes } from 'vue-router/auto-routes'

const directoryRoutes = routes.map(route => {
    return {
        path: route.path,
        name: route.path.slice(1),
        component: () => import('@/views/directory/index.vue')
    }
})

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/:pathMatch(.*)',
            name: 'Error',
            component: () => import('@/views/error/index.vue')
        },
        ...directoryRoutes,
        ...routes
    ]
})

router.beforeEach((to, _from, next) =>
    to.path !== decodeURIComponent(to.path) ?
        next({ path: decodeURIComponent(to.path), replace: true })
    :   next()
)

export default router

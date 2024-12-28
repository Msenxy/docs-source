import type { RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/home/index.vue'
import { routes } from 'vue-router/auto-routes'

const directoryRoutes = routes.map(route => {
    return {
        path: route.path,
        name: route.path.slice(1),
        component: () => import('@/views/directory/index.vue')
    }
})

const router: RouteRecordRaw[] = [
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

export default router

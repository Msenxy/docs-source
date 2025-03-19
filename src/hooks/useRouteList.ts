import { useRouter } from 'vue-router'

interface RouteItem {
    name: string
    path: string
    children?: RouteItem[]
}

export function useRouteList(): RouteItem[] {
    const pattern = /^\/[\w\u4e00-\u9fa5]+/

    const routes = useRouter()
        .getRoutes()
        .filter(item => pattern.test(item.path))
        .map(item => ({
            name: item.name as string,
            path: item.path
        }))

    const groupedRoutes = Object.groupBy(routes, item =>
        item.name.startsWith('/') ? 'children' : 'parent'
    )

    const order = routeOrder()
    const result = (groupedRoutes.parent ?? [])
        .map(item => {
            const children = (groupedRoutes.children ?? [])
                .filter(child => child.path.startsWith(item.path))
                .map(child => ({
                    name: child.name?.toString().split('/').at(-1) ?? '',
                    path: child.path
                }))

            return { ...item, children }
        })
        .sort((a, b) => order.indexOf(a.name) - order.indexOf(b.name))

    return result
}

const routeOrder = (): string[] => {
    const stored = localStorage.getItem('routeOrder')

    const order: string[] =
        stored ? JSON.parse(stored) : ['Vue', 'React', 'Unity']

    if (!stored) {
        localStorage.setItem('routeOrder', JSON.stringify(order))
    }

    return order
}

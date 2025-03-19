<template>
    <div class="docs">
        <div class="catalogue2">
            <div
                v-for="(item, index) in useRouteList()"
                :key="index"
                class="catalogue"
            >
                <RouterLink :to="item.path" class="catalogue">
                    {{ item.name }}<br />
                </RouterLink>

                <RouterLink
                    v-for="(i, index) in item.children"
                    :key="index"
                    :to="i.path"
                    class="catalogue"
                >
                    {{ i.name }}<br />
                </RouterLink>
            </div>
        </div>

        <article class="markdown">
            <slot />
        </article>

        <div></div>
    </div>
</template>

<script lang="ts" setup>
    import { useRoute } from 'vue-router'
    import { routes } from 'vue-router/auto-routes'
    import { useRouteList } from '@/hooks/useRouteList'

    const route = useRoute()
    const name = route.name as string

    // const { frontmatter } = defineProps({
    //     frontmatter: {
    //         type: Object,
    //         required: true
    //     }
    // })
    // console.log('frontmatter', frontmatter)
</script>

<style lang="scss" scoped>
    .docs {
        display: flex;
    }

    .catalogue2 {
        display: flex;
        flex-direction: column;
    }

    .markdown {
        display: grid;
        grid-template-columns: 1fr 40vw 1fr;
        justify-content: center;
    }
</style>

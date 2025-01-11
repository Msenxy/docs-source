<template>
    <div class="directory">
        <div class="directory-header">{{ path }}</div>

        <RouterLink
            class="directory-container"
            v-for="(item, index) in items"
            :key="index"
            :to="item.name"
        >
            {{ item.path }}
        </RouterLink>
    </div>
</template>

<script setup lang="ts">
    import { useRoute } from 'vue-router'
    import { routes } from 'vue-router/auto-routes'

    const route = useRoute()
    const path = route.name as string

    const items = routes
        .filter(item => item.path.slice(1) === path)
        .flatMap(item => item.children)
</script>

<style lang="scss" scoped>
    .directory {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: 'Chill Round', 'LXGW Bright';

        .directory-header {
            font-size: 3rem;
            margin-top: 3rem;
            margin-bottom: 3rem;
        }

        .directory-container {
            font-size: 1.25rem;
            line-height: 1.6;
        }
    }
</style>

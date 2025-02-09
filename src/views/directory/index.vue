<template>
    <div class="directory">
        <div class="directory-content">
            <div class="header">{{ name }}</div>

            <RouterLink
                v-for="(item, index) in items"
                :key="index"
                :to="item.name"
                class="container"
            >
                {{ item.path }}<br />
            </RouterLink>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { useRoute } from 'vue-router'
    import { routes } from 'vue-router/auto-routes'

    const route = useRoute()
    const name = route.name as string

    const items = routes
        .filter(item => item.path.slice(1) === name)
        .flatMap(item => item.children)
</script>

<style lang="scss" scoped>
    .directory {
        display: grid;
        grid-template-columns: 1fr 40vw 1fr;
        height: 100vh;
        font-family: 'Chill Round', 'LXGW Bright';
        background: linear-gradient(oklch(87% 0.01 258), oklch(98% 0.02 74));
    }

    .directory-content {
        grid-column: 2;
        padding: 0 2rem;
    }

    .header {
        font-size: 3rem;
        margin: 8rem 0 5rem;
        text-align: center;
    }

    .container {
        font-size: 1.25rem;
        line-height: 1.6;

        color: black;
        text-decoration: none;
    }
</style>

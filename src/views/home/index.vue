<template>
    <div class="home">
        <HomeLogo v-model="isLogoClicked" />
        <HomeGrid :isLogoClicked />
    </div>
</template>

<script lang="ts" setup>
    import { ref, watch, unref } from 'vue'

    import HomeLogo from '@/views/home/components/HomeLogo.vue'
    import HomeGrid from '@/views/home/components/HomeGrid.vue'
    import { useLocalStorage } from '@/hooks/useLocalStorage'

    const simpleLayout = useLocalStorage('simpleLayout', false)

    const isLogoClicked = ref(unref(simpleLayout))

    watch(simpleLayout, newVal => {
        isLogoClicked.value = newVal
    })
</script>

<style scoped>
    .home {
        height: 100vh;
        width: 100vw;
        background: linear-gradient(oklch(87% 0.01 258), oklch(98% 0.02 74));
        display: flex;
        gap: 40px;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
</style>

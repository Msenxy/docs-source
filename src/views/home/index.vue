<template>
    <HomeLogo v-model="isLogoClicked" />
    <HomeGrid :isLogoClicked />
</template>

<script lang="ts" setup>
    import { ref, watch } from 'vue'

    import HomeGrid from '@/views/home/components/HomeGrid.vue'
    import HomeLogo from '@/views/home/components/HomeLogo.vue'

    import { useLocalStorage } from '@/hooks/useLocalStorage'

    const simpleLayout = useLocalStorage('simpleLayout', false)

    const isLogoClicked = ref(false)

    watch(simpleLayout, newVal => {
        isLogoClicked.value = newVal
    })
</script>

<template>
    <CustomBar />
    <RouterView />
</template>

<script setup lang="ts">
    import { RouterView } from 'vue-router'
    import CustomBar from '@/components/CustomBar.vue'
</script>

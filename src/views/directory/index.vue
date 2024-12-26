<template>
    <div v-for="(item, index) in routes" :key="index">
        {{ item }}
    </div>
</template>

<script lang="ts" setup>
    import { routes } from 'vue-router/auto-routes'
</script>

<style lang="scss" scoped></style>

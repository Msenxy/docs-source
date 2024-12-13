<template>
    <RouterView />
</template>

<script setup lang="ts">
    import { RouterView } from 'vue-router'
</script>

<style lang="scss">
    @font-face {
        font-family: 'LXGW Bright';
        src: url('/fonts/LXGW_Bright/LXGW_Bright.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }

    body {
        margin: 0;
    }
</style>

<template>
    <div>
        <img
            src="/src/assets/images/logo.jpg"
            :class="['logo', { 'is-clicked': isLogoClicked }]"
            alt="MSENXY Logo"
            loading="lazy"
            @click="handleLogoClick"
        />
        <h1 :class="['title', { 'is-clicked': isLogoClicked }]">MSENXY</h1>
    </div>
</template>

<script setup lang="ts">
    const isLogoClicked = defineModel<boolean>()

    const handleLogoClick = () => {
        isLogoClicked.value = !isLogoClicked.value
    }
</script>

<style lang="scss" scoped>
    @font-face {
        font-family: 'Corn Demo';
        src: url('/fonts/Corn_Demo/Corn_Demo.woff') format('woff');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }

    .logo {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        box-shadow: 0 4px 10px oklch(0% 0 0 / 20%);
        transition:
            transform 0.5s cubic-bezier(0.4, 0, 0.2, 1),
            box-shadow 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        will-change: transform, box-shadow;

        &:is(.is-clicked, :not(.is-clicked)):hover {
            box-shadow: 6px 0 15px oklch(0% 0 0 / 30%);
            transform: scale(1.1) rotate(90deg);
        }

        &.is-clicked {
            transform: scale(1.1);
            box-shadow: 0 6px 15px oklch(0% 0 0 / 30%);
        }

        &:is(.is-clicked, :not(.is-clicked):hover) + .title {
            font-size: 36px;
            transform: translateY(30px);
        }
    }

    .title {
        font-family: 'Corn Demo', sans-serif;
        font-weight: 700;
        font-size: 0px;
        color: oklch(32.11% 0 0);
        transition:
            font-size 0.5s cubic-bezier(0.4, 0, 0.2, 1),
            transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        will-change: font-size, transform;

        -webkit-text-stroke: 0.6px oklch(32.11% 0 0);
        text-shadow:
            0 0 1px oklch(32.11% 0 0 / 30%),
            0 0 1px oklch(32.11% 0 0);
    }
</style>

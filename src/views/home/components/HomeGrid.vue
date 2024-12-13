<template>
    <div class="icon-container" :class="{ 'is-visible': isLogoClicked }">
        <Icon
            v-for="(item, index) in gridList"
            :key="index"
            :icon="item.icon"
            class="social-icon"
            @click="item.click"
        />
    </div>
</template>

<script setup lang="ts">
    import router from '@/router'
    import { Icon } from '@iconify/vue'

    defineProps<{ isLogoClicked: boolean }>()

    const gridList = [
        { icon: 'mdi:more-horiz', click: () => router.push('/docs') }
    ]
</script>

<style lang="scss" scoped>
    .icon-container {
        display: flex;
        gap: 2rem;
        position: absolute;
        bottom: 15%;
        opacity: 0;
        transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);

        &.is-visible {
            opacity: 1;
        }
    }

    .social-icon {
        font-size: 2rem;
        color: oklch(32.11% 0 0);
        cursor: pointer;
        transition:
            transform 0.3s ease,
            color 0.3s ease;

        &:hover {
            transform: scale(1.2);
            color: oklch(51.03% 0 0);
        }
    }
</style>

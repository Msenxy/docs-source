<template>
    <div class="card-container">
        <Icon
            v-for="(item, index) in icon"
            :key="index"
            :icon="item.iconName"
            @click="item.clickEvent"
            class="card-icon"
        />
    </div>
</template>

<script lang="ts" setup>
    import { Icon } from '@iconify/vue'

    interface IconItem {
        iconName: string
        clickEvent: () => void
    }

    defineProps<{ icon: IconItem[] }>()
</script>

<style lang="scss" scoped>
    .card-container {
        height: 40px;
        border-radius: 20px;
        box-shadow: 0 4px 15px oklch(0% 0 0 / 10%);
        border: 1px solid oklch(100% 0 0 / 30%);
        background: oklch(100% 0 0 / 20%);
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 8px;
    }

    .card-icon {
        font-size: 1.5rem;
        margin: 8px;
        cursor: pointer;
        transition:
            transform 0.2s ease,
            color 0.2s ease;

        &:hover {
            transform: scale(1.1);
            color: oklch(51.03% 0 0);
        }
    }
</style>

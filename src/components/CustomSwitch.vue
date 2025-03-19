<template>
    <div :class="['switch-container', { 'is-checked': change }]">
        <div class="switch-button" />
    </div>
</template>

<script lang="ts" setup>
    defineProps<{ change: boolean }>()
</script>

<style lang="scss" scoped>
    .switch-container {
        position: relative;
        width: 40px;
        height: 20px;
        background-color: #ccc;
        border-radius: 34px;
        transition: 0.4s;
        cursor: pointer;

        &.is-checked {
            background-color: oklch(65.82% 0.169 248.81);

            .switch-button {
                transform: translateX(18px);
            }
        }
    }

    .switch-button {
        position: absolute;
        inset: auto auto 3px 4px;
        height: 14px;
        width: 14px;
        background-color: white;
        border-radius: 50%;
        transition: 0.4s;
    }
</style>

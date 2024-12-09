<template>
    <div class="logo-container">
        <img
            src="/src/assets/images/logo.jpg"
            class="logo"
            :class="{
                'is-clicked': isLogoClicked,
                'is-hovering': isHovering
            }"
            alt="MSENXY Logo"
            loading="lazy"
            @click="handleLogoClick"
            @mouseenter="isHovering = true"
            @mouseleave="isHovering = false"
        />

        <h1 class="title" :class="{ 'is-clicked': isLogoClicked }">MSENXY</h1>
    </div>
</template>

<script lang="ts" setup>
    import { ref } from 'vue'

    const isHovering = ref(false)

    const isLogoClicked = defineModel<boolean>()

    const handleLogoClick = () => {
        isLogoClicked.value = !isLogoClicked.value
    }
</script>

<style lang="scss" scoped></style>

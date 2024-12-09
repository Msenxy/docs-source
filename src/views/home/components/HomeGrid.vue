<template>
    <div class="icon-container" :class="{ 'is-visible': isLogoClicked }">
        <Icon
            icon="mdi:github"
            class="social-icon"
            @click="handleIconClick('github')"
        />
        <Icon
            icon="mdi:twitter"
            class="social-icon"
            @click="handleIconClick('twitter')"
        />
        <Icon
            icon="mdi:instagram"
            class="social-icon"
            @click="handleIconClick('instagram')"
        />
        <Icon
            icon="mdi:email"
            class="social-icon"
            @click="handleIconClick('email')"
        />
        <Icon
            icon="mdi:more-horiz"
            class="social-icon"
            @click="handleIconClick('more')"
        />
    </div>
</template>

<script lang="ts" setup>
    import router from '@/router'
    import { Icon } from '@iconify/vue'

    defineProps<{ isLogoClicked: boolean }>()

    const handleIconClick = (type: string) => {
        if (type === 'more') {
            router.push('/docs')
            return
        }

        const links = {
            github: 'https://github.com',
            twitter: 'https://twitter.com',
            instagram: 'https://instagram.com',
            email: 'mailto:your-email@example.com'
        }

        window.open(links[type as keyof typeof links], '_blank')
    }
</script>

<style lang="scss" scoped></style>

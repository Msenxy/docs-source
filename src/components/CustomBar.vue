<template>
    <div class="navbar">
        <Icon icon="weui:back-filled" class="navbar-back" />

        <div @click="toggleMenu" class="navbar-menu">
            <Icon
                icon="mingcute:menu-fill"
                :class="['menu-icon', { 'menu-icon-trigger': isMenuExpanded }]"
            />
        </div>
    </div>

    <div :class="['card', { 'card-show': isMenuExpanded }]">
        <CustomCard :icon="settingsCard" />
        <CustomCard :icon="linkCard" />
    </div>

    <div class="popup" v-if="isSettingsOpen">
        <span>详细布局</span>
        <CustomSwitch
            :change="settings.simpleLayout"
            @click="simpleLayoutChange"
        />
    </div>
</template>

<script lang="ts" setup>
    import { ref, reactive } from 'vue'
    import { Icon } from '@iconify/vue'
    import CustomSwitch from '@/components/CustomSwitch.vue'
    import CustomCard from '@/components/CustomCard.vue'
    import { useLocalStorage } from '@/hooks/useLocalStorage'

    const isMenuExpanded = ref(false)
    const toggleMenu = () => {
        isMenuExpanded.value = !isMenuExpanded.value
        isSettingsOpen.value = false
    }

    const isSettingsOpen = ref(false)
    const settingsCard = [
        {
            iconName: 'material-symbols:settings-outline',
            clickEvent: () => (isSettingsOpen.value = !isSettingsOpen.value)
        },
        {
            iconName: 'material-symbols:dark-mode-outline',
            clickEvent: () => {}
        }
    ]

    const settings = reactive({
        simpleLayout: useLocalStorage('simpleLayout', false)
    })
    const simpleLayoutChange = () => {
        settings.simpleLayout = !settings.simpleLayout
        localStorage.setItem('simpleLayout', String(settings.simpleLayout))
    }

    const linkCard = [
        {
            iconName: 'mdi:github',
            clickEvent: () =>
                window.open(
                    'https://github.com/Msenxy',
                    '_blank',
                    'noopener noreferrer'
                )
        }
    ]
</script>

<style lang="scss" scoped>
    .navbar {
        position: fixed;
        width: 100vw;
        display: flex;
        justify-content: space-between;
    }

    .navbar-back {
        margin: 28px 0 0 20px;
        font-size: 1.5rem;
        cursor: pointer;
        transition: transform 0.3s ease;

        &:hover {
            transform: scale(1.1);
        }
    }

    .navbar-menu {
        margin: 28px 20px 0 0;
        width: 40px;
        height: 40px;
        border: 1px solid oklch(100% 0 0 / 30%);
        background: oklch(100% 0 0 / 20%);
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition:
            background 0.3s ease,
            border-color 0.3s ease;

        &:hover {
            background: oklch(100% 0 0 / 30%);
            border-color: oklch(100% 0 0 / 40%);
        }
    }

    .menu-icon {
        font-size: 1.5rem;
        color: oklch(32.11% 0 0);
        transition: transform 0.3s ease;

        &.menu-icon-trigger {
            transform: rotate(-90deg);
        }
    }

    .card {
        position: fixed;
        inset: 20px 72px auto auto;
        display: flex;
        flex-direction: row-reverse;
        gap: 10px;
        transform: translateX(20px);
        opacity: 0;
        transition:
            transform 0.3s ease,
            opacity 0.3s ease;

        &.card-show {
            opacity: 1;
            transform: translateX(0);
        }
    }

    .popup {
        position: fixed;
        inset: 92px 118px auto auto;
        border: 1px solid oklch(100% 0 0 / 30%);
        box-shadow: 0 4px 15px oklch(0% 0 0 / 10%);
        background: oklch(100% 0 0 / 20%);
        border-radius: 20px;
        padding: 16px;
        display: flex;
        justify-content: space-between;
        gap: 20px;
        min-width: 140px;
        font-family: 'Chill Round', 'LXGW Bright';

        &::before {
            content: '';
            position: absolute;
            inset: -7px 20px auto auto;
            width: 12px;
            height: 12px;
            background: oklch(100% 0 0 / 20%);
            backdrop-filter: blur(8px);
            transform: rotate(45deg);
            border-left: 1px solid oklch(100% 0 0 / 30%);
            border-top: 1px solid oklch(100% 0 0 / 30%);
            border-right: none;
            border-bottom: none;
        }
    }
</style>

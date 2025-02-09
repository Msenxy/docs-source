<template>
    <div class="navbar" ref="menuRef">
        <RouterLink to="/" v-if="showHomeButton">
            <Icon icon="line-md:home" class="navbar-back" />
        </RouterLink>

        <div @click="toggleMenu" class="navbar-menu">
            <Icon
                icon="mingcute:menu-fill"
                :class="['menu-icon', { 'menu-icon-trigger': isMenuExpanded }]"
            />
        </div>
    </div>

    <div :class="['card', { 'card-show': isMenuExpanded }]" ref="cardRef">
        <CustomCard :icon="settingsCard" />
        <CustomCard :icon="linkCard" />
    </div>

    <div class="popup" v-if="isSettingsOpen" ref="popupRef">
        <span>详细布局</span>
        <CustomSwitch
            :change="settings.simpleLayout"
            @click="simpleLayoutChange"
        />
    </div>
</template>

<script lang="ts" setup>
    import { ref, reactive, useTemplateRef, computed } from 'vue'
    import { RouterLink, useRoute } from 'vue-router'
    import { Icon } from '@iconify/vue'

    import CustomSwitch from '@/components/CustomSwitch.vue'
    import CustomCard from '@/components/CustomCard.vue'

    import { useLocalStorage } from '@/hooks/useLocalStorage'

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

    const route = useRoute()
    const showHomeButton = computed(() => route.name !== 'home')

    const isMenuExpanded = ref(false)
    const isSettingsOpen = ref(false)
    const menuRef = useTemplateRef('menuRef')
    const cardRef = useTemplateRef('cardRef')
    const popupRef = useTemplateRef('popupRef')
    const toggleMenu = () => {
        isMenuExpanded.value = !isMenuExpanded.value
        isSettingsOpen.value = false

        if (isMenuExpanded.value) {
            document.addEventListener('click', handleClickOutside)
        }
    }

    const settings = reactive({
        simpleLayout: useLocalStorage('simpleLayout', false)
    })
    const simpleLayoutChange = () => {
        settings.simpleLayout = !settings.simpleLayout
        localStorage.setItem('simpleLayout', String(settings.simpleLayout))
    }

    const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as HTMLElement

        const elements = [menuRef.value, cardRef.value, popupRef.value]

        const isClickOutsideAll = elements
            .filter(Boolean)
            .every(element => !element!.contains(target))

        if (isClickOutsideAll) {
            isMenuExpanded.value = false
            isSettingsOpen.value = false

            document.removeEventListener('click', handleClickOutside)
        }
    }
</script>

<style lang="scss" scoped>
    .navbar {
        position: fixed;
        width: 100vw;
        display: grid;
        grid-template-columns: repeat(2, auto);
        justify-content: space-between;
    }

    .navbar-back {
        margin: 36px 0 0 24px;
        font-size: 1.5rem;
        color: oklch(32.11% 0 0);
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
        grid-column: 2;
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

<template>
    <div :class="['menu-container', { 'is-expanded': isMenuExpanded }]">
        <div class="menu-trigger" @click="toggleMenu">
            <Icon
                icon="mingcute:menu-fill"
                :class="['menu-icon', { rotate: isMenuExpanded }]"
            />
        </div>

        <div class="menu-items">
            <Icon
                icon="material-symbols:dark-mode-outline"
                class="menu-item"
                @click="handleMenuClick('theme')"
            />

            <div class="settings-wrapper">
                <Icon
                    icon="material-symbols:settings-outline"
                    class="menu-item"
                    @click="handleMenuClick('settings')"
                />

                <div class="settings-popup" v-if="isSettingsOpen">
                    <div class="setting-item">
                        <span>详细布局</span>
                        <ms-switch
                            :change="settings.simpleLayout"
                            @click="simpleLayoutChange"
                        />
                    </div>
                </div>
            </div>
        </div>

        <div class="menu-items">
            <Icon
                icon="mdi:github"
                class="menu-item"
                @click="handleMenuClick('github')"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { ref, reactive } from 'vue'
    import { Icon } from '@iconify/vue'
    import MsSwitch from '@/components/MsSwitch.vue'
    import { useLocalStorage } from '@/hooks/useLocalStorage'

    const isMenuExpanded = ref(false)
    const isSettingsOpen = ref(false)

    const settings = reactive({
        simpleLayout: useLocalStorage('simpleLayout', false)
    })

    const toggleMenu = () => {
        isMenuExpanded.value = !isMenuExpanded.value
        isSettingsOpen.value = false
    }

    const simpleLayoutChange = () => {
        settings.simpleLayout = !settings.simpleLayout
        localStorage.setItem('simpleLayout', String(settings.simpleLayout))
    }

    const handleMenuClick = (type: string) => {
        switch (type) {
            case 'settings':
                isSettingsOpen.value = !isSettingsOpen.value
                break
            case 'github':
                window.open(
                    'https://github.com/Msenxy',
                    '_blank',
                    'noopener noreferrer'
                )
                break
            case 'theme':
                break
        }
    }
</script>

<style lang="scss" scoped>
    @mixin menu-base {
        background: oklch(100% 0 0 / 20%);
        border: 1px solid oklch(100% 0 0 / 30%);
        display: flex;
        align-items: center;
    }

    .menu-container {
        position: fixed;
        inset: 20px 20px auto auto;
        display: flex;
        flex-direction: row-reverse;
        gap: 10px;
        align-items: center;
    }

    .menu-trigger {
        @include menu-base;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        justify-content: center;
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

        &.rotate {
            transform: rotate(-90deg);
        }
    }

    .menu-items {
        @include menu-base;
        height: 40px;
        padding: 8px;
        border-radius: 20px;
        box-shadow: 0 4px 15px oklch(0% 0 0 / 10%);
        flex-direction: row-reverse;
        gap: 8px;
        transform: translateX(20px);
        opacity: 0;
        transition:
            transform 0.3s ease,
            opacity 0.3s ease;
    }

    .menu-item {
        font-size: 1.5rem;
        color: oklch(32.11% 0 0);
        cursor: pointer;
        padding: 8px;
        transition:
            transform 0.2s ease,
            color 0.2s ease;
        display: flex;
        align-items: center;

        &:hover {
            transform: scale(1.1);
            color: oklch(51.03% 0 0);
        }
    }

    .is-expanded .menu-items {
        opacity: 1;
        transform: translateX(0);
    }

    .settings-wrapper {
        position: relative;
    }

    .settings-popup {
        position: absolute;
        inset: calc(100% + 20px) 0 auto auto;
        border-radius: 20px;
        padding: 16px;
        min-width: 140px;
        box-shadow: 0 4px 15px oklch(0% 0 0 / 10%);
        background: oklch(100% 0 0 / 20%);
        border: 1px solid oklch(100% 0 0 / 30%);

        &::before {
            content: '';
            position: absolute;
            inset: -6px 20px auto auto;
            width: 12px;
            height: 12px;
            background: oklch(100% 0 0 / 20%);
            backdrop-filter: blur(8px);
            transform: rotate(45deg);
            border-left: 1px solid oklch(100% 0 0 / 30%);
            border-top: 1px solid oklch(100% 0 0 / 30%);
        }
    }

    .setting-item {
        display: flex;
        justify-content: space-between;
        font-family: 'Chill Round', 'LXGW Bright';
    }
</style>

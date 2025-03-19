import { ref, watch, onUnmounted } from 'vue'
import type { Ref } from 'vue'

export function useLocalStorage<T>(key: string, defaultValue: T): Ref<T> {
    const stored = localStorage.getItem(key)

    const value = ref<T>(stored ? JSON.parse(stored) : defaultValue) as Ref<T>

    watch(value, newVal => {
        localStorage.setItem(key, JSON.stringify(newVal))
        window.dispatchEvent(
            new CustomEvent('local-storage-change', {
                detail: { key, value: newVal }
            })
        )
    })

    const handleStorageChange = ((event: CustomEvent) => {
        if (event.detail.key === key) {
            value.value = event.detail.value
        }
    }) as EventListener

    window.addEventListener('local-storage-change', handleStorageChange)

    onUnmounted(() => {
        window.removeEventListener('local-storage-change', handleStorageChange)
    })

    return value
}

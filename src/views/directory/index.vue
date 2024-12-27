<template>
    <div>
        <h1>{{ title }}</h1>
        <p>{{ content }}</p>
    </div>
</template>

<script setup lang="ts">
    import { useRoute } from 'vue-router'

    const route = useRoute()
    const path = route.name as string

    const titleMap: { [key: string]: string } = {
        React: 'React 页面',
        Vue: 'Vue 页面',
        Unity: 'Unity 页面'
        // 添加更多类型和标题的映射
    }

    const contentMap: { [key: string]: string } = {
        React: '这是 React 页面内容。',
        Vue: '这是 Vue 页面内容。',
        Unity: '这是 Unity 页面内容。'
        // 添加更多类型和内容的映射
    }

    const title = titleMap[path] || '默认页面'
    const content = contentMap[path] || '这是默认页面内容。'
</script>

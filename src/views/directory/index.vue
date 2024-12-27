<script setup lang="ts">
    import { useRoute } from 'vue-router'

    const route = useRoute()
    const params = route.params as { type: string }
    const type = params.type

    const titleMap: { [key: string]: string } = {
        react: 'React 页面',
        vue: 'Vue 页面',
        unity: 'Unity 页面'
        // 添加更多类型和标题的映射
    }

    const contentMap: { [key: string]: string } = {
        react: '这是 React 页面内容。',
        vue: '这是 Vue 页面内容。',
        unity: '这是 Unity 页面内容。'
        // 添加更多类型和内容的映射
    }

    const title = titleMap[type] || '默认页面'
    const content = contentMap[type] || '这是默认页面内容。'
</script>
<template>
    <div>
        <h1>{{ title }}</h1>
        <p>{{ content }}</p>
    </div>
</template>

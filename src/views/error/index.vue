<template>
    <div class="not-found">
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <router-link to="/">Go back to Home</router-link>
    </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
    .not-found {
        text-align: center;
        margin-top: 50px;
    }
</style>

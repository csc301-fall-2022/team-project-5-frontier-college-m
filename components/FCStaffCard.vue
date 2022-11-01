<script lang="ts" setup>
const props = defineProps<{
    name: string
    role: string
}>()
</script>

<template>
    <div class="staff-card" w:bg="light-blue">
        <Icon name="fe:user" class="user-icon"/>
        <div class="user-text">{{ props.name }} - {{ props.role }}</div>

    </div>
</template>

<style scoped>
    .staff-card {
        display: flex;
        width: fit-content;
        min-width: 265px;
        border-radius: 10px;
        padding: 10px;
        margin: 10px;
    }

    .user-text {
        font-size: 12px;
        font-weight: 700;
        margin-left: 5px;
    }

    .user-icon {
        font-size: 20px;
    }
</style>
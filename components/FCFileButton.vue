<script lang="ts" setup>
const props = defineProps<{
    text: string
}>()
</script>

<template>
    <button>
        <Icon name="fe:file" class="button-icon"/>
        <div class="button-text">{{ props.text }}</div>
    </button>
</template>

<style scoped>
button {
    font-size: 14px;
    border-radius: 31px;
    margin: 10px;
    width: 126px;
    height: 126px;
    position: relative;
    background-color: var(--orange);
    font-weight: 700;
}

.button-text {
    position: absolute;
    bottom: 10%;
    width: 100%;
    left: 0%;
}

.button-icon {
    position: absolute;
    bottom: 30%;
    width: 100%;
    left: 0%;
    font-size: 80px;
}
</style>
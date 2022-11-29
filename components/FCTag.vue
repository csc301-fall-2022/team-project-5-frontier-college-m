<script lang="ts" setup>
const props = defineProps<{
    text: string
    icon: string
    color: string 
}>()
</script>

<template>
    <div class="tag">
        <Icon :name=props.icon class="tag-icon"/>
        <div class="tag-text">{{ props.text }}</div>
    </div>
</template>

<style scoped>
.tag {
    width:fit-content;
    border-radius: 31px;
    display: flex;
    padding: 5px;
    margin: 10px;
    background-color: v-bind(color);
}

.tag-icon {
    font-size: 20;
    margin-right: 5px;
}

.tag-text {
    font-size: 11px;
    font-weight: 700;
}
</style>
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
    border-radius: 1.5rem;
    display: flex;
    align-items: center;
    padding: 5px;
    padding-right: 10px;
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
    overflow-wrap: normal;
    width:fit-content;
    max-width: 85%;
}
</style>
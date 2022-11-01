<script lang="ts" setup>
const props = defineProps<{
    date: string
    title: string
    content: string
}>()
</script>

<template>
    <div class="program-card" style="background-color: white;">
        <div>
            <div class="date-text" w:text="green">{{ props.date }}</div>
            <div class="title-text">{{ props.title }}</div>
            <div class="content-text">{{ props.content }}</div>
        </div>
        <button class="card-button">
            <Icon name="fe:arrow-right"/>
        </button>
        
    </div>
</template>

<style scoped>
.program-card {
    width: 289px;
    height: 118px;
    border-radius: 10px;
    margin: 15px;
    display: flex;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.program-card div {
    margin-left: 10px;
}

.date-text {
    font-size: 13px;
    font-weight: 700;
    margin-top: 5px;
}

.title-text {
    font-size: 13px;
    font-weight: 700;
}

.content-text {
    font-size: 10px;
    font-weight: 400;
}

.card-button {
    width: 50%;
    font-size: 20px;
}
</style>

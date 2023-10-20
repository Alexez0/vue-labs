<script >
export default {
    name: 'my-button'
}
</script>

<template>
    <button class="btn"><slot></slot></button>
</template>

<style scoped>
.btn{
    padding: 10px;
    width: 100px;
    background-color: red;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    cursor: pointer;
}
</style>
<script>
export default{
    name: 'my-input',
    props:{
        modelValue:{
            type: String
        },
        type: {
            type: String,
            default: 'text'
        }
    },
    methods:{
        update(event){
            this.$emit('update:modelValue', event.target.value)
        }
    },
}
</script>

<template>
    <input :value="modelValue" @input="update" :type="type" class="input">
</template>

<style scoped>
.input{
    margin-bottom: 10px;
    height: 30px;
    border-bottom: 1px solid gray;
    border-top: 0;
    border-left: 0;
    border-right: 0;
}
</style>
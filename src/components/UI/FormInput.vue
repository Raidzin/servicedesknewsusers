<template>
    <input :value="modelValue" @input="updateInput" type="text" class="w-full mb-2 p-1 border border-solid rounded-xl p-3">
</template>

<script>
export default {
    name: 'form-input',
    props: {
        modelValue: [String, Number]
    },
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>
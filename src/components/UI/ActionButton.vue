<template>
    <button class="bg-lime-400 hover:bg-blue-900 hover:text-white duration-300 rounded-md p-1">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "action-button"
}
</script>
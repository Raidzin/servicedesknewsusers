<template>
    <div class="diaolog" v-if="show">
        <div class="dialog__content bg-white rounded-xl">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'create-user-dialog',
    props: {
        show: {
            type: Boolean,
            default: false,
        }
    }
}
</script>

<style>
.dialog {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: flex;
}

.dialog__content {
    margin: auto;
    min-height: 50px;
    min-width: 300px;
}
</style>
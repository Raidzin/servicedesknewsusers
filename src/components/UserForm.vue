<template>
   <div class="w-full max-w-screen-md bg-white shadow-lg rounded-xl p-3 my-8 ">
        <form @submit.prevent class="w-full">
            <form-input 
                v-model="user.username"
                type="text"
                placeholder="Имя пользователя"
            />
            <form-input 
                v-model="user.role"
                type="text"
                placeholder="роль"
            />
            <action-button
                @click="createUser"
            >
                Создать
            </action-button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                username: '',
                role: '',
            }
        }
    },
    methods: {
        createUser() {
            this.$emit('create', this.user);
            this.user = {
                username: '',
                role: '',
            }
        }
    }
}
</script>
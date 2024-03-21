<template>
   <div class="w-full max-w-screen-md bg-white shadow-lg rounded-xl p-3 my-8 ">
        <form @submit.prevent class="w-full">
            <form-input 
                v-model="user.username"
                type="text"
                placeholder="Имя пользователя"
            />
            <div class="my-3">
                <span>Администратор</span>
                <q-toggle
                    color="lime"
                    v-model="user.is_admin"
                />
            </div>
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
                is_admin: false,
            }
        }
    },
    methods: {
        createUser() {
            this.$emit('create', this.user);
            this.user = {
                username: '',
                is_admin: false,
            }
        }
    }
}
</script>
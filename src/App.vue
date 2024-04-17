<template>
    <div class="flex items-center justify-center">
        <div class="w-full max-w-screen-sm">
            <user-form
                @create="createUser"
                class="max-w-screen-sm"
            />
            <user-list
                :users="users"
                @remove="showDialog"
            />
            <q-dialog v-model="dialog">
                <q-card class="p-4">
                    <span class="mx-3">Удаляем?</span>
                    <action-button @click="removeUser" class="px-4 hover:bg-red-600">Да</action-button>
                </q-card>
            </q-dialog>
        </div>
    </div>
</template>

<script>
import UserForm from "@/components/UserForm.vue";
import UserList from "@/components/UserList.vue";
import axios from 'axios';
axios.defaults.withCredentials = true;

export default {
    components: {
        UserForm, UserList
    },
    data() {
        return {
            users: [],
            username: '',
            user_to_delete: {},
            role: '',
            dialog: false,
            moderator_url: '/api/v1/news/moderator'
        }
    },
    methods: {
        async createUser(user) {
            try {
                const response = await axios.post(this.moderator_url, user);
                await this.fetchUsers();
            } catch(e) {
                alert('Сетевая ошибка')
            }
            
        },
        async removeUser() {
            try {
                const response = await axios.delete(this.moderator_url + '/' + this.user_to_delete.username);
                await this.fetchUsers();
            } catch(e) {
                alert('Сетевая ошибка')
            }
            this.dialog = false;
            this.users = this.users.filter(u => u.username != user.username);
        },
        showDialog(user) {
            this.user_to_delete = user
            this.dialog = !this.dialog
        },
        async fetchUsers() {
            try {
                const response = await axios.get(this.moderator_url)
                this.users = response.data
            } catch(e) {
                alert('Сетевая ошибка')
            }
        }
    },
    mounted() {
        this.fetchUsers();
    }
}
</script>
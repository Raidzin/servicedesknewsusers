<template>
    <div class="flex items-center justify-center">
        <div>
            <user-form
                @create="createUser"
            />
            <user-list
                :users="users"
                @remove="removeUser"
            />
        </div>
    </div>
</template>

<script>
import UserForm from "@/components/UserForm.vue";
import UserList from "@/components/UserList.vue";
export default {
    components: {
        UserForm, UserList
    },
    data() {
        return {
            users: [
                {username: "goncharukak", role: "admin"},
                {username: "migunovala", role: "moderator"},
            ],
            username: '',
            role: ''
        }
    },
    methods: {
        createUser(user) {
            this.users.push(user);
        },
        removeUser(user) {
            this.users = this.users.filter(u => u.username != user.username)
        }
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
</style>
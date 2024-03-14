<template>
    <div class="flex items-center justify-center">
        <div class="w-full max-w-screen-md">
            <form class="w-full m-8">
                <input type="text" placeholder="Имя пользователя" class="w-full mb-2">
                <input type="select" placeholder="роль" class="w-full mb-2">
            </form>
            <div class="my-8 mx-4 w-full border-4 rounded-lg border-blue-900 hover:border-lime-200  duration-300" v-for="user in users">
                <div><strong>Имя пользователя: </strong>{{ user.username }}</div>
                <div><strong>Роль: </strong>{{ user.role }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            users: [
                {username: "goncharukak", role: "admin"},
                {username: "migunovala", role: "moderator"},
            ]
        }
    },
    methods: {
        addUser() {
            this.usersCout++;
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
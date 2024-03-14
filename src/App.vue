<template>
    <div>
        <div class="moderator">
            <div><strong>Имя пользователя: </strong>goncharukak</div>
            <div><strong>Роль: </strong>admin</div>
        </div>
    </div>
</template>

<script>
export default {
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
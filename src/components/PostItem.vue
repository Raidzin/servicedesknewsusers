<template>
    <div class="flex bg-white shadow-lg flex-row my-4 border rounded-xl justify-between items-center">
        <div class="p-3">
            <div><strong>Имя пользователя: </strong>{{ user.username }}</div>
            <div><strong>Роль: </strong>{{ user.is_admin ? "Администратор": "Модератор" }}</div></div>
        <div>
            <action-button
                class="mx-2"
                @click="$emit('remove', post)"
            >
                Удалить
            </action-button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        user: {
            type: Object,
            required: true,
        }
    }
}
</script>
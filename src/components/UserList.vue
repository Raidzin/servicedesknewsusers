<template>
    <div v-if="users.length > 0" class="w-full">
        <h2 class="text-center text-2xl">Список пользователей</h2>
        <post-item
            :user="user"
            v-for="user in users"
            :key="user.usename"
            @remove="$emit('remove', user)"
        />
    </div>
    <div v-else class="w-full">
        <h3 class="text-center text-2xl">Пользователей нет</h3>
    </div>
</template>

<script>
import PostItem from "@/components/PostItem.vue"
export default {
    components: {
        PostItem,
    },
    props: {
        users: {
            type: Array,
            required: true,
        }
    }
}
</script>
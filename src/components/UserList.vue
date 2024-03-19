<template>
    <div class="w-full">
        <h3>Список пользователей</h3>
        <post-item
            :user="user"
            v-for="user in users"
            :key="user.usename"
            @remove="$emit('remove', user)"
        />
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
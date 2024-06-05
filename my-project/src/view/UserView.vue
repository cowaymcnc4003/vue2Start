<template>
    <div class="container">
        <h2>User Profile</h2>
        <div class="user-container">
            <div>
                <i class="fa-solid fa-user"></i>
            </div>
            <div class="user-description">
                <div>{{ fetchedUserList.id }}</div>
                <div class="time">
                    <span>{{ 'Joined' + fetchedUserList.created }}, </span>
                </div>
                <span>{{ fetchedUserList.karma }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters(['fetchedUserList']),
    },
    created() {
        const itemId = this.$route.params.id;
        this.$store.dispatch('FETCH_USERLIST', itemId);
    },
}
</script>

<style scoped>
.user-container {
    display: flex;
    align-items: center;
}

.fa-user {
    font-size: 2.5rem;
}

.user-description {
    padding-left: 8px;
}

.time {
    font-size: 0.7rem;
}
</style>
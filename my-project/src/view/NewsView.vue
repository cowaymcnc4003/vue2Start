<template>
    <div>
        <ul>
            <!-- 1번 -->
            <!-- <li v-for="user in this.$store.state.user" :key="user.id">{{ user.title }}</li> -->
            <!-- 2번 -->
            <!-- <li v-for="user in userList" :key="user.id">{{ user.title }}</li> -->
            <!-- 3번 -->
            <!-- <li v-for="user in userList" :key="user.id">{{ user.title }}</li> -->
            <!-- 4번 -->
            <!-- <li v-for="user in fetchedUser" :key="user.id">{{ user.title }}</li> -->
            <!-- 5번 -->
            <li v-for="user in userList" :key="user.id">{{ user.title }}</li>
        </ul>
    </div>
</template>

<script>

// import { mapState } from 'vuex';
import { mapGetters } from 'vuex';

export default {
    computed: {
        // 4번
        // ...mapGetters(['fetchedUser'])
        // 5번
        ...mapGetters({
            userList: 'fetchedUser'
        })
        // 3번
        // ...mapState({
        //     userList(state) {
        //         return state.user
        //     }
        // })
        // 2번
        // userList() {
        //     return this.$store.state.user;
        // }
    },
    async created() {
        this.$store.dispatch("FETCH_USER");
        // let data = await fetchNewsList();
        // console.log(data);
    },
}
</script>

<style></style>
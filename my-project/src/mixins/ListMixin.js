import { mapGetters } from 'vuex';
export default {
    async created() {
        this.$store.dispatch("FETCH_LIST", this.$route.name);
        // let data = await fetchNewsList();
        // console.log(data);
    },
        computed: {
        // 4번
        // ...mapGetters(['fetchedUser'])
        // 5번
        ...mapGetters({
            newsList: 'fetchedList'
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
}
import ListItem from './../components/ListItem.vue';
export default function CreateListView(name) {
    return {
        name,
        created() {
            this.$store.dispatch('FETCH_LIST', this.$route.name);
        },
        render(h) {
            return h(ListItem);
        },
    }
}
<template>
    <div>
        News
    </div>
</template>

<script>
import { fetchNewsList } from '../api/index.js'

export default {
    async created() {
        let data = await fetchNewsList();
        console.log(data);
    },
}
</script>

<style></style>
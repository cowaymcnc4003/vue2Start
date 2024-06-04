<template>
    <div>
        <router-link to="/news">news</router-link>
        <router-link to="/jobs">jobs</router-link>
        <router-link to="/ask">ask</router-link>
        <router-link :to="`/user/${userParam}`">user</router-link>

    </div>
</template>

<script>
export default {
    data() {
        return {
            userParam : '123'
        }
    },
}
</script>

<style>

</style>
<template>
    <div>
        user
        // {{ routerData }}
    </div>
</template>

<script>
export default {
    data() {
        return {
            routerData: ""
        }
    },
    created() {
        this.routerData = this.$route.params.id
    },
}
</script>

<style>

</style>
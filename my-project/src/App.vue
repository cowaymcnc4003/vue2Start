<template>
  <div id="app">
    <router-view></router-view>
    <app-header :propdata=titleName></app-header>
    <text-view></text-view>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import TextView from './view/TextView.vue'

export default {
  name: 'App',
  data() {
    return {
      titleName: "aaaaa",
    }
  },
  components: {
    TextView,
    AppHeader
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

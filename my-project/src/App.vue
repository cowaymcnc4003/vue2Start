<template>
  <div id="app">
    <app-header :propsData="propsParam" @emitEvent='emitMethods'></app-header>
    <tool-bar></tool-bar>
    <router-view></router-view>
    <text-view></text-view>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import ToolBar from './components/ToolBar.vue'
import TextView from './view/TextView.vue'

export default {
  data() {
    return {
      propsParam : "appHeader",
    }
  },
  methods: {
    emitMethods(text) {
      console.log(text);
    }
  },
  name: 'App',
  components: {
    TextView,
    AppHeader,
    ToolBar
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

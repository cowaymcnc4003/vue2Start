<template>
  <div id="app">
    <!-- <app-header :propsData="propsParam" @emitEvent='emitMethods'></app-header> -->
    <tool-bar></tool-bar>
    <router-view></router-view>
    <!-- <text-view></text-view> -->
  </div>
</template>

<script>
// import AppHeader from './components/AppHeader.vue'
import ToolBar from './components/ToolBar.vue'
// import TextView from './view/TextView.vue'

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
    // TextView,
    // AppHeader,
    ToolBar
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}

a {
  color: #34495e;
  text-decoration: none;
}

a:hover {
  color: #42b883;
  text-decoration: underline;
}

a.router-link--exact-active {
  text-decoration: underline;
}

.page-enter-active,
.page-leave-active {
  transition: opacity .5s;
}

.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>

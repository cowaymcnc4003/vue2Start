<template>
  <div id="app">
    <!-- <app-header :propsData="propsParam" @emitEvent='emitMethods'></app-header> -->
    <tool-bar></tool-bar>
    <router-view></router-view>
    <!-- <text-view></text-view> -->
    <spinner-view :loading=loadingState></spinner-view>
  </div>
</template>

<script>
import SpinnerView from './components/SpinnerView.vue';
// import AppHeader from './components/AppHeader.vue'
import ToolBar from './components/ToolBar.vue'
import bus from './utils/bus.js';
// import TextView from './view/TextView.vue'

export default {
  data() {
    return {
      propsParam: "appHeader",
      loadingState: false,
    }
  },
  methods: {
    emitMethods(text) {
      console.log(text);
    },
    loadingShow() {
      this.loadingState = true;
    },
    loadingHide() {
      this.loadingState = false;
    }
  },
  name: 'App',
  components: {
    // TextView,
    // AppHeader,
    ToolBar,
    SpinnerView
  },
  created() {
    bus.$on('start:spinner', this.loadingShow);
    bus.$on('end:spinner', this.loadingHide);
  },
  destroyed() {
    bus.$off('start:spinner');
    bus.$off('end:spinner');
  },
}
</script>

<style scoped>
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

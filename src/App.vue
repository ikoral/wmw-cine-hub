<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <Sidebar />
  <div :style="{ 'margin-left': sideBarWidth }">
    <router-view />
  </div>
</template>

<script>
import Sidebar from "@/components/sidebar/Sidebar";
import { sideBarWidth } from "@/components/sidebar/side-state";

export default {
  components: { Sidebar },
  setup() {
    return { sideBarWidth };
  },
};
</script>

<style>
body {
  background-color: rgb(245, 245, 243);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

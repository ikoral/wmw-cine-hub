<template>
  <div
    class="sidebar"
    :style="{ width: sideBarWidth }"
    :class="{ 'sidebar-content-center': !showSideBar }"
  >
    <h1 class="text-4xl font-bold mb-10">
      <span v-if="showSideBar">WMW Cine Hub</span>
      <span v-else>
        <div>W</div>
        <div>M</div>
        <div>W</div>
      </span>
    </h1>

    <SideLink to="/" icon="fas fa-home">Home</SideLink>
    <SideLink to="/search" icon="fas fa-search">Search</SideLink>
    <h3 class="mt-10 mb-4 mr-6 uppercase" v-if="showSideBar">Channels</h3>
    <SideLink to="/addchannel" icon="fas fa-plus">Add Channel</SideLink>
    <SideLink to="/listchannel" icon="fas fa-list">List Channels</SideLink>

    <span
      class="collapse-link"
      :class="{ 'turn-around': !showSideBar }"
      @click="toggleSideBar"
    >
      <i class="fas fa-angle-left"></i>
    </span>
  </div>
</template>

<script>
import SideLink from "./SideLink";
import { showSideBar, toggleSideBar, sideBarWidth } from "./side-state";

export default {
  props: {},
  components: { SideLink },
  setup() {
    return { showSideBar, toggleSideBar, sideBarWidth };
  },
};
</script>

<style>
:root {
  --sidebar-bg-color: #2f7fa5;
  --sidebar-link-hover: #3a96c0;
  --sidebar-link-active: #266481;
}
</style>

<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  color: white;
  background-color: var(--sidebar-bg-color);
  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;
  transition: 0.3s ease;
}

.sidebar-content-center {
  align-items: center;
}

.collapse-link {
  position: absolute;
  bottom: 0;
  padding: 0.75em;
  color: rgba(255, 255, 255, 0.7);
  transition: 0.2s linear;
  cursor: pointer;
  font-size: 1.1em;
}

.turn-around {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>

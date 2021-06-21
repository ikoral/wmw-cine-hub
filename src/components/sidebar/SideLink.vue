<template>
  <router-link :to="to" class="link" :class="{ active: isActive }">
    <i class="icon" :class="icon" />
    <transition name="fade">
      <span v-if="showSideBar">
        <slot />
      </span>
    </transition>
  </router-link>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { showSideBar } from "./side-state";
export default {
  props: {
    to: { type: String, required: true },
    icon: { type: String, required: true },
  },
  setup(props) {
    const route = useRoute();
    const isActive = computed(() => route.path === props.to);
    return { isActive, showSideBar };
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.link {
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  font-weight: 400;
  user-select: none;
  margin: 0.2em 0;
  padding: 0.4em;
  border-radius: 0.25em;
  height: 1.8em;
  color: white;
  text-decoration: none;
}
.link:hover {
  background-color: var(--sidebar-link-hover);
}
.link.active {
  background-color: var(--sidebar-link-active);
}
.link .icon {
  flex-shrink: 0;
  width: 25px;
  margin-right: 10px;
}
</style>

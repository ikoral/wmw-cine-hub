/* eslint-disable prettier/prettier */
import { ref, computed } from "vue";

export const showSideBar = ref(true);
export const toggleSideBar = () => (showSideBar.value = !showSideBar.value);

export const MENU_WIDTH = 200;
export const MENU_WIDTH_SMALL = 40;
export const sideBarWidth = computed(
    () => `${showSideBar.value ? MENU_WIDTH : MENU_WIDTH_SMALL}px`
);

<template>
  <NavbarView />
  <router-view />
</template>

<script setup>
import NavbarView from "./components/NavbarView.vue";
</script>

<style lang="scss">
.none {
  color: #888;
  font-style: italic;
}
</style>

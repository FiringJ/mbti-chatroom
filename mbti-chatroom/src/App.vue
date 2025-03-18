<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Helvetica Neue', Arial, sans-serif;
}

body {
  margin: 0;
  padding: 0;
  background-color: #e9f7a9;
  position: relative;
  overflow: hidden;
  height: 100vh;
}

#app {
  padding: 0;
  height: 100vh;
  width: 100%;
  max-width: 100%;
  margin: 0;
  display: flex;
  justify-content: center;
}
</style>

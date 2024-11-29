<template>
  <Header />
  <router-view></router-view>
</template>

<script setup>
import Header from "./components/Header.vue"
import { RouterView } from "vue-router"
</script>

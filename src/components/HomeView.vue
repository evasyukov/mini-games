<template>
  <!-- <router-link to="/guess-number">Найди число</router-link>
  <RouterLink to="/gallows">Виселица</RouterLink> -->

  <div class="home">
    <div class="home__title">
      <h1>Добро пожаловать!</h1>
    </div>

    <div class="home__header">
      <h2>Список игр</h2>
    </div>

    <div class="home__games"></div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const gameList = ref([
  {
    id: 1,
    title: "Найди число",
    path: "guess-number",
  },
  {
    id: 2,
    title: "Виселица",
    path: "gallows",
  },
])
</script>

<style scoped lang="scss">
.home {
  &__title {
    text-align: center;
  }

  &__header {
  }

  &__games {
  }
}
</style>

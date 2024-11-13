<template>
  <Header :gameList="gameList" />
  <h1>{{ gameList[0].title }}</h1>
  <GuessNumber />
</template>

<script setup>
import { ref } from "vue"
import Header from "./components/Header.vue"
import GuessNumber from "./components/GuessNumber.vue"

const gameList = ref([
  {
    id: 1,
    title: "Найди число",
  },
  {
    id: 2,
    title: "Игра 2",
  },
  {
    id: 3,
    title: "Игра 3",
  },
])
</script>

<style lang="scss" scoped></style>

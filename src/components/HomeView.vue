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

    <div class="home__games">
      <div class="home__game" v-for="game in gameList" :key="game.id">
        <p class="name"> {{ game.name }}</p>
        <router-link :to="`/${ game.path}`">
          <button @click="switcherList">Играть</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const gameList = ref([
  {
    id: 1,
    name: "Найди число",
    path: "guess-number",
  },
  {
    id: 2,
    name: "Виселица",
    path: "gallows",
  },
])
</script>

<style scoped lang="scss">
.home {
  width: 100%;

  &__title {
    text-align: center;
  }

  &__header {
    border-bottom: 3px solid #000;
  }

  &__games {
    width: 100%;

    display: flex;
    flex-wrap: wrap;
  }

  &__game {
    width: 230px;
    height: 250px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    margin: 10px;

    border: 1px solid #000;

    p {
      margin: 0;
    }

    button {
      padding: 5px 20px;

      font-size: 16px;
      color: #000;
      background: none;

      border: 1px solid #000;

      cursor: pointer;

      transition: all 0.5s ease 0s;

      &:hover {
        background: #000;
        color: #fff;
      }
    }
  }
}
</style>

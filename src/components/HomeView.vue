<template>
  <div class="home">
    <div class="home__title">
      <h1>Добро пожаловать!</h1>
    </div>

    <div class="home__header">
      <h1>Список игр</h1>
    </div>

    <div class="home__games">
      <div class="home__game" v-for="game in gameList" :key="game.id">
        <p class="name">{{ game.name }}</p>
        <router-link :to="`/${game.path}`">
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

    position: relative;
    overflow: hidden;

    user-select: none;

    h1 {
      margin: 0;


      display: inline-block;
      white-space: nowrap;
      animation: scrollText 7s linear infinite, changeColor 2s linear infinite;;
    }

    @keyframes scrollText {
      0% {
        transform: translateX(-180%);
      }
      100% {
        transform: translateX(180%);
      }
    }
    @keyframes changeColor {
      0% {
        color: rgb(255, 166, 0);
      }
      16% {
        color: #ffff00; 
      }
      32% {
        color: rgb(0, 255, 0); 
      }
      48% {
        color: #00ffff; 
      }
      64% {
        color: #0000ff;
      }
      80% {
        color: #ff00ff;
      }
      100% {
        color: rgb(255, 0, 0);
      }
    }
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
    }
  }
}
</style>

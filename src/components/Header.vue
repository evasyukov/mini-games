<template>
  <div class="header">
    <div class="header_title">
      <h1>Мини игры</h1>
    </div>

    <div class="header_list" :class="{ active: isActive }">
      <button @click="switcherList">
        {{ isActive ? "Скрыть" : "Список игр" }}
      </button>

      <ul v-show="isActive">
        <li><router-link to="/game/1">Игра 1</router-link></li>
        <li><router-link to="/game/2">Игра 2</router-link></li>
        <li><router-link to="/game/3">Игра 3</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const isActive = ref(false)

const switcherList = () => {
  isActive.value = !isActive.value
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: flex-start;

  border-bottom: 3px solid #000;

  width: 100%;

  &_title {
    border: 1px 1px 1px 1px #000;
    border-radius: 5px;
  }

  &_list {
    margin-left: auto;

    display: flex;
    align-items: center;

    position: relative;

    button {
      padding: 10px 20px;

      font-size: 16px;
      color: #000;
      background: none;

      border: 3px solid #000;
    

      cursor: pointer;

      transition: all 0.5s ease 0s;

      &:hover {
        background: #000;
        color: #fff;
      }
    }

    ul {
      position: absolute;
      right: 120px;

      display: flex;
      flex-direction: row;
      gap: 5px;

      :hover {
        background-color: #000;
        color: #fff;
      }

      li {
        height: 40px;
        width: max-content;

        padding: 0px 20px;

        background-color: #00000018;
        border: 1px solid #000;

        display: flex;
        justify-content: center;
        align-items: center;

        cursor: pointer;
      }
    }
  }
}
</style>

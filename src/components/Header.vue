<template>
  <div class="header">
    <h1>Мини игры</h1>

    <div class="header_game-list">
      <button class="button" @click="switcherList">Список игр</button>

      <!-- список игр -->
      <ul class="list" id="list" :class="{ active: isActive }">
        <li class="list-item">
          <div class="list-link">Найди число</div>
        </li>
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
  align-items: flex-start;
  flex-direction: column;

  width: 100%;

  &_game-list {
    .button {
      inline-size: 100%;
      padding: 0.5lh 1.5lh;
      font: inherit;
      color: currentColor;
      background-color: #f28482;
      border: none;
      cursor: pointer;

      &:hover {
        background-color: #f5cac3;
      }
    }

    .list {
      margin-block-start: 0.5lh;
      background-color: #f28482;
      overflow: hidden;
      line-height: 0;
      transition: line-height 0.5s, color 0.5s;

      &.active {
        line-height: 1.2;
        color: currentColor;
      }

      .list-item {
        overflow: hidden;

        .list-link {
          display: block;
          padding: 0.5lh;

          :hover {
            background-color: #f5cac3;
          }
        }
      }
    }
  }
}
</style>

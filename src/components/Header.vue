<template>
  <div class="header">
    <div class="header_title">
      <h1>Мини игры</h1>
    </div>

    <div class="header_list" :class="{ active: isActive }">
      <router-link to="/">
        <button @click="switcherList">На главную</button>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue"

defineProps({
  gameList: Array,
})

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

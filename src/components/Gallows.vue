<template>
  <div class="gallows">
    <div class="gallows__choice" v-show="!startGame">
      <button @click=";(opponent = 'human'), (startGame = true)">
        Против человека
      </button>
      <button @click=";(opponent = 'computer'), (startGame = true)">
        Против компьютера
      </button>
    </div>

    <div class="gallows__game" v-show="startGame">
      <div class="gallows__human" v-if="opponent === 'human'">
        <h3>Введите слово</h3>
        <input type="text" v-model="word" />
        <button>Начать</button>
      </div>

      <div class="gallows__computer" v-if="opponent === 'computer'">
        <h1>Компьютер</h1>
      </div>



    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const opponent = ref()
const startGame = ref(false)

const word = ref()
</script>

<style lang="scss" scoped>
.gallows {
  width: 100%;
  height: 500px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #000;
  box-shadow: inset 0px 0px 6px 2px #000;

  &__choice {
    display: flex;
    gap: 10px;

    button {
      font-size: 16px;
      transition: none;
    }
  }

  &__game {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  &__human {
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  
    input {
      width: 300px;
    }
  }
}
</style>

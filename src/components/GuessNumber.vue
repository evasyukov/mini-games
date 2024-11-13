<template>
  <div class="guess-number">
    <!-- title  -->
    <div class="guess-number_title">
      <h1>Найди число</h1>
    </div>

    <!-- game  -->
    <div class="guess-number_game">
      <div class="gap-input">
        Введите промежуток от
        <input v-model="min" type="number" min="0" /> до
        <input v-model="max" type="number" />
        <button
          style="margin-left: 230px"
          @click="startGame()"
          :disabled="visibleGame"
        >
          Начать
        </button>
      </div>

      <div class="main-game" v-show="visibleGame">
        <p>Введите загаданное число:</p>
        <input v-model="inputNumber" type="number" max="20"/>
        <button @click="chekNumber()">Проверить</button>

        <p>Статус: {{ status }}</p>
        <p>Cчет: {{ score }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const visibleGame = ref(false)

const status = ref("") // значение статуса
const score = ref(20) // значение счета
const record = ref() // значение рекорда

const min = ref(1) // значение минимального значения
const max = ref(20) // значение максимального значения

const inputNumber = ref() // значение введенного числа
const wantedNumber = ref(15) // значение загаданного числа

// функция для старта игры
const startGame = () => {

  if (min.value > max.value || min.value < 0) { 
    alert("Некорректные значения границ промежутка")
    return
  }

  wantedNumber.value = Math.floor(
    Math.random() * (max.value - min.value + 1) + min.value
  )

  visibleGame.value = true
  status.value = "Игра началась"
}

const chekNumber = () => {
  if (inputNumber.value < wantedNumber.value) {
    status.value = "Загаданное число меньше"
    score.value--
  } else if (inputNumber.value > wantedNumber.value) {
    status.value = "Загаданное число больше"
    score.value--
  } else {
    status.value = "Вы угадали!"
    visibleGame.value = false
  }
}
</script>

<style scoped lang="scss">
.guess-number {
  &_title {
    margin-bottom: 50px;
  }

  &_game {
    // border: 1px solid #000;
    padding: 20px;

    .gap-input {
      font-size: 18px;

      input {
        width: 50px;

        border: none;
        border-bottom: 2px solid #000;

        text-align: center;
        font-size: 18px;
      }
    }

    .main-game {
      display: flex;
      flex-direction: column;
      align-items: center;

      gap: 20px;
      margin-top: 30px;

      input {
        border: 1px solid #000;
        font-size: 26px;
      }
    }
  }
}

input {
  color: #000;
  background-color: transparent;
  outline: none;
  text-align: center;
}
p {
  font-size: 24px;
  margin: 0;
}

button {
  padding: 10px 20px;

  font-size: 16px;
  color: #000;
  background: none;

  border: 3px solid #000;

  cursor: pointer;

  transition: all 0.5s ease 0s;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;

    &:hover {
      background: none;
      color: #000;
    }
  }

  &:hover {
    background: #000;
    color: #fff;
  }
}
</style>

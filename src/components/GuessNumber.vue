<template>
  <div class="guess-number">
    <div class="guess-number__input-gap">
      <div v-show="!visibleGame">
        Введите промежуток от
        <input v-model="min" type="number" min="0" /> до
        <input v-model="max" type="number" />
      </div>
    </div>

    <div class="guess-number__game">
      <button @click="startGame()" :disabled="visibleGame">Начать</button>

      <div class="guess-number__start" v-show="visibleGame">
        <p>Введите загаданное число:</p>
        <input v-model="inputNumber" type="number" />
        <button @click="chekNumber()">Проверить</button>
      </div>

      <div class="guess-number__stats" v-show="status.length > 0">
        <p>{{ status }}</p>
        <p v-show="visibleGame.value === false">Cчет: {{ score }}</p>
      </div>
    </div>

    <div class="guess-number__result">
      <p>Результаты последних игр:</p>

      <ul>
        <li v-for="result in results" :key="result.id">
          {{ result.message }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const visibleGame = ref(false)

const status = ref("") // статус игры
const score = ref(20) // счет
const results = ref([]) // последние результаты

const min = ref(1) //  минимальное значение
const max = ref(20) //  максимальное значение

const inputNumber = ref() //  введенное число
const wantedNumber = ref() //  загаданное число

// функция для старта игры
const startGame = () => {
  if (min.value > max.value || min.value < 0) {
    alert("Некорректные значения границ промежутка")
    return
  }

  wantedNumber.value = Math.floor(
    Math.random() * (max.value - min.value + 1) + min.value
  )

  inputNumber.value = ""
  score.value = 20
  visibleGame.value = true
  status.value = "Игра началась"
}

const chekNumber = () => {
  if (inputNumber.value >= min.value && inputNumber.value <= max.value) {
    if (inputNumber.value > wantedNumber.value) {
      status.value = "Загаданное число меньше"
      score.value--
    } else if (inputNumber.value < wantedNumber.value) {
      status.value = "Загаданное число больше"
      score.value--
    } else {
      status.value = "Вы угадали! Поздравляем!"
      visibleGame.value = false

      resultValue()
    }
  }
}

const resultValue = () => {
  results.value.unshift({
    id: Date.now(),
    message: `Набрано ${score.value} очков, на промежутке от ${min.value} до ${max.value}`,
  })
}
</script>

<style scoped lang="scss">
.guess-number {
  height: 500px;

  display: flex;
  justify-content: space-around;

  border: 1px solid #000;
  box-shadow: inset 0px 0px 6px 2px #000;

  padding: 20px;

  &__input-gap {
    width: 250px;
    font-size: 18px;

    input {
      width: 50px;

      border: none;
      border-bottom: 2px solid #000;

      text-align: center;
      font-size: 18px;
      font-weight: 800;
    }
  }

  &__game {
    width: 720px;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 20px;

    input {
      font-size: 26px;
    }
  }

  &__start {
    width: 80%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  &__stats {
    margin-top: 50px;
  }

  &__result {
    width: 250px;
    height: 100%;
    overflow-y: auto;
    padding-right: 12px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    scrollbar-width: 5px;
    scrollbar-color: #000;
    scrollbar-gutter: stable;

    p {
      font-size: 14px;
      margin: 0;
    }

    ul {
      list-style-type: decimal-leading-zero;
      font-size: 13px;
      list-style-position: inside;

      padding: 0;

      li {
        margin-bottom: 15px;
        border-bottom: 1px solid #000;

        &::marker {
          font-size: 14px;
          font-weight: 700;
        }
      }
    }

    &::-webkit-scrollbar {
      width: 5px;
      border: 1px solid #000;
      border-radius: 50px;
    }

    &::-webkit-scrollbar-thumb {
      background: #000000;
      border-radius: 50px;
    }
  }
}

button {
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;

    &:hover {
      background: none;
      color: #000;
    }
  }
}
</style>

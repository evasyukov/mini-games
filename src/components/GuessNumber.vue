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
        <input type="number" min="0" /> до
        <input type="number" />
        <button style="margin-left: 230px;">Начать</button>
      </div>

      <div class="main-game">
        <p>Введите загаданное число:</p>
        <input type="number" />
        <button>Проверить</button>

        <p>Статус: {{ status }}</p>
        <p>Количество очков: {{ score }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
</script>

<style scoped lang="scss">
.guess-number {
  &_title {
    margin-bottom: 50px;
  }

  &_game {
    border: 1px solid #000;
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

  &:hover {
    background: #000;
    color: #fff;
  }
}
</style>

<template>
  <div class="header">
    <div class="header_title">
      <h1>Мини игры</h1>
    </div>

    <router-link to="/">
      <button @click="switcherList">На главную</button>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 3px solid #000;

  width: 100%;
}
</style>

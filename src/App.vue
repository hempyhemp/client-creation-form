<template>
  <div id="app">
    <div class="container">
      <h1>Создание нового клиента</h1>
    </div>
    <hr />
    <div class="container">
      <create-user-form />
    </div>
    <hr />
    <div class="container"></div>
  </div>
</template>

<script>
import CreateUserForm from './components/CreateUserForm.vue'

export default {
  name: 'app',
  components: {
    CreateUserForm,
  },
}
</script>

<style lang="scss">
@import '@/scss/variables';
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');

* {
  box-sizing: border-box;
}

.container {
  padding: 0 20px;
  max-width: 700px;
  margin: 0 auto;
}

@media screen and (max-width: 992px) {
  .input-row {
  }
}

html,
body {
  font-size: 14px;
  font-family: $font-family;
  color: $font-color;
  margin: 0;
  padding: 0;
}
</style>

<template>
  <div id="app">
    <character-space></character-space>
  </div>
</template>

<script>
import CharacterSpace from "./components/CharacterSpace";

export default {
  name: 'App',
  components: {
    CharacterSpace
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

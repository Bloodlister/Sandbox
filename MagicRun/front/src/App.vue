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
  padding: 0;
  margin: 0;
}
</style>

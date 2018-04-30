<template>
    <div>
        <h1>Character Space</h1>
        <character></character>
        <enemy></enemy>
        <button v-on:click="characterText()">Test</button>
    </div>
</template>

<script>
    import Character from "./Characters/Character"
    import Enemy from "./Characters/Enemy"
    export default {
        components: {
            Character,
            Enemy
        },
        methods: {
            characterText() {
                this.$eventBus.$emit("clicked", true);
            }
        }
    }
</script>

<style scoped>

</style>
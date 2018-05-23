<template>
    <div id="app">
        <div v-if="game_started === false">
            <h1>{{ msg }}</h1>
            <input type="text" v-on:input="validate" v-model="player_name">
            <button v-on:click="start">Start Game</button>
            <p v-if="error != null" id="error">{{ error }}</p>
        </div>
        <div v-else>
            <h1>Hello, {{ player_name }}</h1>
            <BlackJack></BlackJack>
        </div>
        <button v-if="game_started === true" v-on:click="quit">Quit</button>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data: function() {
            return {
                game_started: false,
                player_name: "Player",
                msg: "Greetings!",
                error: null
            }
        },
        methods: {
            start() {
                if (this.validate()) {
                    this.$data.game_started = true;
                }
            },
            quit() {
                this.$data.game_started = false;
            },
            validate() {
                if (this.$data.player_name.length <= 1) {
                    this.error = "Name is too short!";
                    return false;
                }

                this.error = null;
                return true;
            }
        }
    }
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
    }

    #error {
        color: #FF0000;
    }
</style>

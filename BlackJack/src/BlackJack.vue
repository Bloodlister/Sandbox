<template>
    <div id="black_jack">
        <p>We're playing BlackJack</p>
        <button :disabled="game_ended === true" v-on:click="drawCard">Draw Card</button>
        <p>{{ totalPoints }}</p>
        <div id="cards_container">
            <div class="card" v-for="card in cards">
                <Card v-bind:card_type="card.type" v-bind:card_value="card.sign"></Card>
            </div>
        </div>
    </div>
</template>

<script>
    import Card from './Card.vue';
    import CardDealer from './CardDealer.js';
    export default {
        name: "BlackJack",
        components: {
            Card: Card
        },
        data() {
            return {
                cards: [],
                game_ended: false
            }
        },
        computed: {
            totalPoints: {
                get() {
                    var total = 0;
                    this.$data.cards.forEach((card) => {
                        total += CardDealer.getValue(card.sign);
                    });
                    return total;
                }
            }
        },
        methods: {
            drawCard() {
                this.$data.cards.push(CardDealer.drawCard());
                this.checkCards();
            },
            checkCards() {
                if (this.totalPoints >= 21) {
                    this.$data.game_ended = true;
                }
            }
        }
    }
</script>

<style scoped>

</style>
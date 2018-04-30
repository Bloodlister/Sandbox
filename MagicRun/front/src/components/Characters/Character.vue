<template>
    <div>
        Hello I'm a {{ type }}!
        <p v-if="inpected">I am a {{ sub_type }}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                type: "Hero",
                sub_type: "Hooman",
                inpected: false
            }
        },
        mounted() {
            this.$eventBus.$on('clicked', () => {
                this.inpected = !this.inpected
            });
        }
    }
</script>

<style scoped>

</style>
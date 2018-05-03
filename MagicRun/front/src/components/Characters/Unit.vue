<template>
    <div :class="['character', side]" v-on:click="displayInfo()">
        Hello I'm a {{ type }}!
        <p v-if="inspected">I am a {{ sub_type }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: null,
            character: null,
            type: null,
            side: 'ally',
            inspected: false
        }
    },
    mounted() {
        this.$eventBus.$on('hideUnitInfo', (unit_id) => {
            if(unit_id !== this.id){
                this.inspected = false;
            }
        });
    },
    methods: {
        displayInfo() {
            this.$eventBus.$emit("hideUnitInfo", this.id);
            this.inspected = !this.inspected;
        }
    }
}
</script>
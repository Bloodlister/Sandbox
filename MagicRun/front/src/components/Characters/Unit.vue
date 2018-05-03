<template>
    <div :class="['character', side]" v-on:click="displayInfo()">
        {{ sub_type }}
        <p v-if="inspected">Type: {{ sub_type }}</p>
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
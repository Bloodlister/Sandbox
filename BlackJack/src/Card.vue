<template>
    <div>
        Card: {{ card_type }} {{ card_value }}
    </div>
</template>

<script>
    export default {
        name: "Card",
        props: ['card_type', 'card_value']
    }
</script>

<style scoped>

</style>
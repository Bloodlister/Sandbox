<template>
    <div class="character-space">
        <character></character>
        <enemy></enemy>
    </div>
</template>

<script>
    import Character from "./Characters/Character"
    import Enemy from "./Characters/Enemy"
    export default {
        components: {
            Character,
            Enemy
        }
    }
</script>
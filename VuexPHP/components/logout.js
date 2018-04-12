Vue.component('logout', {
    template: '<button type="button" @click="logout">Logout</button>',
    methods: {
        logout() {
            Vue.makeRequest("/logout.php").then(() => {
                this.$eventHub.$emit('logout');
            });
        }
    }
})
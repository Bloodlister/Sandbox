Vue.component('username', {
    props: ['user'],
    template: '<div id="username">{{ user }}</div>',
    mounted: function() {
        this.$eventHub.$on('logged', (data) => {
            this.user = data;
        })
    }
});
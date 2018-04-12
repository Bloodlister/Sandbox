Vue.component('username', {
    props: ['user_prop'],
    template: '<div id="username">{{ username }}</div>',
    data: function() {
        return {
            username: this.user_prop,
        }
    },
    mounted: function() {
        this.$eventHub.$on('logged', (data) => {
            this.refreshUsername();
        });
        this.$eventHub.$on('logout', () => {
            this.refreshUsername();
        })
    },
    methods: {
        refreshUsername() {
            Vue.makeRequest('/getUserInfo.php').then((response) => {
                this.username = response.body.username;
            });
        }
    }
});
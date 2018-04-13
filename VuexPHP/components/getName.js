Vue.component('getname', {
    template: '<h1>{{ username }}</h1>',
    data: function() {
       return {
           username: 'no username'
       }
    },
    mounted: function() {
        this.magic();
    },
    methods: {
        magic: function() {
            Vue.makeRequest('http://localhost:3001/magic.php', {username:'ninja'}).then((resp) => {
                this.username = resp.body.username;
            });
        }
    }
});
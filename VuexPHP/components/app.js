// new Vue({
//     el: '#app',
//     methods: {
//         refreshMessage(resource) {
//             this.$http.get('/message').then((response) => {
//                 this.message = response.data.message;
//             });
//         }
//     }
// })


Vue.component('sub-component', {
    template: '<div>Status: {{ message }}</div>',
    data: function() {
        return {
            message: 'Not logged'
        }
    },
    mounted: function () {
        this.message = this.reset();
    },
    methods: {
        reset: function() {
            Vue.http.options.emulateJSON = true;
            this.$http.post('/login.php', {username:'ninja', pass:'123456'}).then((response) => {
                console.log(response);
                this.message = response.body.username;
            })
        }
    }
});

new Vue({
    el: '#app',
});

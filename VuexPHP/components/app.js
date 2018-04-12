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
    mounted: function() {
        this.$eventHub.$on('logged', (data) => {
            this.message = data;
        })
    }
});

Vue.prototype.$eventHub = new Vue();

new Vue({
    el: '#app'
});

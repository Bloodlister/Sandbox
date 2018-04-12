Vue.component('sub-component', {
    template: '<div>Status: {{ message }}</div>',
    data: function() {
        return {
            message: 'Not logged'
        }
    },
    mounted: function() {
        this.$eventHub.$on('logged', (data) => {
            this.setMessage(data);
        })
    },
    methods: {
        setMessage(data) {
            this.message = data;
        }
    }
});

Vue.prototype.$eventHub = new Vue();
Vue.makeRequest = (path, data) => {
    data = data === undefined ? {} : data;
    Vue.http.options.emulateJSON = true;
    return Vue.http.post(path, data);
};

new Vue({
    el: '#app'
});

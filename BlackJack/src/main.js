import Vue from 'vue'
import App from './App.vue'
import BlackJack from './BlackJack.vue'
import Card from './Card.vue'

Vue.prototype.$eventBus = new Vue();

Vue.component('BlackJack', BlackJack);
Vue.component('Card', Card);

new Vue({
    name: "App",
    el: '#app',
    components: {
        BlackJack: BlackJack
    },
    render: h => h(App)
})

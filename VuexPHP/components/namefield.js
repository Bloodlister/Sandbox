Vue.component('namefield', {
    props: ['field'],
    template: '<div><label>Text</label><input type="text"><button @click="removeField">Remove</button></div>',
    methods: {
        removeField: function() {
            this.$parent.fields -= 1;
        }
    }
});

new Vue({
    el: "#container",
    data: {
        fields: 1
    },
    methods: {
        newField: function() {
            console.log('aaa');
            this.fields += 1;
        },
        removeField: function() {
            console.log('asdasd');
        }
    }
});


Vue.component('loginform', {
    template:   '<div class="form">' +
                    '<input type="text" v-model="username">' +
                    '<input type="password"  v-model="pass">' +
                    '<button type="button" @click="submit">Login</button>' +
                '</div>',
    data: function() {
        return {
            username: '',
            pass: ''
        }
    },
    events: {
        logged: () => {
            console.log('aaa');
        }
    },
    methods: {
        submit() {
            Vue.http.options.emulateJSON = true;
            this.$http.post('/login.php', {username:this.username, pass:this.pass}).then((response) => {
                this.$eventHub.$emit("logged", response.body.username);
            })
        }
    }
});
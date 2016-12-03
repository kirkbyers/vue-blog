<template>
    <div id="login">
        <form v-on:submit="submitLogin">
            <input type="email" v-model="username">
            <input type="password" v-model="pass">
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script>
import firebase from '../../services/firebase';

export default {
    name: 'login',
    data () {
        return {
            username: '',
            pass: ''
        }
    },
    watch: {
        username: (newVal, oldVal) => {
        },
        pass: (newVal, oldVal) => {
        }
    },
    methods: {
        submitLogin: function (event) {
            firebase
                .auth()
                .signInWithEmailAndPassword(this.username, this.pass)
                .then((res) => console.log(res));
        }
    }
}
</script>

<style scoped>
    input {
        display: block;
    }
</style>
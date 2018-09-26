<template>
    <div class="login">
        <h3>Sign In</h3>
        <div class="row">
            <div class="col m4"></div>
            <div class="col m4">
                <input type="text" v-model="email" placeholder="Email"><br>
                <input type="password" v-model="password" placeholder="Password"><br>
                <button class="btn" v-on:click="login">Login</button>
            </div>
            <div class="col m4"></div>
        </div>
        <p>You don't have an account ? You can create one <router-link to="/sign-up">create one</router-link></p>
    </div>
</template>

<script>
    import firebase from 'firebase'
    export default {
        name: 'Login',
        data: function () {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            login: function () {
                firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                    (user) => {
                        alert('Well done! You are now connected')
                        this.$router.replace('hello')
                    },
                    function (err) {
                        alert('Oops. ' + err.message)
                    }
                )
            }
        }
    }
</script>
<style scoped>
    .login {
        margin-top: 40px;
    }
    input {
        margin: 10px 0;
        width: 20%;
        padding: 15px;
    }
    button {
        margin-top: 20px;
        width: 10%;
        cursor: pointer;
    }
    p {
        margin-top: 40px;
        font-size: 12px;
    }
    p a {
        text-decoration: underline;
        cursor: pointer;
    }
</style>

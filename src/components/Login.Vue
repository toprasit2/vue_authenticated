<template>
    <div>
        <div class="row">
            <div class="col m4"></div>
            <div class="col m4 login">
                <h3>Login</h3>
                <div class="row">
                    <div class="col m2"></div>
                    <div class="col m8">
                        <input type="text" v-model="email" placeholder="Email">
                        <input type="password" v-model="password" placeholder="Password">
                    </div>
                    <div class="col m2"></div>
                    <div class="col m12" style="margin-top: 20px">
                        <a class="btn btn-floating btn-large blue lighten-3" v-on:click="login"><i class="material-icons">brightness_1</i></a>
                    </div>                    
                </div>
                <p>You don't have an account ? You can create one <router-link to="/sign-up">create one</router-link></p>
            </div>
            <div class="col m4">

            </div>
        </div>
        
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
                        this.$router.replace('home')
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
        background-color: white;
        border: 5px solid grey;
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

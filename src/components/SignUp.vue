<template>
    <div >
    <div class="row">
        <div class="col m4"></div>
        <div class="col m4" id="sign-up">
            <div class="card z-depth-2" style="padding: 40px;">
                <h3>Register</h3>
                <div class="row">
                    <div class="col m2"></div>
                    <div class="col m8">
                        <input type="text" v-model="email" placeholder="Email">
                        <input type="password" v-model="password" placeholder="Password">
                    </div>
                    <div class="col m2"></div>
                    <div class="col m12" style="margin-top: 20px">
                        <a class="button is-rounded blue lighten-3 btn-large" v-on:click="signUp">sign up</a>
                    </div>   
                </div>
                <p>or go back to <router-link to="/login">login</router-link></p>
            </div>
        </div>
        <div class="col m4"></div>
    </div>
    </div>
</template>

<script>
    import firebase from 'firebase'
    export default {
        name: 'SignUp',
        data: function() {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            signUp: function () {
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                    function (user) {
                        alert('Your account has been created')
                        this.$router.replace('login')
                    },
                    function (err) {
                        alert('Oops. ' + err.message)
                    }
                );
            }
        }
    }
</script>

<style scoped>
    #sign-up {
        margin-top: 40px;
        background-color: white;
        margin-top: 30vh;
    }
    input {
        margin: 10px 0;
        width: 20%;
        padding: 15px;
    }
    button {
        margin-top: 10px;
        width: 10%;
        cursor: pointer;
    }
    span {
        display: block;
        margin-top: 20px;
        font-size: 11px;
    }
    
</style>
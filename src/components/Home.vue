<template>
  <div class="home">
    <div class="row grey lighten-1" style="margin:0">
        <a href="#" v-on:click="logout" class="wave-light wave-effect">
          <div class="right">
            <span ><i class="material-icons white-text" style="font-size: 50px; margin-top:5px;">exit_to_app</i></span>
          </div>
        </a>
    </div>
    <nav>
      <div class="nav-wrapper grey darken-3">
        <ul class="right hide-on-med-and-down">
          <li class="active"><a class="menu" href="/#/home">Home</a></li>
          <li><a class="menu" href="/#/weather">Weather</a></li>
          <li><a class="menu" href="/#/map">Map</a></li>
          <li><a class="menu" href="/#/hello">Contact Us</a></li>
        </ul>
      </div>
    </nav>
    <div class="center">
      <h1 style="margin-top:40vh">Welcome</h1>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'Home',
  data: function() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    logout: function () {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h5 {
  font-weight: normal;
}
.block {
  border: white 2px solid; 
}
.menu:hover{
  color: white;
}
a{
  font-size: 30px;
}
.active a{
  font-weight: bold;
}
</style>

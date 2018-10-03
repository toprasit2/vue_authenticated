<template>
  <div class="home">
    <div class="row">
        <a href="/#/hello" class="wave-light wave-effect">
          <div class="col m4 light-blue accent-1 block" style="height: 50vh;">
            <span ><i class="material-icons blue-text text-darken-3" style="font-size: 250px; margin-top:100px;">account_circle</i></span>
            <h1 class="blue-text text-darken-3">My Group</h1>
          </div>
        </a>
        <a href="/#/weather" class="wave-light wave-effect">
          <div class="col m4 light-blue accent-2 block" style="height: 50vh;">
            <span ><i class="material-icons blue-text text-darken-3" style="font-size: 250px; margin-top:100px;">cloud</i></span>
            <h1 class="blue-text text-darken-3">Weather</h1>
          </div>
        </a>
        <a href="/#/map" class="wave-light wave-effect">
          <div class="col m4 light-blue accent-3 block" style="height: 50vh;">
            <span ><i class="material-icons blue-text text-darken-3" style="font-size: 250px; margin-top:100px;">map</i></span>
            <h1 class="blue-text text-darken-3">Map</h1>
          </div>
        </a>
        <a href="http://www.coe.psu.ac.th/2018/" class="wave-light wave-effect">
          <div class="col m4 light-blue lighten-3 block" style="height: 50vh;">
            <span ><img src="https://www.coe.phuket.psu.ac.th/images/logo/LogoCoe.gif" height="400px" style="margin-top:100px;"></span>
            <h1 class="blue-text text-darken-3">CoE</h1>
          </div>
        </a>
        
        <a href="http://www.psu.ac.th/" class="wave-light wave-effect">
          <div class="col m4 light-blue lighten-2 block" style="height: 50vh;">
            <span ><img src="https://www.computing.psu.ac.th/th/wp-content/uploads/2018/03/Logo-PSU-TH-01.png" height="380px" style="margin-top:50px;"></span>
          </div>
        </a>
        <a href="#" v-on:click="logout" class="wave-light wave-effect">
          <div class="col m4 light-blue lighten-1 block" style="height: 50vh;">
            <span ><i class="material-icons blue-text text-darken-3" style="font-size: 250px; margin-top:100px;">exit_to_app</i></span>
            <h1 class="blue-text text-darken-3">Logout</h1>
          </div>
        </a>
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
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.block {
  border: white 2px solid; 
}
</style>

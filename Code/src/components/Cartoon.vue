<template>
  <div class="home">
    <div class="row grey lighten-1" style="margin:0">
        <a href="#" v-on:click="logout" class="wave-light wave-effect">
          <div class="right">
            <i class="material-icons white-text" style="font-size: 50px; margin-top:8px;">exit_to_app</i>
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
        <h1 style="">Hello Cartoon</h1>
        <article v-for="(location, idx) in locations" :key="idx">
            <img :src="location.url">
            <h1>{{ location.name }}</h1>
        </article>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import { db } from '../main'
import { compare } from 'semver';
export default {
  name: 'Cartoon',
  data: function() {
    return {
        locations: [],
        msg: 'Welcome to Your Vue.js App',
        user: firebase.auth().currentUser
    }
  },
  firestore () {
    return {
      locations: db.collection("cartoon")
                   .orderBy("name", "asc")
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

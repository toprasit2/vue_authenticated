<template>

  <div class="hello">
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
          <li><a class="menu" href="/#/home">Home</a></li>
          <li><a class="menu" href="/#/weather">Weather</a></li>
          <li><a class="menu" href="/#/map">Map</a></li>
          <li class="active"><a class="menu" href="/#/hello">Contact Us</a></li>
        </ul>
      </div>
    </nav>
    <div class="row">
      
      <div class="col m4">
        <div class="card">
          <div class="card-image">
            <img src="https://scontent.fbkk14-1.fna.fbcdn.net/v/t1.0-9/13179432_1072810349458454_3014148935445179896_n.jpg?_nc_cat=101&oh=33b37e312424a3cda13f8943e734a860&oe=5C58D541"
            style="height:65vh"
            />
          </div>
          <div class="card-content">
            <h5><span class="left">Arm</span>Teetawat Riya <span class="right">5810110160</span></h5>
          </div>
        </div>
      </div>
      <div class="col m4">
        <div class="card">
          <div class="card-image">
            <img src="https://scontent.fbkk14-1.fna.fbcdn.net/v/t1.0-9/482966_508036145892041_2143320946_n.jpg?_nc_cat=103&oh=16c79f0e2afb240ec5df9d74819ad316&oe=5C5D25E1"
            style="height:65vh;"
            />
          </div>
          <div class="card-content">
            <h5><span class="left">Toh</span>Chalerm Sae-wang <span class="right">5810110058</span></h5>
          </div>
        </div>
      </div>  
      <div class="col m4">
        <div class="card">
          <div class="card-image">
            <img src="https://scontent.fbkk14-1.fna.fbcdn.net/v/t1.0-9/21766772_1474132312667117_8807724213492104882_n.jpg?_nc_cat=108&oh=f1186dc8171c87ed3f724c56d5ed3b04&oe=5C557410"
            style="height: 65vh"
            />
          </div>
          <div class="card-content">
            <h5><span class="left">Geng</span>Thanaphon Toprasit <span class="right">5810110451</span></h5>
          </div>
        </div>
      </div>
    </div>
    <button class="button is-rounded red lighten-3 btn-large" v-on:click="logout">Logout</button>
  </div>
  
</template>

<script>
import firebase from 'firebase'
import GoogleMap from './GoogleMap'
export default {
  name: 'HelloWorld',
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
  },
  components: {
    'GoogleMap': GoogleMap,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  background-color: aliceblue;
  height: 100vh;
}
.menu:hover{
  color: white;
}
.active a{
  font-weight: bold;
}
a{
  font-size: 30px;
}
</style>

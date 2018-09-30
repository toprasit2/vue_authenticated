<template>

  <div class="hello">
    <div class="row"><a href="/#/home" class="left"><i class="material-icons" style="font-size:50px">arrow_back</i></a></div>

    <div class="row">
      
      <div class="col m4">
        <div class="card">
          <div class="card-image">
            <img src="https://scontent.fbkk14-1.fna.fbcdn.net/v/t1.0-9/13179432_1072810349458454_3014148935445179896_n.jpg?_nc_cat=101&oh=33b37e312424a3cda13f8943e734a860&oe=5C58D541"
            style="height:65vh"
            />
          </div>
          <div class="card-content">
            <h5>Arm || Teetawat Riya || 5810110160</h5>
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
            <h5>Toh || Chalerm Sae-wang || 5810110</h5>
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
            <h5>Geng || Thanaphon Toprasit || 5810110451</h5>
          </div>
        </div>
      </div>
    </div>
    <button class="btn" v-on:click="logout">Logout</button>
  </div>
</template>

<script>
import firebase from 'firebase'
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  background-color: aliceblue;
  height: 100vh;
}
</style>

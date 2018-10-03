<template>
  <div class="map">
    <div class="row grey lighten-1" style="margin:0">
        <a href="#" v-on:click="logout" class="wave-light wave-effect">
          <div class="right">
            <i class="material-icons white-text" style="font-size: 50px; margin-top:5px;">exit_to_app</i>
          </div>
        </a>
    </div>
    <nav>
      <div class="nav-wrapper grey darken-3">
        <ul class="right hide-on-med-and-down">
          <li><a class="menu" href="/#/home">Home</a></li>
          <li><a class="menu" href="/#/weather">Weather</a></li>
          <li class="active"><a class="menu" href="/#/map">Map</a></li>
          <li><a class="menu" href="/#/hello">Contact Us</a></li>
        </ul>
      </div>
    </nav>
    <div class="center" style="padding-top:15vh;">
        <gmap-map
        :center="center"
        :zoom="17"
        style="width:50vw;  height: 60vh; margin-left: 25%;"
        >
        <gmap-marker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            @click="center=m.position"
        ></gmap-marker>
        </gmap-map>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      center: { lat: 7.007430, lng: 100.502060 },
      markers: [],
      places: [],
      currentPlace: null
    };
  },

  mounted() {
    this.geolocate();
  },

  methods: {
    // receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place;
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    },
    logout: function () {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    }
  }
};
</script>

<style scoped>
.map {
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

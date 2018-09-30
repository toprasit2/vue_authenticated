<template>
  <div class="map">
    <div class="row"><a href="/#/home" class="left"><i class="material-icons" style="font-size:50px">arrow_back</i></a></div>
    <div class="row">
        <div class="col m4"></div>
        <div class="col m4">
            <h2>Search and add a pin</h2>
            <label>
                <gmap-autocomplete
                @place_changed="setPlace">
                </gmap-autocomplete>
                <a class="btn" @click="addMarker">Add</a>
            </label>
        </div>
        <div class="col m4"></div>
    </div>
    <div class="center">
        <gmap-map
        :center="center"
        :zoom="17"
        style="width:80%;  height: 75vh; margin-left: 10%;"
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
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  }
};
</script>

<style scoped>
    .map {
        background-color: aliceblue
    }
</style>

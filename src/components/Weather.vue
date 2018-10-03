<template>
  <div class="weather">
    <div class="row grey lighten-1" style="margin:0">
        <a href="#" v-on:click="logout" class="wave-light wave-effect">
          <div class="right">
            <span ><i class="material-icons white-text" style="font-size: 50px; margin-top:5px">exit_to_app</i></span>
          </div>
        </a>
    </div>
    <nav>
      <div class="nav-wrapper grey darken-3">
        <ul class="right hide-on-med-and-down">
          <li><a class="menu" href="/#/home">Home</a></li>
          <li class="active"><a class="menu" href="/#/weather">Weather</a></li>
          <li><a class="menu" href="/#/map">Map</a></li>
          <li><a class="menu" href="/#/hello">Contact Us</a></li>
        </ul>
      </div>
    </nav>
    <div class="my-5">
          <form v-on:submit.prevent="getData">
            <div class="row">
              <div class="col m3"></div>
              <div class="col m6">
                <h5>Enter A City In Thailand:</h5>
                <div class="input-group">
                  <input type="text" class="form-control" v-model="city">
                  <div class="input-group-append">
                    <button class="button is-rounded green lighten-3 wave-light wave-effect btn-large" type="submit">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="my-5">
          <div class="alert alert-info" v-show="loading">
            Loading...
          </div>
          <div class="row">
            <div class="col m2"></div>
            <div class="col m8">
              <div v-show="chart != null">
                <canvas id="myChart"></canvas>
              </div>
            </div>
            <div class="col m2"></div>
          </div>
          
        </div>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'Weather',
  data: function() {
    return {
        chart: null,
        city: "songkhla",
        dates: [],
        temps: [],
        loading: false,
        errored: false
    }
  },
  methods: {
    getData: function() {
      this.loading = true;

      if (this.chart != null) {
        this.chart.destroy();
      }

      axios
        .get("https://api.openweathermap.org/data/2.5/forecast", {
          params: {
            q: this.city,
            units: "imperial",
            appid: "fd3150a661c1ddc90d3aefdec0400de4"
          }
        })
        .then(response => {
          this.dates = response.data.list.map(list => {
            return list.dt_txt;
          });

          this.temps = response.data.list.map(list => {
            return (list.main.temp-32)*5/9;
          });

          var ctx = document.getElementById("myChart");
          this.chart = new Chart(ctx, {
            type: "line",
            data: {
              labels: this.dates,
              datasets: [
                {
                  label: "Avg. Temp",
                  backgroundColor: "rgba(54, 162, 235, 0.5)",
                  borderColor: "rgb(54, 162, 235)",
                  fill: false,
                  data: this.temps
                }
              ]
            },
            options: {
              title: {
                display: true,
                text: "Temperature with Chart.js"
              },
              tooltips: {
                callbacks: {
                  label: function(tooltipItem, data) {
                    var label =
                      data.datasets[tooltipItem.datasetIndex].label || "";

                    if (label) {
                      label += ": ";
                    }

                    label += Math.floor(tooltipItem.yLabel);
                    return label + "°C";
                  }
                }
              },
              scales: {
                xAxes: [
                  {
                    type: "time",
                    time: {
                      unit: "hour",
                      displayFormats: {
                        hour: "M/DD @ hA"
                      },
                      tooltipFormat: "MMM. DD @ hA"
                    },
                    scaleLabel: {
                      display: true,
                      labelString: "Date/Time"
                    }
                  }
                ],
                yAxes: [
                  {
                    scaleLabel: {
                      display: true,
                      labelString: "Temperature (°C)"
                    },
                    ticks: {
                      callback: function(value, index, values) {
                        return value + "°C";
                      }
                    }
                  }
                ]
              }
            }
          });
        })
        .catch(error => {
          console.log(error);
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    },
    ready() {
        this.getData()
    },
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

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

require('../node_modules/jquery/dist/jquery.min.js')
require('../node_modules/bulma/css/bulma.min.css')
require('../node_modules/materialize-css/dist/css/materialize.min.css')
require('../node_modules/materialize-css/dist/js/materialize.min.js')
import Vue from 'vue'
import App from './App'
import router from './router'

import * as VueGoogleMaps from "vue2-google-maps";
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDnOfvmyBs_vIXvKhH7zHGRCuDZdgVgKvU",
    libraries: "places" // necessary for places input
  }
});

Vue.config.productionTip = false

import VueFire from 'vuefire'
import firebase from 'firebase'
import 'firebase/firestore'
Vue.use(VueFire)
let app;
var config = {
  apiKey: "AIzaSyAZJzxWDMFiMQcDg29zbztSUYJ_oCVhR-E",
  authDomain: "vue-firebase-web-app-class.firebaseapp.com",
  databaseURL: "https://vue-firebase-web-app-class.firebaseio.com",
  projectId: "vue-firebase-web-app-class",
  storageBucket: "vue-firebase-web-app-class.appspot.com",
  messagingSenderId: "12632953123"
};
firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(() => {
  if (!app){
    app = new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
  }
})
export const db = firebase.firestore()
/* eslint-disable no-new */


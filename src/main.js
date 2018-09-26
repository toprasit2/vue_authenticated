// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

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
/* eslint-disable no-new */


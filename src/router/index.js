import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Weather from '@/components/Weather'
import Home from '@/components/Home'
import GoogleMap from '@/components/GoogleMap'

import Login from '@/components/Login'
import SignUp from "@/components/SignUp";

import firebase from 'firebase';

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/weather',
      name: 'Weather',
      component: Weather,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/map',
      name: 'GoogleMap',
      component: GoogleMap,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    }
  ]
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser;
  let requireAuth = to.matched.some(record => record.meta.requireAuth);

  if(requireAuth && !currentUser) next('login')
  else if(!requireAuth && currentUser) next('home')
  else next()
})

export default router
<template>
  <div class="admin">

    <h1>GASTROINNOVA DASHBOARD</h1>
    
    <div v-if="auth" style="position:relative; top: -3.5em; float:right; padding:1em; margin:1em; background-color: #e8e8e8; border-radius: 0.5em; cursor:pointer; " @click="onLogout">
      <i class="fas fa-sign-out-alt" style="font-size:1.5em; display:inline-block; vertical-align:middle"></i>
      <span style="display:inline-block; vertical-align:middle; position: relative; top: 1px;">CERRAR SESIÓN</span>
    </div>

    <b-container class="bv-example-row" v-if="!auth" style="width:300px">
      <b-form @submit="onSubmit">
        <b-form-input type="email" v-model="form.email" required placeholder="Enter email"/>
      <br>
        <b-form-input type="password" v-model="form.password" required placeholder="Enter Password"/>
      <br>
        <input type="submit" value="SUBMIT" style="padding:1em; background-color: #eaeaea; margin:1em; border-radius:0.25em;">

      </b-form>
    </b-container>

    <b-container class="bv-example-row" v-if="auth">
        <b-row>
            <b-col cols="3">
              <b-list-group>
                <b-list-group-item href="#" @click="setMenu('slider')">Slider</b-list-group-item>
                <hr>
                <b-list-group-item href="#" @click="setMenu('news')">Noticias</b-list-group-item>
                <hr>
                <b-list-group-item href="#" @click="setMenu('mission_vision')">Misión y Visión</b-list-group-item>
                <b-list-group-item href="#" @click="setMenu('history')">Historia</b-list-group-item>
                <b-list-group-item href="#" @click="setMenu('our_people')">Nuestra Gente</b-list-group-item>
                <hr>
                <b-list-group-item href="#" @click="setMenu('dlz')">Dlz</b-list-group-item>
                <b-list-group-item href="#" @click="setMenu('ready_meals')">Ready Meals</b-list-group-item>
                <b-list-group-item href="#" @click="setMenu('start_ups')">Start Ups</b-list-group-item>
                <hr>
                <b-list-group-item href="#" @click="setMenu('stats')">Estadisticas</b-list-group-item>
                <hr>
                <b-list-group-item href="#" @click="setMenu('clients')">Clientes</b-list-group-item>
                <hr>
                <b-list-group-item href="#" @click="setMenu('contact')">Contactos</b-list-group-item>
                <br>
                 <b-list-group-item href="#" @click="setMenu('terms')">Terminos y Condiciones</b-list-group-item>
                <br>
                <hr>
              </b-list-group>
            </b-col>
            <b-col cols="9">
              
              <div class="" v-if="tab=='slider'">
                <admin-slider></admin-slider>
              </div>
              <div class="" v-if="tab=='news'">
                <admin-news></admin-news>
              </div>
              <div class="" v-if="tab=='mission_vision'">
                <admin-mission-vision></admin-mission-vision>
              </div>
              <div class="" v-if="tab=='history'">
                <admin-history></admin-history>
              </div>
              <div class="" v-if="tab=='our_people'">
                <admin-our-people></admin-our-people>
              </div>
              <div class="" v-if="tab=='dlz'">
                <admin-dlz></admin-dlz>
              </div>
              <div class="" v-if="tab=='ready_meals'">
                 <admin-ready-meals></admin-ready-meals>
              </div>
              <div class="" v-if="tab=='start_ups'">
                 <admin-start-ups></admin-start-ups>
              </div>
              <div class="" v-if="tab=='stats'">
                 <admin-stats></admin-stats>
              </div>
              <div class="" v-if="tab=='clients'">
                <admin-clients></admin-clients>
              </div>
              <div class="" v-if="tab=='contact'">
                <admin-contact></admin-contact>
              </div>
              <div class="" v-if="tab=='terms'">
                <admin-terms></admin-terms>
              </div>
            </b-col>
        </b-row>
    </b-container>

   
  </div>
</template>

<script>

import firebase from 'firebase';
import * as firebaseui from 'firebaseui'

import UploadImage from 'vue-upload-image';
import 'vue-datetime/dist/vue-datetime.css'

import admin_slider from "../components/admin/admin_slider";
import admin_news from "../components/admin/admin_news";
import admin_mission_vision from "../components/admin/admin_missioAndVission";
import admin_history from "../components/admin/admin_history";
import admin_our_people from "../components/admin/admin_our_people";
import admin_dlz from "../components/admin/admin_dlz";
import admin_ready_meals from "../components/admin/admin_ready_meals";
import admin_start_ups from "../components/admin/admin_start_ups";
import admin_stats from "../components/admin/admin_stats";
import admin_clients from "../components/admin/admin_clients";
import admin_contact from "../components/admin/admin_contact";
import admin_terms from "../components/admin/admin_terms";


export default {
  
  name: 'vAdmin',

  components: {
    'admin-slider': admin_slider,
    'admin-news': admin_news,
    'admin-mission-vision' : admin_mission_vision,
    'admin-history' : admin_history,
    'admin-our-people' : admin_our_people,
    'admin-dlz' : admin_dlz,
    'admin-ready-meals' : admin_ready_meals,
    'admin-start-ups' : admin_start_ups,
    'admin-clients' : admin_clients,
    'admin-contact' : admin_contact,
    'admin-terms' : admin_terms
  },

  created () {
    this.initAuth();
  },

  methods: {
    
    setMenu(tab_name){
      this.tab = tab_name;
    },

    initAuth(){

    },

    onSubmit (evt) {
      evt.preventDefault();
      firebase.auth().signInWithEmailAndPassword(this.form.email,this.form.password)
      .then( response => {
        this.auth = true;
      })
      .catch( error => {
        this.auth = false;
      })
    },

    onLogout(){
      firebase.auth().signOut()
      .then( response => {
        this.auth = false;
      })
      .catch( error => {
        this.auth = true;
      });
    }

  },


  data(){
    return{
      auth: false,
      tab: 'slider',
      news: [],
      form: {
        email: '',
        password: ''
      },
      foods: [
        { text: 'Select One', value: null },
        'Carrots', 'Beans', 'Tomatoes', 'Corn'
      ],
      show: true
    }
  }


}
</script>

<style>
ul{
  list-style: none;
  padding: 0px;
  margin: 0px;
}
</style>
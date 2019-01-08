<template>
  <div class="header-component">

    <div class="desktop">
      <header>
        <div class="wrapper">
          
          <router-link to="/">
            <img class="logo" src="./../assets/header/gi-header-logo.png">
          </router-link>
          
          <ul class="pages">

            <li v-bind:class="{ hover: MENU.about }"
                  @mouseenter="setMenuHover('about',true)" 
                  @mouseleave="setMenuHover('about',false)">

              <div class="link-title">
                <img src="../assets/header/gi-header-div.png">
                <router-link to="/about">NOSOTROS</router-link>
                </div>
              <div class="link-sublinks">
                <div class="link-sublink"><router-link to="/about/mission">MISIÓN Y VISIÓN</router-link></div>
                <div class="link-sublink"><router-link to="/about/history">HISTORIA</router-link></div>
                <div class="link-sublink"><router-link to="/about/ourpeople">NUESTRA GENTE</router-link></div>
              </div>
            </li>

            <li  v-bind:class="{ hover: MENU.business }"
                  @mouseenter="setMenuHover('business',true)" 
                  @mouseleave="setMenuHover('business',false)">
              <div class="link-title">
                <img src="../assets/header/gi-header-div.png">
                <router-link to="/business">LÍNEAS DE NEGOCIO</router-link>
                </div>
              <div class="link-sublinks">
                <div class="link-sublink"><router-link to="/bussines/dlz">DLZ</router-link></div>
                <div class="link-sublink"><router-link to="/bussines/ready_meals">READY MEALS</router-link></div>
                <div class="link-sublink"><router-link to="/bussines/start_ups">START-UPS GASTRONÓMICAS</router-link></div>
              </div>
            </li>

            <li   v-bind:class="{ hover: MENU.info }"
                  @mouseenter="setMenuHover('info',true)" 
                  @mouseleave="setMenuHover('info',false)">
              <div class="link-title">
                <img src="../assets/header/gi-header-div.png">
                <router-link to="/info">INFORMACIÓN FINANCIERA</router-link>
                </div>
              <div class="link-sublinks">
                <div class="link-sublink"><router-link to="/info/market_size">TAMAÑO DEL MERCADO</router-link></div>
                <div class="link-sublink"><router-link to="/info/market_evolution">EVOLUCIÓN DEL MERCADO</router-link></div>
                <div class="link-sublink"><router-link to="/info/market_projections">PROYECCIONES DEL MERCADO</router-link></div>
              </div>
            </li>

            <li   v-bind:class="{ hover: MENU.clients }"
                  @mouseenter="setMenuHover('clients',true)" 
                  @mouseleave="setMenuHover('clients',false)">
              <div class="link-title">
                <img src="../assets/header/gi-header-div.png">
                <router-link to="/clients">CLIENTES</router-link>
                </div>
            </li>

            <li   v-bind:class="{ hover: MENU.contact }"
                  @mouseenter="setMenuHover('contact',true)" 
                  @mouseleave="setMenuHover('contact',false)">
              <div class="link-title">
                <img src="../assets/header/gi-header-div.png">
                <router-link to="/contact">CONTACTO</router-link>
                </div>
            </li>

          </ul>

        </div>
      </header>
    </div>

    <div class="mobile">
      <header v-bind:style= "[!isActive ? {'height':'4em'} : {'height':'20em'}]">

        <div class="row logoAndButton">

          <router-link to="/">
            <img class="logo" src="./../assets/header/gi-header-logo.png" @click="isActive = false">
          </router-link>

          <burger-button
              :active="isActive"
              :bar-color="isActive ? 'gray' : 'gray'"
              :bar-height="4"
              :bar-width="30"
              @click="isActive = !isActive"/>

        </div>

        <div class="row">

          <ul class="links" v-if="isActive">
            <li @click="isActive = !isActive">
              <router-link to="/about">NOSOTROS</router-link>
            </li>
            <li @click="isActive = !isActive">
              <router-link to="/business">LÍNEAS DE NEGOCIO</router-link>
            </li>
            <li @click="isActive = !isActive">
              <router-link to="/info">INFORMACIÓN FINANCIERA</router-link>
            </li>
            <li @click="isActive = !isActive">
              <router-link to="/clients">CLIENTES</router-link>
            </li>
            <li @click="isActive = !isActive">
              <router-link to="/contact">CONTACTO</router-link>
            </li>
          </ul>

        </div>

      </header>
    </div>

  </div>
</template>

<script>

import BurgerButton from 'vue-burger-button';

export default {
  name: 'vHeader',
  components: { BurgerButton },
  methods:{
    setMenuHover(tag,state){
      this.MENU[tag] = state;
    }
  },
  data(){
    return{
      isActive: false,
      MENU:{
        about: false,
        business: false,
        info: false,
        clients: false,
        contact: false
      }
    }
  }
}
</script>
<style src="vue-burger-button/dist/vue-burger-button.css"></style>
<style scoped lang="less">

.mobile{
  .row,ul{
    padding: 0px;
    margin: 0px;
    list-style-type: none;
  }
  header{
    height: 4em;
    z-index: 100;
    -webkit-transition: height 0.5s ease-in-out;
    -moz-transition: height 0.5s ease-in-out;
    -ms-transition: height 0.5s ease-in-out;
    -o-transition: height 0.5s ease-in-out;
    transition: height 0.5s ease-in-out;
    a{
      display:inline-block;
      width: auto;
      height: auto;
    }
    .logo{
      width: 5.5em;
      padding: 1em;
      padding-left: 2em;
    }

display: block;

    .row{
      width: 100vw;
      z-index: 100;
      &:last-child{
        z-index: 50
      }
    }

  }

  .logoAndButton{

    width: 100vw;;

    border-bottom: 1px solid green;
   
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: nowrap;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-align-content: center;
    -ms-flex-line-pack: center;
    align-content: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    button{
      position: relative;
      left: -2em;
      outline: none;
    }
  }

  .links{
    width: 100vw;
  }
  .links li{
    width: 100vw;
    margin:1.25em auto;
    text-align: center;
    a{
      color: black;
    }
  }
}


.desktop{
    a {
          text-decoration:none !important;
      }
    header{
      display: block;
      height: 64.625px;

      z-index: 200;

      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-flex-direction: row;
      -ms-flex-direction: row;
      flex-direction: row;
      -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
      justify-content: space-between;
      -webkit-align-content: center;
      -ms-flex-line-pack: center;
      align-content: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;

      border-bottom: 1px solid green;

    }
    header .wrapper{

      width: 100%;
      max-width: 1200px;
      height: 44.625px;
      margin: 0 auto;
      padding: 10px auto;

      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-flex-direction: row;
      -ms-flex-direction: row;
      flex-direction: row;
      -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
      justify-content: space-between;
      -webkit-align-content: center;
      -ms-flex-line-pack: center;
      align-content: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;

      img.logo{
        width: 80px;
        padding: 10px;
      }

      ul.pages{
        display: inline-block;
        vertical-align: middle;
        margin-top: 0;
        margin-bottom: 0px;
        li{
          max-width: 10em;
          display: inline-block;
          vertical-align: middle;
        }
      }

    }
    header ul.pages {
      z-index: 100;
    }
    header ul.pages li{
      display: block;
      height: 64.625px;
      width: fit-content;
      min-width: 10em;;
      .link-title{
        position: relative;
        display: block;
        height: 64.625px;
      
        background-color: white;
        z-index: 200;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-align-content: center;
        -ms-flex-line-pack: center;
        align-content: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        a{
            max-width: 8em;
        }
        a{color: black;}
        img{
          width: 10px;
          box-sizing: content-box;
          padding-right:10px;
              position: relative;
    left: 0.0em;
    top: 0.0em;
          -webkit-transition: all 150ms linear;
-moz-transition: all 150ms linear;
-ms-transition: all 150ms linear;
-o-transition: all 150ms linear;
transition: all 150ms linear;
        }

      }
      &.hover{
        .link-title img{
              position: relative;
    left: -0.5em;
    top: 0.25em;

          -moz-transform: rotate(90deg);
-webkit-transform: rotate(90deg);
-o-transform: rotate(90deg);
-ms-transform: rotate(90deg);
transform: rotate(90deg);
        }
      }
      .link-sublinks{
        z-index: 100;
        position: relative;
        display: block;
        top: -20em;
        left: 1em;
        .link-sublink{
          background-color: white;
          padding: 1em 0.5em;
          &:hover{
            background-color: orange;
            text-decoration: none;
            a{color: white;}
          }
          a{
            color: black;
          }
        }
      }
    }
    header ul.pages li.hover{
      .link-sublinks{
        top: 0em;
      }
    }
}


.mobile{
  display: block;
}
.desktop{
  display: none;
}
@media (min-width: 800px) {
  .mobile{
    display: none;
  }
  .desktop{
    display: block;
  }
}
</style>

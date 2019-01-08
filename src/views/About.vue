<script>

import VueScrollTo from 'vue-scrollto';

import vMission from '../views/sections_about/mission'
import vHistory from '../views/sections_about/history'
import vOurPeople from '../views/sections_about/ourpeople'


export default {
  name: 'vAbout',

  props:{
    scrollToId: String
  },

  components:{
    vMission,
    vHistory,
    vOurPeople
  },

  // Component's created function.
  mounted () {
    this.updateScrollToId();
  },

  methods: {

    updateScrollToId(){
       if(this.scrollToId == 'mission'){
          this.sections[0].hover = true;
          setTimeout( () => {VueScrollTo.scrollTo('#about-mission');},500);
        }else{
          this.sections[0].hover = false;
        }
        if(this.scrollToId == 'history'){
          this.sections[0].hover = true;
          this.sections[1].hover = true;
          setTimeout( () => {VueScrollTo.scrollTo('#about-history');},500);
        }else{
          this.sections[1].hover = false;
        }
        if(this.scrollToId == 'ourpeople'){
          this.sections[0].hover = true;
          this.sections[1].hover = true;
          this.sections[2].hover = true;
          setTimeout( () => {VueScrollTo.scrollTo('#about-ourpeople');},500);
        }else{
          this.sections[2].hover = false;
        }
    },

    mSectionDisplayToogle(id){
      if( this.sections[id].ui.displayClass == 'display-normal'){
        this.sections[id].ui.displayClass = 'display-hide';
        this.sections[id].hover = false;
      }else{
        this.sections[id].ui.displayClass = 'display-normal';
        this.sections[id].hover = true;
      }
    }

  },


  watch: { 
      	scrollToId: function(newVal, oldVal) {
          this.updateScrollToId();
        }
  },

  // Component's Attributes or data object.
  data () {
    return{
      banner:{
        src :'/img/banners/banner_about.jpg',
        title : 'Nosotros'
      },
      sections: [
        {
          id: 0,
          hover: false,
          title: 'Misión y Visión _',
          ui:{
            colorClass:'color-yellow',
            displayClass: 'display-normal', 
          },
          content: vMission
        },{
          id: 1,
          hover : false,
          title: 'Historia ______',
          ui:{
            colorClass:'color-green',
            displayClass: 'display-normal', 
          },
          content: vHistory
        },{
          id: 2,
          hover: false,
          title: 'Nuestra Gente _',
          ui:{
            colorClass:'color-yellow',
            displayClass: 'display-normal', 
          },
          content: vOurPeople
        },
      ]
    }
  }
}
</script>

<template>
  <div class="view about">
    
    <div class="view-banner">
      <div class="image"><img :src="banner.src"></div>
      <div class="title">
          <div class="wrapper">
            <h1> {{ banner.title }}</h1>
          </div>
      </div>
    </div>

    <div class="view-content">

      <section  v-for="section in sections" v-bind:key="section.id" 
                class="section about" :class="[ section.ui.colorClass , section.ui.displayClass ]">
        
        <div class="section-header">
          <div class="wrapper"  @click="mSectionDisplayToogle(section.id)">
            <img class="div-icon div-icon-green" src="./../assets/gi-cards-div.png" alt="" v-if="section.ui.colorClass=='color-yellow'">
            <img class="div-icon div-icon-yellow" src="./../assets/gi-cards-div-y.png" alt="" v-if="section.ui.colorClass=='color-green'">
            <h2 class="div-title"> {{section.title}} </h2>
          </div>
        </div>

        <div class="section-content">
          <div class="wrapper">
            <component :is="section.content" :data="section.content" v-if="section.hover"/>
          </div>
        </div>

      </section>

    </div>
    

  </div>
</template>

<style lang="less">
/* ----------------------------------------------------------- 
 //  View :: About.vue 
 //  
 //
 ------------------------------------------------------------- */
    @import (reference) '../styles/main.less';

</style>

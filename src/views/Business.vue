<script>
import VueScrollTo from "vue-scrollto";

import vDlz from "../views/sections_business/dlz";
import vReadyMeals from "../views/sections_business/ready_meals";
import vStartUps from "../views/sections_business/start_ups";

export default {
  name: "vBusiness",

  props: {
    scrollToId: String
  },

  components: {
    vDlz,
    vReadyMeals,
    vStartUps
  },

  // Component's created function.
  mounted() {
    this.sections[0].ui.displayClass = "display-hide";
    this.sections[1].ui.displayClass = "display-hide";
    this.sections[2].ui.displayClass = "display-hide";
    this.updateScrollToId();
  },

  methods: {
    updateScrollToId() {
      if (this.scrollToId == "dlz") {
        this.sections[0].hover = true;
        this.sections[0].ui.displayClass = "display-normal";
        this.sections[1].ui.displayClass = "display-hide";
        this.sections[2].ui.displayClass = "display-hide";
        setTimeout(() => {
          VueScrollTo.scrollTo("#business-dlz");
        }, 500);
      } else {
        this.sections[0].hover = false;
      }
      if (this.scrollToId == "ready_meals") {
        this.sections[0].hover = true;
        this.sections[1].hover = true;
        this.sections[0].ui.displayClass = "display-normal";
        this.sections[1].ui.displayClass = "display-normal";
        this.sections[2].ui.displayClass = "display-hide";
        setTimeout(() => {
          VueScrollTo.scrollTo("#business-ready-meals");
        }, 500);
      } else {
        this.sections[1].hover = false;
      }
      if (this.scrollToId == "start_up") {
        this.sections[0].hover = true;
        this.sections[1].hover = true;
        this.sections[2].hover = true;
        this.sections[0].ui.displayClass = "display-normal";
        this.sections[1].ui.displayClass = "display-normal";
        this.sections[2].ui.displayClass = "display-normal";
        setTimeout(() => {
          VueScrollTo.scrollTo("#business-start-ups");
        }, 500);
      } else {
        this.sections[2].hover = false;
      }
    },

    mSectionDisplayToogle(id) {
      if (this.sections[id].ui.displayClass == "display-normal") {
        this.sections[id].ui.displayClass = "display-hide";
        this.sections[id].hover = false;
      } else {
        this.sections[id].ui.displayClass = "display-normal";
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
  data() {
    return {
      banner: {
        src: "/img/banners/banner_about.jpg",
        title: "Nosotros"
      },
      sections: [
        {
          id: 0,
          hover: false,
          title: "DLZ",
          ui: {
            colorClass: "color-yellow",
            displayClass: "display-normal"
          },
          content: vDlz
        },
        {
          id: 1,
          hover: false,
          title: "Ready Meals",
          ui: {
            colorClass: "color-green",
            displayClass: "display-normal"
          },
          content: vReadyMeals
        },
        {
          id: 2,
          hover: false,
          title: "Start Ups",
          ui: {
            colorClass: "color-yellow",
            displayClass: "display-normal"
          },
          content: vStartUps
        }
      ]
    };
  }
};
</script>

<template>
  <div class="view business">
    <div class="view-banner">
      <div class="image">
        <img :src="banner.src">
      </div>
      <div class="title">
        <div class="wrapper">
          <h1>{{ banner.title }}</h1>
        </div>
      </div>
    </div>

    <div class="view-content">
      <section
        v-for="section in sections"
        v-bind:key="section.id"
        class="section business"
        :class="[ section.ui.colorClass , section.ui.displayClass ]"
      >
        <div class="section-header">
          <div class="wrapper" @click="mSectionDisplayToogle(section.id)">
            <img
              class="div-icon div-icon-green"
              src="./../assets/gi-cards-div.png"
              alt
              v-if="section.ui.colorClass=='color-yellow'"
            >
            <img
              class="div-icon div-icon-yellow"
              src="./../assets/gi-cards-div-y.png"
              alt
              v-if="section.ui.colorClass=='color-green'"
            >
            <h2 class="div-title">{{section.title}}</h2>
          </div>
        </div>

        <div class="section-content">
          <div class="wrapper">
            <component :is="section.content" :data="section.content" v-show="section.hover"/>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="less">
@import (reference) "../styles/main.less";
</style>

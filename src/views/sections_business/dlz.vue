<script>
import firebase from "firebase";

export default {
  name: "vDlz",

  created() {
    const firestore = firebase.firestore();

    var dlz_thumbs_db = firestore.collection("Dlz_Thumbs");
    dlz_thumbs_db
      .get()
      .then(snapshot => {
        this.THUMBS = [];
        snapshot.forEach(doc => {
          this.THUMBS.push(doc.data());
        });
      })
      .catch(error => {
        console.error(error);
      });

    var dlz_info_db = firestore.collection("Dlz_Info");
    dlz_info_db
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          this.CONTENT = doc.data().Content;
          this.QUOTE = doc.data().Quote;
        });
      })
      .catch(error => {
        console.error(error);
      });
  },

  methods: {},

  data() {
    return {
      THUMBS: [
        {
          id: 0,
          title: "",
          alt: "",
          src: ""
        }
      ],
      CONTENT: "SDFASD",
      QUOTE: "ASDFASDF"
    };
  }
};
</script>

<template>
  <div class="dlz" id="business-dlz" style="color:black">
    <h2>DLZ</h2>
    <div class="col thumbs">
      <img
        :src="thumb.src"
        :alt="thumb.alt"
        v-for="thumb in THUMBS"
        v-bind:key="thumb.id"
        width="150px"
      >
    </div>

    <div class="col info">
      <div v-html="CONTENT"></div>
    </div>

    <div class="col quote">
      <p>{{ QUOTE }}</p>
    </div>
  </div>
</template>

<style lang="less" scoped>
</style>

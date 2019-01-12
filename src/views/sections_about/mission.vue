<script>

import firebase from 'firebase';



export default {
  
  name: 'vMissionAndVision',

  created () {
    
    const firestore = firebase.firestore();

    var mission_and_vision_db = firestore.collection('MissionAndVission_Thumbs');
    mission_and_vision_db.get().then(snapshot => {
      this.THUMBS = [];
      snapshot.forEach(doc => {
        this.THUMBS.push(doc.data());
      });
    }).catch( error => {
        console.error(error);
    });

    var mission_and_vision_info_db = firestore.collection('MissionAndVision_Info');
    mission_and_vision_info_db.get().then(snapshot => {
      snapshot.forEach(doc => {

        this.MISSION.text = doc.data().Mission;
        this.VISION.text = doc.data().Vision;
        this.QUOTE.text = doc.data().Quote;
      });
    }).catch( error => {
        console.error(error);
    });




  },

  methods:{

  },

  data(){
    return{
      THUMBS: [
        {
          id: 0,
          title : '',
          alt: '',
          src: ''
        }
      ],
      MISSION: {
        title: 'MISION',
        text :''
      },
      VISION: {
        title: 'VISION',
        text: ''
      },
      QUOTE: {
        text: ''
      }
    }
  }

}
</script>

<template>
  <div class="mission_and_vision" id="about-mission">
    
    <div class="col thumbs">
      <img :src="thumb.src" :alt="thumb.alt" v-for="thumb in THUMBS" v-bind:key = "thumb.id" width="150px">
    </div>

    <div class="col info">

      <h2>MISIÓN</h2>
      <p>
        {{ MISSION.text }}
      </p>
      
      <h2>VISIÓN</h2>
      <p>
        {{ VISION.text }}
      </p>

    </div>

    <div class="col quote">
      <p>
        {{ QUOTE.text }}
      </p>
    </div>

  </div>
</template>

<style lang="less" scoped>

</style>

<template>
  <div class="terms">

    <h1> {{ TERMS.title }} </h1>

    <div class="terms-container">
      <div v-html="TERMS.content">
      </div>
    </div>

  </div>
</template>



<script>
import firebase from 'firebase';

export default {

  created(){

   const firestore = firebase.firestore();

    var terms_db = firestore.collection('Terms');
    terms_db.get().then(snapshot => {

      //Loop over timeline-dates
      snapshot.forEach(doc => {
        this.TERMS.title = doc.data().title;
        this.TERMS.content = doc.data().content;
      });

    }).catch( error => {
        console.error(error);
    });

  },

  data(){
    return{
      TERMS : {
        title : '',
        content : ''
      }
    }
  }
}
</script>

<style scoped lang="less">

  br{
    
    padding: 1em 0em;
    margin: 1em 0em;

    display:block;

  }

  h1{
    padding: 1em 0em;
    margin: 1em 0em;

  }


  .terms-container{
    width:100%;
    max-width : 1000px;
    margin: 0 auto;

    text-align: left;
  }


</style>

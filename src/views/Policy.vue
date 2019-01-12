<template>
  <div class="terms">

    <h1> {{ POLICY.title }} </h1>

    <div class="policy-container">
      <div v-html="POLICY.content">
      </div>
    </div>

  </div>
</template>



<script>
import firebase from 'firebase';

export default {

  created(){

   const firestore = firebase.firestore();

    var policy_db = firestore.collection('Policy');
    policy_db.get().then(snapshot => {

      //Loop over timeline-dates
      snapshot.forEach(doc => {
        this.POLICY.title = doc.data().title;
        this.POLICY.content = doc.data().content;
      });

    }).catch( error => {
        console.error(error);
    });

  },

  data(){
    return{
      POLICY : {
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


  .policy-container{
    width:100%;
    max-width : 1000px;
    margin: 0 auto;

    text-align: left;
  }


</style>

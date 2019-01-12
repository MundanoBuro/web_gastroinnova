<script>
import firebase from 'firebase';

export default {

  created(){

   const firestore = firebase.firestore();

    var company_db = firestore.collection('Company_People');
    company_db.get().then(snapshot => {

      
      //Loop over timeline-dates
      snapshot.forEach(doc => {
        const people =  doc.data();
        this.COMPANY[people.type].position = people.position;
        this.COMPANY[people.type].name = people.name;
      });

    }).catch( error => {
        console.error(error);
    });

  },

  data(){
    return{
      COMPANY : {

        CEO : {
          position : '',
          name: ''
        },

        PLANNING : {
          position : '',
          name: ''
        },

        EXPANSION: {
          position : '',
          name: ''
        },

        FINANCIAL : {
          position : '',
          name: ''
        }

      }
    }
  }
}
</script>

<template>
  <div id="about-ourpeople" class="about">
    
    <img class="logo" src="../../assets/logo.png">

    <div class="people-orientador-general">
      <div class="position"> {{ COMPANY.CEO.position }} </div>
      <div class="name">{{ COMPANY.CEO.name }}</div>
    </div>

    <div class="people-orientadores">

      <div class="people-orientador">
      <div class="position"> {{ COMPANY.PLANNING.position }} </div>
      <div class="name">{{ COMPANY.PLANNING.name }}</div>
      </div>

      <div class="people-orientador">
        <div class="position"> {{ COMPANY.EXPANSION.position }} </div>
        <div class="name">{{ COMPANY.EXPANSION.name }}</div>
      </div>

      <div class="people-orientador">
        <div class="position"> {{ COMPANY.FINANCIAL.position }} </div>
        <div class="name">{{ COMPANY.FINANCIAL.name }}</div>
      </div>
    
    </div>

  </div>
</template>


<style lang="less" scoped>

.logo{
  width: 25vw;
  max-width: 150px;
  display: block;
  margin: 2em auto;
}

.position{    
    color: #961934;
    font-size: 1em;
    font-weight: 600;
    text-align: center;
}
.name{    
    color: #8BC53F;
    font-size: 1em;
    text-decoration: underline;
}

.people-orientador-general{
  margin-bottom: 2.5em;
}
.people-orientadores{
  display: block;
  .people-orientador{
    display: inline-block;
    margin: 0em 1em;
    .position{
width: 12em;
    vertical-align: -webkit-baseline-middle;
    }
  }
}
</style>

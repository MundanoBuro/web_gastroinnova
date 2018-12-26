<template>
  <div class="admin">
    <h1>yo soy ADMIN</h1>

    <ul class="news">
      <li class="new" v-for="_new in news">


        <textarea v-model="_new.content" placeholder="add multiple lines"></textarea>
        <datetime v-model="date"></datetime>

        <mdb-card>
  <mdb-card-body>
    This is some text within a panel body.
  </mdb-card-body>
</mdb-card>

      </li>
    </ul>
  </div>
</template>

<script>

import firebase from 'firebase';
import { Datetime } from 'vue-datetime';
import 'vue-datetime/dist/vue-datetime.css'


export default {
  
  name: 'vAdmin',

  components: { datetime: Datetime },

  created () {
    
    const firestore = firebase.firestore();
    firestore.settings({ timestampsInSnapshots: true });
    firestore.collection("News").get().then(snapshot => {

        snapshot.forEach(doc => {

            let doc_data = doc.data();
            this.news.push({
                date : doc_data.date.toDate(),
                content: doc_data.content
            })
            
        });

    });

  },


  data(){
    return{
      news: []
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
<script>
import firebase from 'firebase';

export default {

  created(){

   const firestore = firebase.firestore();

    var timeline_db = firestore.collection('Timeline');
    timeline_db.get().then(snapshot => {

      
      //Loop over timeline-dates
      snapshot.forEach(doc => {
        const rawDateFromTimeline =  doc.data();
        this.addDateToTimeline(rawDateFromTimeline);
      });

    }).catch( error => {
        console.error(error);
    });

  },

  methods:{
    
    addDateToTimeline(rawData) {
      
      const rawTimeline = {
        id: ( new Date() ).getTime(),
        date : rawData.date.toDate(),
        src: rawData.image,
        text : rawData.text
      };

      const rawYear = rawTimeline.date.getFullYear();

      this.TIMELINES.map( timeline => {
        if(timeline.year == rawYear){
          timeline.dates.push(rawTimeline);
        }
      });



    }

  },

  data(){
    return{
        TIMELINES : [

    
          {
            year: 2015,
            color : 'green',
            dates: []
          },

          {
            year: 2016,
            color : 'orange',
            dates: []
          },

          {
            year: 2017,
            color : 'red',
            dates: []
          },

          {
            year: 2018,
            color : 'yellow',
            dates: []
          }
          
        ]
    }
  }
}
</script>



<template>
  <div class="timeline" id="about-history">
    <div class="timeline-wrapper">

      

      <div class="timelime-item" v-for="kTimeline in TIMELINES" v-bind:key="kTimeline.year">
       

        <div class="timeline-item-type-content" v-for="kDates in kTimeline.dates" v-bind:key="kDates.id">
              
              <div class="col dates" :class="['gi-'+kTimeline.color]"> 
                <h4>{{ kDates.date.getFullYear() }}</h4>
              </div>
              
              <div class="col thumbs"> 
                <img :src="kDates.src" width="100%">
              </div>
              
              <div class="col text">
                <p>
                  {{ kDates.text }}
                </p>
              </div>

        </div>

        <div class="timeline-item-type-division">
          
            <img class="div-icon div-icon-green" src="../../assets/timeline/DIV_0.png" alt="" v-if="kTimeline.color=='green'" width="100%">
            <img class="div-icon div-icon-orange" src="../../assets/timeline/DIV_1.png" alt="" v-if="kTimeline.color=='orange'" width="100%">
            <img class="div-icon div-icon-red" src="../../assets/timeline/DIV_2.png" alt="" v-if="kTimeline.color=='red'" width="100%">
            <img class="div-icon div-icon-yellow" src="../../assets/timeline/DIV_3.png" alt="" v-if="kTimeline.color=='yellow'" width="100%">

        </div>


      </div>
      
    </div>    
  </div>
</template>

<style lang="less" scoped>
h2{
  color:black !important;
}

.timeline-item-type-content{
  display: block;
  .thumbs{
    width: 12em;
    height: 8em;;
    display: inline-block !important;
    vertical-align: top;
    float: left;
    img{
          margin-top: 1em;
    }
  }
  .dates{
    width: 12em;
    height: 8em;
    float: left;
    display: inline-block !important;
    vertical-align: top;
  }
  .text{
    width: calc(100% - 25em);
    height: 8em;;
    display: inline-block !important;
    vertical-align: top;
  }
}




.thumbs,.dates,.text{
  display: inline-block;
}







.thumbs,.div-icon,.dates{
  display: block;
  width: 12em;
  text-align: center;
}


.timeline-item-type-division{
          width: calc(8em +0px);
          padding-left: 0px;
          
      img{
        width: calc(8em + 0px);
        padding-left: 0px;
       
      }
}
.dates{

  width: 8em !important;

  padding-top: 1em;
  padding-bottom: 1em;

      display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-flex-wrap: nowrap;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-content: center;
    -ms-flex-line-pack: center;
    align-content: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;

  h4{
    font-weight: 200;
    text-align: center;
    margin: 0 auto;
  }
  &.gi-green{
        background-color: #8bc53f !important;
  }
  &.gi-orange{
        background-color: #e5520f !important;
  }
  &.gi-red{
        background-color: #961934 !important;
  }
  &.gi-yellow{
        background-color: #ffb90f !important;
  }
}
.text{

}
</style>

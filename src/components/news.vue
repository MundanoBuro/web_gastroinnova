<template>
    <div class="news">
        <div class="wrapper">
            <div class="content">
                <h2>NEWS FEED</h2>
                <ul>
                    <li v-for="item in news">
                        <div class="col date">
                           <span> {{ item.date | moment("YYYY/MM/DD")  }} </span> <br>
                           <span> {{ item.date | moment("hh:mm")  }} </span>

                        </div>
                        <div class="col text" style="width:300px;">          
                                {{ item.content }}
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'vNews',

  // Component's created function.
  created () {
    
    const firestore = firebase.firestore();
    firestore.settings({ timestampsInSnapshots: true });
    firestore.collection("News").get().then(snapshot => {

        snapshot.forEach(doc => {

            let doc_data = doc.data();
            this.news.push({
                date : doc_data.date.toDate(),
                content: doc_data.content
            });
            
        });

        this.news = this.news.slice(0,3);


    })

  },


  mounted(){

  },


  methods:{ 

            toDateTime(secs) {
                var t = new Date(1970, 0, 1); // Epoch
                t.setSeconds(secs);
                return t;
            }
  },

  // Component's Attributes or data object.
  data () {
    return {
        news : []
    }
  }
}
</script>

<style scoped lang="less">



ul{list-style: none outside none;}

.news{
    width: 100%;
    box-sizing: border-box;
    padding: 1em;
    background-color: white;
    .wrapper{
       background-color: #e5520f;
        box-sizing: border-box;
        padding: 1em;
        .content{
            box-sizing: border-box;
            padding: 1em;
            background-color: white;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            -webkit-flex-direction: column;
            -ms-flex-direction: column;
            flex-direction: column;
            -webkit-flex-wrap: wrap;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            -webkit-justify-content: flex-start;
            -ms-flex-pack: start;
            justify-content: flex-start;
            -webkit-align-content: center;
            -ms-flex-line-pack: center;
            align-content: center;
            -webkit-align-items: flex-start;
            -ms-flex-align: start;
            align-items: flex-start;
        }
    }
}

h2{
    color: green;
    font-size: 1.25em;
}

ul{
    padding: 0px;
    margin: 0px;

    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-align-content: center;
    -ms-flex-line-pack: center;
    align-content: center;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
}

li{
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
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;

    .date{
        -webkit-order: 0;
        -ms-flex-order: 0;
        order: 0;
        -webkit-flex: 0 1 auto;
        -ms-flex: 0 1 auto;
        flex: 0 1 auto;
        -webkit-align-self: auto;
        -ms-flex-item-align: auto;
        align-self: auto;
        width: 10em;
        background-color: green;
        color: white;
        text-align: left;
    }
    .text{
        border-top: 1px solid red;
        -webkit-order: 0;
        -ms-flex-order: 0;
        order: 0;
        -webkit-flex: 1 1 auto;
        -ms-flex: 1 1 auto;
        flex: 1 1 auto;
        -webkit-align-self: auto;
        -ms-flex-item-align: auto;
        align-self: auto;
        width: calc(100% - 25em);
        margin-left: 20px;
        padding-left: 0px;
        font-size:12px;
        text-align: left;

        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-justify-content: flex-start;
        -ms-flex-pack: start;
        justify-content: flex-start;
        -webkit-align-content: center;
        -ms-flex-line-pack: center;
        align-content: center;
        -webkit-align-items: flex-start;
        -ms-flex-align: start;
        align-items: flex-start;

        span{
            text-align: left;
        }

    }

    &:nth-child(even){
        .date{
            background-color: orange
        }
    }
}


 .news{
        width: 100%;
        box-sizing: border-box;
        ul{
            width: 100%;
            box-sizing: border-box;
            li{
                width: 100%;
                box-sizing: border-box;
                .date{
                    width: 100%;
                    padding: 0.5em;
                    margin: 0.5em;
                }
                .text{
                    width: 100%;
                    margin: 0.5em;
                    padding: 0.5em;
                }   
            }
        }
    }
@media (min-width: 600px) {
 .news{
        width: 100%;
        box-sizing: border-box;
        ul{
            width: 100%;
            box-sizing: border-box;
            li{
                width: 100%;
                box-sizing: border-box;
                .date{
                    width: 10em;
                }
                .text{
                    width: calc(100% - 15em);
                }   
            }
        }
    }
}
</style>
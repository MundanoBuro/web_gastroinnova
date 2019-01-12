<script>

export default {
  name: 'vInfo',

  props:{
    scrollToId: String
  },

  components:{

  },

  
  mounted () {
    this.updateScrollToId();
  },


  methods: {
  
  },


  watch: { 
      	scrollToId: function(newVal, oldVal) {
          this.updateScrollToId();
        }
  },


  data(){
    return{
      banner:{
        src :'/img/banners/banner_about.jpg',
        title : 'Información Financiera'
      }
    }
  }

}
</script>

<template>
  <div class="view info">

    <div class="view-banner">
      <div class="image"><img :src="banner.src"></div>
      <div class="title">
          <div class="wrapper">
            <h1 style="max-width:10em;line-height: 81%;"> {{ banner.title }}</h1>
          </div>
      </div>
    </div>

<!--
     <div class="plots">

                    <div class="plot green">
                        <h3 style="font-size:0.8em;color:gray;padding:1em 0em;">UNITS AND VALUES SELLS IN CONSUMER FOODSERVICE 2012-17*</h3>
                        <line-chart :height="300"></line-chart>
                        <h2>TAMAÑO DEL MERCADO</h2>
                        <span style="font-size:0.8em;color:gray;padding:1em 0em;"> *EUROMONIOR INTERNATIONAL from official statistics, trade associations, trade press, company research, trade interviews, trade resources</span>
                    </div>
               
                    <div class="plot yellow">
                        
                        <h3 style="font-size:0.8em;color:gray;padding:1em 0em;">UNITS, TRANSACTIONS AND VALUE SALES IN CONSUMER FOODSERVICE: %GROWTH*</h3>

                        <table id="sizeOfMarket">

                        <tr>
                            <th> </th>
                            <th>2016/17</th>
                            <th>2012/17 CAGR</th>
                            <th class="strong">2012/17 TOTAL</th>
                        </tr>
                       
                        <tr>
                            <td>ESTABLECIMIENTOS/OUTLETS</td>
                            <td>2.5</td>
                            <td>2.2</td>
                            <td>11.6</td>
                        </tr>

                           <tr>
                            <td>TRANSACCIONES</td>
                            <td>1.9</td>
                            <td>1.9</td>
                            <td>10.1</td>
                        </tr>

                         <tr>
                            <td>VENTAS TOTALES (Miles de MM)</td>
                            <td>2.8</td>
                            <td>2.5</td>
                            <td>13.3</td>
                        </tr>

                         <tr>
                            <td>VALUE CONSTANT PRICES</td>
                            <td>-2.6</td>
                            <td>0.8</td>
                            <td>4.2</td>
                        </tr>


                        </table>
                        <h2>PROYECCIÓN DEL MERCADO</h2>
                    
                        <span style="font-size:0.8em;color:gray;padding:1em 0em;"> * EUROMONITOR INTERNATIONAL from official statistics, trade associations, trade press, company, research, trade interviews, trade resources</span>

                    </div>
               
                    <div class="plot yellow">

                     <h3 style="font-size:0.8em;color:gray;padding:1em 0em;">UNITS, TRANSACTIONS AND VALUE SALES IN CONSUMER FOODSERVICE: %GROWTH*</h3>

                         <table id="sizeOfMarket">

                        <tr>
                            <th> </th>
                            <th>2016/17</th>
                            <th>2012/17 CAGR</th>
                            <th class="strong">2012/17 TOTAL</th>
                        </tr>
                       
                        <tr>
                            <td>ESTABLECIMIENTOS/OUTLETS</td>
                            <td>2.3</td>
                            <td>2.8</td>
                            <td>14.9</td>
                        </tr>

                           <tr>
                            <td>TRANSACCIONES</td>
                            <td>1</td>
                            <td>3.4</td>
                            <td>18.2</td>
                        </tr>

                         <tr>
                            <td>VENTAS TOTALES (Miles de MM)</td>
                            <td>1.5</td>
                            <td>5.2</td>
                            <td>28.7</td>
                        </tr>

                         <tr>
                            <td>VALUE CONSTANT PRICES</td>
                            <td>-2.6</td>
                            <td>0.8</td>
                            <td>4.2</td>
                        </tr>


                        </table>
                        <h2>EVOLUCIÓN DEL MERCADO</h2>
                                          <span style="font-size:0.8em;color:gray;padding:1em 0em;"> * EUROMONITOR INTERNATIONAL from official statistics, trade associations, trade press, company, research, trade interviews, trade resources</span>

                    </div>

                </div>
 

  
  
  </div>
-->
  </div>
</template>

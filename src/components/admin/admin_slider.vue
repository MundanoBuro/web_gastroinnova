<template>
<div class="panel panel-default">
  <div class="panel-heading">IMAGENES DEL SLIDER</div>
  <div class="panel-body">
 
    <picture-input ref="pictureInput" width="200" height="200" margin="16" v-for="pic in pics" button-class="btn"
      accept="image/jpeg,image/png" 
      :custom-strings="{
        upload: '<h1>Bummer!</h1>',
        drag: 'Drag a GIF or GTFO'
      }"
      @change="onChange">
    </picture-input>

  </div>
  <div class="panel-footer">
      <i class="fas fa-plus-square" style="font-size:1.5em;margin:1em" @click="addSlide()"></i>
      <i class="fas fa-minus-square" style="font-size:1.5em;margin:1em" @click="removeSlide()"></i>
  </div>
</div>
</template>


<script>
import PictureInput from 'vue-picture-input'
export default {
  name: 'admin-slider',
  data () {
    return {
        pics : [
            {}
        ]
    }
  },
  components: {
    PictureInput
  },
  methods: {
    addSlide(){
        this.pics.push({})
    },
    removeSlide(){
        this.pics.shift();
    },
    onChange (image) {
      console.log('New picture selected!')
      if (image) {
        console.log('Picture loaded.')
        this.image = image
      } else {
        console.log('FileReader API not supported: use the <form>, Luke!')
      }
    }
  }
}

</script>


<style scoped>
.panel-body{
}
.picture-input {
    display: inline-block;
    width: 200px;
}
</style>
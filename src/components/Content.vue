<template>
<div class="w-screen h-screen z-10 overflow-x-hidden">
  <hooper class="w-screen h-screen" :navButtons ="false" :slidesToShow = 1>
    <slide class="slide w-screen h-screen bg-yellow-300">
        <tr v-for=" c in codes" :key="c">
          <td>{{c}}</td>
          </tr>
    </slide>
    <slide class="slidew-screen h-screen bg-green-400">
      <h3>Hello2</h3>
    </slide>
    <slide class="slide w-screen h-screen bg-orange-200">
      <LessonBox/>
      <LessonBox/>
    </slide>
    </hooper>
    </div>
</template>

<script>
import LessonBox from "../components/reusable/LessonBox"
import { Hooper, Slide } from 'hooper';
import 'hooper/dist/hooper.css';
export default {
  components: {
    Hooper,
    Slide,
    LessonBox
  },
  mounted() {
    this.getData();
    console.log(this.codes)
  },
  data: () => ({
    codes: [],
  }),
  methods: {
     async getData(){
      try {
        const api = 'https://tahvel.edu.ee/hois_back/timetables/group/38/432?fbclid=IwAR3EsUV0GpdyImxKCMrlpezjKu2Z9buy3MrkBzBUGQhFXDliwsCWf3yVoEY'
        this.axios.get(api).then((response) => {
          for(var d in response.data) {
            this.codes.push(response.data[d].groupCode)
          }
          })
      } catch(err){
        console.log(err)
      }

      }

            
  }
}
</script>

<style>

</style>
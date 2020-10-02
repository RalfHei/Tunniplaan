<template>
<div class="h-screen">

  <div class="bg-blue-50 h-40 w-full">
    <div class="h-12">
      <Vmenu/>
    </div>
    <div class="flex flex-row justify-center text-white text-2xl">
        <button class=" transform rotate-180">
        <Play-icon :size="45" fillColor="#FFFFFF"/> 
        </button>
        <div class="flex align-center pt-1">
<p>
        28.09 - 04.10.2020 

</p>

        </div>

        <button class="">
        <Play-icon :size="45" fillColor="#FFFFFF"/>
        </button>
        </div>

    <div class="h-16 w-full flex flex-row justify-center">
     <Vbutton>E</Vbutton>
     <Vbutton>T</Vbutton>
     <Vbutton>K</Vbutton>
     <Vbutton>N</Vbutton>
     <Vbutton>R</Vbutton>
     <Vbutton>L</Vbutton>
     <Vbutton>P</Vbutton>
    </div>
</div>
    <Content />
  </div>
</template>

<script>
import PlayIcon from 'vue-material-design-icons/Play.vue';
import Content from "./Content"
 import Vbutton from '../components/reusable/Vbutton'
 import Vmenu from '../components/reusable/Vmenu'
export default {
  components: {
    Vbutton,
    Vmenu,
    Content,
    PlayIcon
  }
}
</script>

<style>
</style>

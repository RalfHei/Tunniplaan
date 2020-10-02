<template>
<div class="h-screen">

  <div class="bg-blue-50 h-40 w-full">
    <div class="h-24">
      <Vmenu/>
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
import Content from "./Content"
 import Vbutton from '../components/reusable/Vbutton'
 import Vmenu from '../components/reusable/Vmenu'
export default {
  components: {
    Vbutton,
    Vmenu,
    Content
  }
}
</script>

<style>

</style>
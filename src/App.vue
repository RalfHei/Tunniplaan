<template>
  <div id="app" class="overflow-hidden">
    <HelloWorld />
    <HeaderRyhm />

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HeaderRyhm from './components/reusable/HeaderRyhm.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    HeaderRyhm
  }

}
</script>

<style>

</style>

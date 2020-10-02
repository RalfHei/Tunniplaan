<template>
  <div id="app" class="overflow-hidden">
    <HelloWorld />
    <Content />
  </div>
</template>

<script>
import Content from './components/Content'
import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    Content
  }
  
}
</script>

<style>

</style>

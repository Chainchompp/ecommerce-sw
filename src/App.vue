<template>
  <component :is="layout">
    <router-view key="$route.path" >
    </router-view>
  </component>
</template>

<script>


export default {
  name: 'App',
  data(){
    return {}
  },
  computed:{
    layout(){
      return this.$route.meta.layout || 'div'
    }
  }
}

</script>

<style>

</style>


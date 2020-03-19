<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view/> -->
    <LoginRegister></LoginRegister>
  </div>
</template>

<script>
import LoginRegister from '../src/components/LoginRegister'
export default {
  name: 'App',
  components:{
    LoginRegister
  }
  
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  border: 0;
}
</style>

<template>
     <div id="app">
      <header>
      <NavBar />
      </header>
     </div>
     <router-view />
     <footer />
</template>

<script>
  import footer from './components/Footer.vue'
import NavBar from './components/NavBar';
export default ({
    name: "app",
    components:{
    NavBar,
    footer
}
})
</script>

<style>
 *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }
 body{
  font-family: 'montserrat',sans-serif;
 }
 header{
  width: 100vw;
  background-image: url(./assets/image/immo9.jpeg);
 
  padding: 15px;
  height: 80px;
 }

</style>

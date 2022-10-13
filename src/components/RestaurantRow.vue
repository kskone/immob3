<template>
  <div class="restaurant--row">
    <h2 class="title">

    </h2>
   <div class="wrapper-card">
    <RestaurantCard v-for="(card, index) in informations" :key="index" :info="card"/>
   </div>
  </div>
</template>

<script>
import RestaurantCard from './RestaurantCard.vue';

export default {
 name: 'RestaurantRow',
 data(){
  return{
    informations: [
      {
        nom: 'Bat Etoile',
        note: 4.5,
        time: '6-8',
        image: 'assets/image/image81.jpeg'
      },
      {
        nom: 'Golf',
        note: 4.5,
        time: '7-8',
        image: 'assets/image/image82.jpeg'
      },
      {
        nom: 'lolo',
        note: 5.3,
        time: '6-8',
        image: 'assets/image/immo3.jpeg'
      },
      {
        nom: 'Bat-etoile',
        note: 4.3,
        time: '6-8',
        image: 'assets/image/immo5.jpeg'
      },
      {
        nom: 'Bat-etoile',
        note: 4.3,
        time: '6-8',
        image: 'assets/image/immo6.webp'
      },
      {
        nom: 'Bat-etoile',
        note: 5.3,
        time: '6-8',
        image: 'assets/image/immo4.jpeg'
      },

      {
        nom: 'Bat-etoile',
        note: 5.3,
        time: '6-8',
        image: 'assets/image/immo2.webp'
      },
      {
        nom: 'Bat-etoile',
        note: 5.3,
        time: '6-8',
        image: 'assets/image/immo7.jpeg'
      },
      {
        nom: 'Bat-etoile',
        note: 5.3,
        time: '6-8',
        image: 'assets/image/immo8.webp'
      },
    
    ]
  }
 },
 components: {
    RestaurantCard
 }
}
</script>

<style >
.restaurant--row{
   
}
.wrapper-card{
  margin: 0 auto;
  display: flex;
  max-width: 1100px;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
    
}


    

</style>
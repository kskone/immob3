 <template>
   <h2 align="center">vente de propriété</h2>
   
   <RestaurantRow></RestaurantRow>
   
    
 </template>
 
 <script>
 import Footer from '@/components/Footer.vue'
 import RestaurantRow from '@/components/RestaurantRow.vue'
 export default {
  name: 'venteproduits',
  components: {
    RestaurantRow,
    Footer
  }
  
 }
 </script>
 
 <style>
 h2{
    position: relative;
    padding: 20px;
    font-size: 30px;
  }
  .clo{
    position: relative;
    left: 30px;
  }
 </style>
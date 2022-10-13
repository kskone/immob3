 <template>
   <nav>
   <div class="menu-item"><router-link to="/">Accueil</router-link></div>
   <div class="menu-item"><router-link to="/vente">Vente</router-link></div>
   <div class="menu-item"><router-link to="/contact">Contact</router-link></div>
   </nav> 
 </template>
 
 <script>
  
 export default {
    name: 'navbar',
    components: {
          
    }
     
 }
 </script>
 
 <style>
  
 nav{
    display: flex;
    align-items: center;
    justify-content: center;
 }
 nav .menu-item{
    color: #fff;
    padding: 10px 20px;
    position: relative;
    text-align: center;
    border-bottom: 3px solid transparent;
    display: flex;
    transition: 0.4s;
 }
 nav .menu-item a{
    color: inherit;
    text-decoration: none;
 }
 </style>

 <style scoped>
  h1{
    position: relative;
    top: 70px;
    display: flex;
    align-content: center;
    justify-content: center;
    color: rgb(15, 135, 215);
    text-transform: uppercase;
 }
</style>
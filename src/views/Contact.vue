<template>
  <h1 align="center">nous contacté</h1>
  <form class="form">
    <p>
    <label for="name">Name</label>
    <input
      id="name"
      v-model="name"
      type="text"
      name="name" placeholder="nom"
    >
  </p> <br>
  <p>
    <label for="name">Prenom</label>
    <input
      id="prenom"
      v-model="prenom"
      type="text"
      name="prenom" placeholder="prenom"
    >
  </p> <br>
  <p>
    <label for="E-mail">E-mail</label>
    <input
      id="prenom"
      v-model="prenom"
      type="text"
      name="prenom" placeholder="e-mail"
    >
  </p> <br>
  <p>
    <label for="name">Contact</label>
    <input
      id="prenom"
      v-model="prenom"
      type="text"
      name="prenom" placeholder="contact"
    >
  </p> <br>
  <p>
    <label for="name">Interet</label>
    <input
      id="prenom"
      v-model="prenom"
      type="text"
      name="prenom" placeholder="dites nous"
    >
  </p> <br>
  <button class="btn">envoyé</button>
  </form>
  <Footer />
</template>

<script>
import Footer from '@/components/Footer.vue' 
export default {
    name: 'Contact',
    components: {
        Footer
    }

}
</script>

<style>

.form{
   display: flex;
    align-items: center;
    justify-content: center;
    padding:20px;
    margin: 0 auto;
    flex-direction:column ;
    border: 1px solid;
    border-radius: 50px;
    width: 650px;
    background-image: url(../assets/image/lits5.jpeg);
    background-repeat: no-repeat;background-size: cover;
}.btn{ 
    background-color: rgb(35, 51, 197);
    color: white;
    border: 3px solid;
    border-radius: 50px;
    width: 60px;
    height: 30px;
}
h1{
    background-color: blue;
    text-transform: capitalize;
    color: white;
}
 

</style>
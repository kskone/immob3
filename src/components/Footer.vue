<template>
  <div class="footer">
    <h3>Suivez-nous</h3>
    <p>Nous sommes avec vous dépuis 10 Ans et nous faisons notres possibles de vous donnez la maison de votres reves
        avec nous retraite garantire a vie. <br> Nous restons fidelles à vous pour tout le long de vote services. Bat-Etoile  vous dis merçis 
        Nous sommes avec vous dépuis 10 Ans et nous faisons notres possibles de vous donnez la maison de votres reves
        avec nous retraite garantire a vie. <br> Nous restons fidelles à vous pour tout le long de vote services. Bat-Etoile  vous dis merçis 
    </p>
    <div class="icon">
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-linkedin"></i>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<style scoped>
.footer{
    position: relative;
    height: 300px;
    background-color: rgb(175, 168, 168);
}
h3{
    display: flex;
    align-items: center;
    justify-content: center;
}
p{
    display: flex;
    margin: 30px;
    align-items: center;
    justify-content: center;
}.icon{
    display: flex;
    justify-content: center;
    gap: 10px;
    padding: 8px;
    margin: 20px;
    
}
.icon i{
    font-size: 30px;
    color: rgb(29, 15, 233);
}
</style>
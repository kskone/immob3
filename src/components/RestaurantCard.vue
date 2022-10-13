<template>
  <div class="restaurant--card">
   <div class="restaurant--image" :style="{
    backgroundImage: `url(${getImage(info.image)})`
  }">
   </div>
   <div class="restaurant--information">
    <div class="top">
        <p class="name">
            {{ info.nom}}
        </p>
        <p class="note"><span>{{ info.note }}</span></p>
    </div>
    <p class="time">
        {{ info.time }} mois
    </p>
   </div>
  </div>
</template>

<script>
export default {
    props: ['info'],
    methods:{
        getImage(url){
            return url?.startsWith('https://') ? url : require('@/' + url)
        }
    },
    mounted(){
        console.log(this.info)
    }
}
</script>

<style scoped>
.restaurant--card{
    position: relative;
    width: 30%;
    height: 45vh;
}
.restaurant--image{
    position: relative;
    /* margin: 20px; */
    background-image: url(../assets/image/image81.jpeg);
    height: 70%;
    background-size: cover;
    background-position: center;
}
.restaurant-information{
    position: relative;
}.top{
    display:flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
}.name{
    position: relative;
    top: 0px;
    left: 1px;
}.note{
    position: relative;
    top: 0px;
    left: 1px;
    background-color: rgba(241, 237, 237, 0.933);
    font-size: 0.8rem;
    border-radius: 50%;
}.time{
    position: relative;
    top: 0px;
    left: 1px;
    font-size: 0.9rem;
}

</style>
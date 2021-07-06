<template>
<div class="container">
      <br/>
    <br/>
    <br/>
    <Hero/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <SubHero1/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <SubHero1/>
    <br/>
    <div>
        <div class="row">
        <div class="col"><Card/></div>
        <div class="col"><Card/></div>
        <div class="col"><Card/></div>
        </div>
        <br/>
        <div class="row">
        <div class="col"><Card/></div>
        <div class="col"><Card/></div>
        <div class="col"><Card/></div>
        </div>
        </div>
</div>
</template>

<script>
import Hero from '../components/Hero.vue'
import SubHero1 from '../components/SubHero1.vue'
import Card from '../components/Card.vue'
export default {
  name: 'home',
  components:{
      Hero,
      SubHero1,
      Card
  }
};
</script>

<style>

</style>
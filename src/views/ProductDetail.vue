<template>
    <div class="container">
        <br />
        <br />
        <br />
        <p>Product</p>
        <br />
        <br />
        <br />
            <ImageTab/>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div>
            <Card/>
        </div>
    </div>
</template>

<script>
    import Hero from '../components/Hero.vue'
    import SubHero1 from '../components/SubHero1.vue'
    import Card from '../components/Card.vue'
    import ImageTab from '../components/ImageTab.vue'
    export default {
        name: 'ProductDetail',
        components: {
            Hero,
            SubHero1,
            ImageTab,
            Card
        }
    };
</script>

<style>

</style>
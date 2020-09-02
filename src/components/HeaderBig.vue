<template>
  <header id="header">
    <nav>
      <ul>
        <li class="logo"><router-link :to="{ name: 'home' }"><img src="images/top-logo.png" title="logo - strona główna"/></router-link></li>
        <li class="nav1"><router-link :to="{ name: 'addEstate' }">dodaj ogłoszenie</router-link></li>
        <li class="nav2"><router-link :to="{ name: 'logIn' }">zaloguj się</router-link></li>
      </ul>
    </nav>
      <carousel :items="2" :autoplaySpeed="1500" :autoplayTimeout="4000" :nav="false" :dots="false" :autoplay="true" :loop="true" class="slider">
        <img src="images/slide1.jpg">
        <img src="images/slide2.jpg">
        <img src="images/slide3.jpg">
        <img src="images/slide4.jpg">
        <img src="images/slide5.jpg">
        <img src="images/slide6.jpg">
      </carousel>
    <h1 class="title-header">mieszkania inwestycyjne w jednym miejscu</h1>
  </header>
</template>

<script>
  import carousel from 'vue-owl-carousel';
  export default {
    name: "HeaderBig",
    components: { carousel },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>

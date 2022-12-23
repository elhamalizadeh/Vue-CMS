<template>
<div class="">
  <HeaderSection />
  <div class="container">
  <router-view></router-view>
  </div>
  <FooterSection />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
export default {
  name: 'App',
  components: {
    HeaderSection : Header,
    FooterSection: Footer
  }
}
</script>

<style>

</style>

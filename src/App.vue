<template>
<div class="">
  <div class="container-fluid">
    <HeaderSection />
    <MainMenu />
    <div id="content">
        <router-view></router-view>
    </div>

  </div>
  <FooterSection />
  </div>
</template>

<script>
import Header from './components/admin/shared/Header.vue';
import Footer from './components/admin/shared/Footer.vue';
import Menu from './components/admin/shared/Menu.vue';
export default {
  name: 'App',
  components: {
    HeaderSection : Header,
    FooterSection: Footer,
    MainMenu : Menu

  }
}
</script>

<style>
#content{
  width:65%;
  float:right;
  margin-bottom: 30px;
  margin-left: 15px;
}
</style>

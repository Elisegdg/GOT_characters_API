<template>
  <div id="app">
    <Header/>

    <main>
      <div id="composants">
        <Gallery class="myGallery"/>
    </div>
    </main>

    <Footer/>
  </div>
</template>

<script>
import Gallery from '@/components/Gallery.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'


export default {
  name: 'App',
  components: {
    Gallery,
    Header,
    Footer,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-top: 60px;
}
</style>

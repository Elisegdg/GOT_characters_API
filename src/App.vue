<template>
  <div id="app">
    <header>
      <h1> GOT characters</h1>
    </header>

    <main>
      <div id="composants">
        <Gallery class="myGallery"/>
    </div>
    </main>

    <footer>
      <p>Realised by Elise Gondange during year 2 of IMAC</p>
    </footer>
  </div>
</template>

<script>
import Gallery from '@/components/Gallery.vue'


export default {
  name: 'App',
  components: {
    Gallery,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

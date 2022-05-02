<template>
  <div class="card">
    <img id="characterImg" v-bind:src="imageUrl"> 
    <p>{{fullName}}</p>
    <p>{{title}}</p>
    <p>{{family}}</p>
  </div>
</template>

<script>
export default {
    name : 'App',
    props:{
      imageUrl: String,
      fullName : String,
      title : String,
      family : String,
    }
}
</script>

<style>
.card{
  background-color: peachpuff;
  padding: 3%;
  margin: 2%;
  border-radius: 20px;
}

#characterImg {
  max-height: 250px;
}

</style>
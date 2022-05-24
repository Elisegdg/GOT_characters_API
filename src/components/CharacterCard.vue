<template>
  <div class="card">
    <div class="card__inner" @click="cardIsClicked()" :class="{'is-flipped' : isActive}">
      <div class="card__face card__face--front">
        <img id="characterImg" v-bind:src="imageUrl"> 
        <h2>{{fullName}}</h2>
      </div>
      <div class="card__face card__face--back">
        <div class="card__content">
          <div class="card__header">
            <img class="pp" id="characterImg" v-bind:src="imageUrl"> 
            <h2>{{fullName}}</h2>
          </div>
          <div class="card__body">
              <h4>{{title}}</h4>
              <h3>{{family}}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name : 'Cards',
    props:{
      imageUrl: String,
      fullName : String,
      title : String,
      family : String,
    },

    data() {
      return {
        isActive : false,
      }
    },

    methods : {
      cardIsClicked : function(){
        console.log("clicked");
        //this.$refs.myCard.classList.toggle('is-flipped');
        this.isActive = !this.isActive;
      }
    }
}

   


</script>

<style>
:root {
  --primary : #FFCE00;
  --secondary : #FE4880;
  --dark : #212121;
  --light : #F3F3F3;
}
.card{
  margin: 100px auto 0;
  width: 400px;
  height: 400px;
  padding: 3%;
}

.card__inner{
  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;
  cursor: pointer;
  position: relative;
}

.is-flipped{
  transform: rotateY(180deg);
}

.card__face {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  overflow: hidden;
  border-radius: 13px;
  box-shadow: 0px 3px 18px 3px rgba(0, 0, 0, 0.2) ;

}

.card__face--front {
  background-image: linear-gradient(to bottom right, var(--primary), var(--secondary));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.card__face--front h2 {
  color: #FFF;
  font-size: 32px;
}

.card__face--back {
  background-color: var(--light);
  transform: rotateY(180deg);
}

.card__content {
  width: 100%;
  height: 100%;
}

.card__header {
  position: relative;
  padding: 30px 30px 40px;
}

.card__header::after
{
  content: '' ;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  border-radius: 0 0 50% 0;
  background-image: linear-gradient(to bottom left, var(--primary) 10%, var(--secondary) 115%);
}

.pp {
  display: block;
  width: 128px;
  height: 128px;
  margin: 0 auto 30px;
  border-radius: 50%;
  background-color: #FFF;
  border : 5px solid #FFF;
  object-fit: cover;
}

.card__header h2{
  color: #FFF;
  text-align: center;
} 

#characterImg {
  max-height: 250px;
}

</style>
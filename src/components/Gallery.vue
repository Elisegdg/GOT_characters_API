<template>
<div>
    <div id="sort">
        <label for="select-character-family">Family</label>
			<select class="select" v-model="characterFamily" id="select-character-family" >
                <option value="">All</option>
                <option value="Targaryen">House Targaryen</option>
                <option value="Tarly">House Tarly</option>
                <option value="Stark">House Stark</option>
                <option value="Baratheon">House Baratheon</option>
                <option value="Lannister">House Lannister</option>
			</select>
        <label for="select-character-sort">Sort by : </label>
            <select class="select" v-model="gotSortType" id="select-character-sort" >
                <option value="AZlastName">Last name from A to Z</option>
                <option value="ZAlastName">Last name from Z to A</option>
                <option value="AZfirstName">First name from A to Z</option>
                <option value="ZAfirstName">First name from Z to A</option>
			</select>
    </div>
    <div class="gallery">
        <CharacterCard class="myCard" v-for="gotData in gotOrganizedData" v-bind:key="gotData.id" :imageUrl="gotData.imageUrl" :fullName="gotData.fullName" :title="gotData.title" :family="gotData.family" :lastName="gotData.lastName" :firstName="gotData.firstName"/>
    </div>
</div>
</template>

<script>
import CharacterCard from '@/components/CharacterCard.vue'
import getGotData from '@/services/gotAPI.js'
getGotData()

export default {
    name : 'App',
  components: {
      CharacterCard,
  },
  computed: {
    gotOrganizedData : function() {
      const field = ["AZlastName", "ZAlastName"].includes(this.gotSortType) ? "lastName" : "firstName"
      const reversed = ["ZAlastName", "ZAfirstName"].includes(this.gotSortType)
      const filterFunc = (a) => a.lastName.toLowerCase().includes(this.search.toLowerCase())
      const comparator = (a,b) => a[field].localeCompare(b[field])
      let data = this.gotDatas.filter(filterFunc)
      data = data.sort(comparator)
      if (reversed) data = data.reverse()
      return data
    }
  },
  data() {
      return {
      gotDatas: [],
      search: "",
      gotSortType: "AZlastName"
    }
  },
  created: function(){
      this.retrieveGotData()
  },
  methods: {
      async retrieveGotData() {
          this.gotDatas = await getGotData();
          console.log(this.gotDatas);
      },
  }
}
</script>

<style>

.gallery{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
</style>
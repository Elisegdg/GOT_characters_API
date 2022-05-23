<template>
<div>
    <div>
        <GalleryOptions :search.sync="search" :gotSortType.sync="gotSortType"/>
    </div>
    <div class="gallery">
        <CharacterCard class="myCard" v-for="gotData in gotOrganizedData" v-bind:key="gotData.id" :imageUrl="gotData.imageUrl" :fullName="gotData.fullName" :title="gotData.title" :family="gotData.family" :lastName="gotData.lastName" :firstName="gotData.firstName"/>
    </div>
</div>
</template>

<script>
import CharacterCard from '@/components/CharacterCard.vue'
import GalleryOptions from '@/components/GalleryOptions.vue'
import getGotData from '@/services/gotAPI.js'
getGotData()

export default {
    name : 'Gallery',
  components: {
      CharacterCard,
      GalleryOptions,
  },
  watch: {
		search: function(newSearch) {
			localStorage.setItem("search", newSearch)
		},
		gotSortType: function(newGotSortType) {
			localStorage.setItem("gotSortType", newGotSortType)
		}
	},
  computed: {
    gotOrganizedData : function() {
      return this.sortCharacters(this.searchCharacters(this.gotDatas))
    }
  },
  data() {
      return {
      gotDatas: [],
      search: localStorage.getItem("search") || "",
      gotSortType: localStorage.getItem("gotSortType") || "AZName"
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

      sortCharacters: function(data){
        const field = ["AZlastName", "ZAlastName"].includes(this.gotSortType) ? "lastName" : "firstName"
        const reversed = ["ZAlastName", "ZAfirstName"].includes(this.gotSortType)
        const comparator = (a,b) => a[field].localeCompare(b[field])
        data = data.sort(comparator)
        if (reversed) data = data.reverse()
        return data
      },

      searchCharacters: function(data){
          return data.filter(gotData => gotData.fullName.toLowerCase().includes(this.search.toLowerCase()))
      },
  }
}

//localStorage.setItem("search", this.search)
//localStorage.setItem("gotSortType", this.gotSortType)
</script>

<style>

.gallery{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

.select {
  padding: 0.3%;
  border-radius: 8px;
  border-color: black;
  cursor: pointer;
}

label {
  margin-left: 3%;
  margin-right: 1%;
}

#sort {
  margin-bottom: 2%;
}

.search {
width: 60%;
margin: 2%;
padding: 0.5%;
border-radius: 10px;
border-color: black;
font-size: 17px;
}
</style>
<template>
	<div class="gallery-options">
         <input class="search" type="text" :value="search" @input="onSearchChanged" placeholder="Search a character">
        <div id="sort">
            <label for="select-character-sort">Sort by :</label>
                <select class="select" :value="gotSortType" @input="onGotSortTypeChanged" id="select-character-sort">
                    <option value="AZlastName">Last name from A to Z</option>
                    <option value="ZAlastName">Last name from Z to A</option>
                    <option value="AZfirstName">First name from A to Z</option>
                    <option value="ZAfirstName">First name from Z to A</option>
				</select>
		</div>
	</div>
</template>

<script>
export default {
  name: 'GalleryOptions',
	props: {
		search: String,
		gotSortType: String
  },
	watch: {
		search: function(newSearch) {
			localStorage.setItem("search", newSearch)
		},
		gotSortType: function(newGotSortType) {
			localStorage.setItem("gotSortType", newGotSortType)
		}
	},
	methods: {
		onSearchChanged(event) {
			this.$emit('update:search', event.target.value) 
		},
		onGotSortTypeChanged(event) {
			this.$emit('update:gotSortType', event.target.value) 
		},
	}
}
</script>
<template>
  <div v-for="movie in movies" :key="movie.id">
	<router-link :to="{name: 'JobDetails', params: {id: movie.id}}">
		<h2>{{movie.title}}</h2>
	</router-link>
		<!-- <h2>{{movie.id}}---{{movie.title}}</h2> -->
  </div>
</template>

<script>
import {reactive} from "vue"

export default {
	name: "JobS",
	setup(){
			const movies = reactive([
			{
				title:  "Hulk",
				id: 1,
				details: "lorem"
			},
			{
				title:  "James Bond",
				id: 2,
				details: "lorem"
			},
			{
				title:  "Batman",
				id: 3,
				details: "lorem"
			}
		])

		return{
			movies
		}
	}
}
</script>

<style>

</style>
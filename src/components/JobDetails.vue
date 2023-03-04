<template>
  <h1>Jobs Details Page</h1>
  <p>Getting the params in the url  {{$route.params.id}}</p>
  <p>{{data}}</p>
</template>

<script>
import { useRoute } from 'vue-router'
import { ref } from 'vue'
export default {
	name: "JobsDetails",
	setup(){
		const data = ref("")
		data.value = useRoute().params.id

		return{
			data
		}
	}
}
</script>

<style>

</style>
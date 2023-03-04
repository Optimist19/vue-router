<template>
  <h3>This is About Page</h3>
	<router-link to="/">Back to Home</router-link>

	<router-view/>
	 <br />

	<router-link to="/NestedAbout">click to see nested component</router-link>


</template>

<script>
export default {
	name: "AboutPage"
}
</script>

<style>

</style>
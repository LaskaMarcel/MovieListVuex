<template>
  <div id="wrapper">
      <h1> Keep track of your favourite movies!</h1>
      <AddMovie/>
      <MovieList/>
  </div>
</template>

<script>

import AddMovie from './AddMovie'
import MovieList from './MovieList'

export default {
    name: "homepage",
    components: {
      AddMovie,
      MovieList
    }
}
</script>

<style scoped>

#wrapper {
  background: linear-gradient(180deg, rgb(0, 213, 255) 0%, rgb(149, 239, 255) 100%);
  padding-top: 25px;
  padding-bottom: 100px;
  color: black;
  border-radius: 50px;
  margin-bottom: 20px;
}

h1 {
  font-family: 'Alfa Slab One', cursive;
  text-align: center;
  color: deeppink;
  text-shadow: 3px 3px #ffffff;
  margin-bottom: 25px;
}

</style>
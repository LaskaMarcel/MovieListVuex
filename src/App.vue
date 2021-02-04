<template>
  <div id="app">
    <div id="header">
      <h1>MOVIELIST</h1>
    </div>
     <nav id="navbar">
      <router-link to="/">HOME</router-link>
      <router-link to="/addMovie">ADD MOVIE</router-link>
      <router-link to="/movieList">MOVIE LIST</router-link>
    </nav>

    <router-view/>
  </div>
</template>

<script>

export default {
  components: {

  },
};
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap');

* {
  margin: 0;
  margin-left: 25px;
  margin-right: 25px;
}

#header {
  font-family: 'Alfa Slab One', cursive;
  font-size: 45px;
  background-color: deepskyblue;
  text-shadow: 3px 3px #ffffff;
  padding: 10px;
  text-align: center;
}

nav {
  font-size: 40px;
  background-color: deepskyblue;
  padding: 10px;
  text-align: center;
  border-bottom: 10px solid white;
}

nav > a {
  color: whitesmoke;
  font-family: 'Alfa Slab One', cursive;
  text-decoration: none;
    text-shadow: 3px 3px #ff1493;
}

nav > a:hover{
   color: black;
  text-shadow: 3px 3px  #ff1493;
}

nav > a.router-link-exact-active {
  color: #ff1493;
  text-shadow: 3px 3px #ffffff;
}

</style>

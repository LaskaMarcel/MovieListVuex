<template>
  <div class="movie-card" @click="deleteMovie">

    <div class="title-rating wrapper">
      <span class="title">{{ movie.title }}</span>
      <span>{{ movie.genre }}</span>
      <span class="rating">{{ movie.rating }}/5</span>
    </div>
    <br>
    <div class="desc wrapper">
      <p>{{ movie.desc }}</p>
    </div>

  </div>
</template>

<script>
export default {
  props: ["movie"],
  methods: {
    deleteMovie() {
      this.$store.commit("removeMovie", this.movie);
    },
  },
};
</script>

<style scoped>

.movie-card {
  background-color: deepskyblue;
  margin-bottom: 20px;
  padding: 10px;
  font-family: 'Alfa Slab One', cursive;
  border-radius: 30px;
  border: 5px solid whitesmoke;
}

.title {
  font-size: 25px;
   text-shadow: 2px 2px #ffffff;
}

.rating {
  float: right;
  font-size: 30px;
  color: deeppink;
   text-shadow: 3px 3px #000000;
}

p {
  color: white;
  text-shadow: 2px 2px #000000;
}

</style>

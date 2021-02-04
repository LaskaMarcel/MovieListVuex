<template>
  <div class="add-movie">

    <form @submit.prevent="createMovie">
      <div class="title wrapper">
        <h3>Title</h3>
        <input id="title" type="text" v-model="title" />
      </div>

      <div class="rating wrapper">
        <h3>Rating {{rating}}</h3>
        <input id="rating" type="range" min="1" max="5" v-model="rating" />
      </div>

      <div class="genre wrapper">
        <h3>Genre</h3>
        <select id="genre" name="genre" v-model="genre">
          <option v-for="(genre, i) in genres" :key="i" :value="genre">{{
            genre
          }}</option>
        </select>
      </div>

      <div class="desc wrapper">
        <h3>Description</h3>
        <textarea
          id="description"
          name="description"
          cols="30"
          rows="10"
          v-model="desc"
        ></textarea>
      </div>

      <button>Add</button>
    </form>
  </div>
  
</template>

<script>

export default {
  name: 'addMovie',
  data() {
    return {
      title: "",
      rating: "3",
      genre: "",
      desc: "",
      genres: [
        "Drama",
        "Action",
        "Comedy",
        "Fantasy",
        "Reality",
        "Science Fiction",
      ],
    };
  },

  methods: {
    createMovie() {
      let newMovie = {
        title: this.title,
        rating: this.rating,
        genre: this.genre,
        desc: this.desc
      }

      this.$store.commit("addNewMovie", newMovie);
    },
  },
};
</script>

<style scoped>

.add-movie {
  text-align: center;
  margin-bottom: 25px;
}

div {
  margin-top: 10px;
}

form {
  padding: 20px;
  font-family: 'Alfa Slab One', cursive;
}

button {
  width: 200px;
  font-family: 'Alfa Slab One', cursive;
  background-color: deeppink;
  color: white;
  border-radius: 50px;
  text-shadow: 2px 2px #000000;
}
</style>

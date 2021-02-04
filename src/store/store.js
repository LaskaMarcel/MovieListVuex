import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [
      {
        title: "Lord of the Rings: The Fellowship of the Ring",
        rating: 5,
        genre: "Fantasy",
        desc: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
      },
      {
        title: "The Town",
        rating: 4,
        genre: "Action",
        desc: "A longtime thief, planning his next job, tries to balance his feelings for a bank manager connected to an earlier heist, and a hell-bent F.B.I Agent looking to bring him and his crew down.",
      },
    ],
  },
  mutations: {
    removeMovie(state, movieToRemove) {
      state.movies = state.movies.filter((movie) => movieToRemove !== movie);
    },
    addNewMovie(state, movieToAdd) {
      state.movies.unshift(movieToAdd);
    }
  },
});

import Vue from 'vue'
import VueRouter from 'vue-router'
import AddMovie from '@/components/AddMovie.vue'
import MovieList from '@/components/MovieList.vue'
import Home from '@/components/Homepage.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
      {
      path: '/',
      component: Home
    },
    {
      path: '/addMovie',
      component: AddMovie
    }, 
    {
      path: '/movieList',
      component: MovieList
    }
  ]
})

export default router

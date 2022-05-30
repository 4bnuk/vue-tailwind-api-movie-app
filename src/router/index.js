import { createRouter, createWebHistory } from 'vue-router'
import Movies from '../views/Movies.vue'
import People from '../views/People.vue'
import About from '../views/About.vue'
import Movie from '../views/Movie.vue'
import Person from '../views/Person.vue'

const routes = [
  {
    path: '/',
    name: 'Movies',
    component: Movies,
  },
  {
    path: '/people',
    name: 'People',
    component: People,
  },
  {
    path: '/person/:id',
    name: 'Person',
    component: Person,
    props: true,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  ,
  {
    path: '/movie/:id',
    name: 'Movie',
    component: Movie,
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router

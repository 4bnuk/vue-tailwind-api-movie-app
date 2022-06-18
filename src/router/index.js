import { createRouter, createWebHistory } from 'vue-router'
import MoviesIndex from '../views/MoviesIndex.vue'
import PeopleIndex from '../views/PeopleIndex.vue'
import TvShowsIndex from '../views/TvShowsIndex.vue'
import TvShowDetail from '../views/TvShowDetail.vue'
import MovieDetail from '../views/MovieDetail.vue'
import PersonDetail from '../views/PersonDetail.vue'
import PageNotFound from '../views/PageNotFound.vue'

const routes = [
  {
    path: '/',
    name: 'MoviesIndex',
    component: MoviesIndex,
  },
  {
    path: '/people',
    name: 'PeopleIndex',
    component: PeopleIndex,
  },
  {
    path: '/person/:id',
    name: 'PersonDetail',
    component: PersonDetail,
    props: true,
  },
  {
    path: '/tvShows',
    name: 'TvShowsIndex',
    component: TvShowsIndex,
  },
  ,
  {
    path: '/movie/:id',
    name: 'MovieDetail',
    component: MovieDetail,
    props: true,
  },
  {
    path: '/tvShow/:id',
    name: 'TvShowDetail',
    component: TvShowDetail,
    props: true,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'PageNotFound',
    component: PageNotFound,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        selector: to.hash
      };
    } else {
      window.scrollTo(0, 0)
    }
  }
})

export default router

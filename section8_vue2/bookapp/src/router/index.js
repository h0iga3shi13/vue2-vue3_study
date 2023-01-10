import Vue from 'vue'
import VueRouter from 'vue-router'
import BookIndex from '../pages/BookIndex.vue'
import BookEdit from '../pages/BookEdit.vue'
import BookSearch from '../pages/BookSearch.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'BookIndex',
    component: BookIndex
  },
  {
    path: '/edit/:id',
    name: 'BookEdit',
    component: BookEdit
  },
  {
    path: '/search',
    name: 'BookSearch',
    component: BookSearch
  },
  {
    path: '*',
    redirect: '/'
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

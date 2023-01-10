import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BookList from '../views/BookList.vue'
import BookDetail from '@/components/BookDetail.vue'
import ItemView from '../views/ItemView.vue'
import NotFound from '@/components/NotFound.vue'
import UserView from '@/views/UserView.vue'
import UserProfile from '@/components/UserProfile.vue'
import UserPost from '@/components/UserPost.vue'
import HomeSub from '@/components/HomeSub.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    components: {
      default: HomeView,
      sub: HomeSub
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/book',
    name: 'BookList',
    component: BookList
  },
  {
    path: '/book/:id',
    name: 'Book',
    component: BookDetail,
    props: route => ({
      id: Number(route.params.id),
      title: route.params.title,
      content: route.params.content
    })
  },
  {
    path: '/item/:id',
    name: 'Item',
    component: ItemView,
    // ナビゲーションガードをpage単位で設定するパターン(クライアントが行ったアクションの行動履歴をページごとに取得)
    // beforeEnter: (to, from, next) => {

    // }
  },
  {
    path: '/user',
    component: UserView,
    // Userページをネストさせる
    children: [
      {
        path: 'profile',
        component: UserProfile
      },
      {
        path: 'post',
        component: UserPost
      }
    ]
  },
  {
    path: '*',
    // 上記で設定しているpathと一致しないものすべてを対象にhome画面へリダイレクトさせる
    // redirect: '/'
    // 上記で設定しているpathと一致しないものすべてを対象に404ページに遷移させる
    name: NotFound,
    component: NotFound
  }
]

const router = new VueRouter({
  // historyモードが設定されている
  mode: 'history',
  // historyがdistに吐き出されるように設定されている
  base: process.env.BASE_URL,
  routes
})

// ナビゲーションガードをglobalで設定するパターン(クライアントが行ったアクションの行動履歴を取得)
router.beforeEach((to, from, next) => {
  console.log(to)
  console.log(from)
  next()
})

export default router

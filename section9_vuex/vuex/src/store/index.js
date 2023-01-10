import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 初期値を設定する(data の使い方と同じようなイメージ)
    count: 0,
    users: [
      { id: 1, name: '大谷 翔平', isVisible: true },
      { id: 2, name: 'ダルビッシュ 有', isVisible: true },
      { id: 3, name: '鈴木 誠也', isVisible: true },
      { id: 4, name: '筒香 嘉智', isVisible: false },
      { id: 5, name: '菊池 雄星', isVisible: false },
      { id: 6, name: '沢村 拓一', isVisible: false },
      { id: 7, name: '前田 健太', isVisible: true },
      { id: 8, name: '有原 航平', isVisible: false },
      { id: 9, name: '千賀 滉大', isVisible: true },
    ]
  },
  getters: {
    // visibleUsers( state ) {
    //   return state.users.filter( user => user.isVisible )
    // }

    // Arrow関数を用いた記述方法
    visibleUsers: state => state.users.filter( user => user.isVisible ),

    getUserById: state => id => {
      return state.users.find( user => user.id === id )
    }
  },
  mutations: {
    increment( state ) {
      state.count++
    },
    addCount( state, payload ) { // 第2引数はオブジェクト
      // state.count の値に payload から渡ってきた値を足し算する
      state.count += payload.value
    }
  },
  actions: {
    // incrementAction( context ) {
    //   context.commit('increment')
    // },
    incrementAction( { commit }) {
      commit('increment')
    },
    addCountAction( { commit }, payload ) {
      commit('addCount', payload)
    }
  },
  modules: {
    auth
  }
})

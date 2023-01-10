const state = {
  loginUserName: ''
}

const getters = {}

const mutations = {
  setLoginUser( state, user ) {
    state.loginUserName = user.name
  }
}

const actions = {
  setLoginUser({ commit }, user ) {
    commit('setLoginUser', user )
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

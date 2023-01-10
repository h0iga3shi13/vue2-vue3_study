<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <button @click="setLogin">ログイン名表示</button>
    </nav>
    <router-view/>
    {{ $store.state.count }}
    <br>
    <p>日本人メジャーリーガー一覧</p>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.id }}：{{ user.name }}
      </li>
    </ul>
    <br>

    <p>現在試合に出ている日本人メジャーリーガー一覧</p>
    <ul>
      <li v-for="user in visibleUsers" :key="user.id">
        {{ user.id }}：{{ user.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions('auth', ['setLoginUser']),
    setLogin() {
      this.setLoginUser({
        name: 'loginTestUser'
      })
    }
  },
  computed: {
    users() {
      return this.$store.state.users
    },
    visibleUsers() {
      return this.$store.getters.visibleUsers
    },
    getUserById() {
      return this.$store.getters.getUserById(1)
    }
  }
}
</script>

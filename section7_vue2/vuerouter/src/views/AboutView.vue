<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="checkRouteInfo">ルート情報</button><br>
    <button @click="goToHome">Homeに戻る</button>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  methods: {
    checkRouteInfo() {
      console.log(this.$route)
      console.log(this.$route.path)
      console.log(this.$router)
    },
    goToHome() {
      this.$router.push('/')
    }
  },
  // ナビゲーションガードをcomponent単位で設定するパターン(クライアントが行ったアクションの行動履歴をページごとに取得)
  beforeRouteLeave(to, from, next) {
    const checkLeave = window.confirm('本当にこのページを離れますか？')
    if(checkLeave) {
      next()
    } else {
      next(false)
    }
  }
}
</script>

<template>
  <div>
    <!-- <button @click="increment">+</button> -->
    <button @click="incrementAction">+</button>
    <br>
    <button @click="addCount">+10</button>
  </div>
</template>

<script>
// mapActionsヘルパーの読み込み
import { mapActions } from 'vuex'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    // increment() {
    //   this.$store.commit('increment')
    // },
    // addCount() {
    //   this.$store.commit('addCount', {
    //     // オブジェクトの型(index.js ファイルの addCount()の第二引数の値)を指定する
    //     value: 10
    //   })
    // }

    // mapヘルパーを使ったactionsの呼び出し
    ...mapActions(['incrementAction', 'addCountAction']),
    addCount() {
      this.addCountAction({
        value: 10
      })
    }

    // actions で設定したメソッドを呼び出す書き方
    // increment() {
    //   this.$store.dispatch('incrementAction')
    // },
    // addCount() {
    //   this.$store.dispatch('addCountAction', {
    //     value: 10
    //   })
    // }
  }
}
</script>

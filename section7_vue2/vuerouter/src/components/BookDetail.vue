<template>
  <div>
    <p>本の詳細</p>
    <p>タイトル： {{ title }}</p>
    <p>本の内容： {{ content }}</p>
    {{ books[bookIndex].title }}
  </div>
</template>

<script>
export default {
  // (渡されてくるデータの受け皿側で)データ型を指定する
  props: {
    id: Number,
    title: String,
    content: String
  },
  data() {
    return {
      bookIndex: this.$route.params.id -1,
      books: [
        {
          id: 1,
          title: '本のタイトル1',
          content: '本の内容1'
        },
        {
          id: 2,
          title: '本のタイトル2',
          content: '本の内容2'
        },
        {
          id: 3,
          title: '本のタイトル3',
          content: '本の内容3'
        }
      ]
    }
  },
  created() {
    // もし、存在しないidが入力された場合は、BookList.vue ページにリダイレクトする
    if (this.$route.params.id > this.books.length) {
      this.$router.push('/book')
    }
  }
}
</script>

<style>

</style>

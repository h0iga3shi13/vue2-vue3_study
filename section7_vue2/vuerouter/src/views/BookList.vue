<template>
  <div>
    <h1>本の一覧</h1>
    <ul>
      <li
        @click="showBookDetail(book.id)"
        v-for="book in books"
        :key="book.id">
        {{ book.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BookList',
  data() {
    return {
      // v-for で表示する際に「何番目をクリックしたか」の情報を取得するため
      bookIndex: -1,
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
  methods: {
    showBookDetail(id) {
      this.bookIndex = id -1
      console.log(this.bookIndex)
      this.$router.push({
        name: 'Book', // index.jsのBookDetailのpath設定で使っているnameを指定する
        params: {
          id: this.books[this.bookIndex].id,
          title: this.books[this.bookIndex].title,
          content: this.books[this.bookIndex].content
        }
      })
    }
  }
}
</script>

<style>

</style>

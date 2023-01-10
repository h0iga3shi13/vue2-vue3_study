const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // historyモードの設定のために必要また、本番環境でpathの先頭に'/'が存在するとうまく動作しない場合もあるので''にしておく
  publicPath: ''
})

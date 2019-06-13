module.exports = {
  devServer: {
    proxy: {
      '/Service': {
        target: 'http://m.mtime.cn',
        // ws: true,
        changeOrigin: true
      },
      '/foo': {
        target: '<other_url>'
      }
    }
  },
  lintOnSave: false 
}

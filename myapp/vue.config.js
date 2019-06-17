module.exports = {
  devServer: {
    proxy: {
      '/Service': {
        target: 'https://m.mtime.cn',
        changeOrigin: true
      },
      '/foo': {
        target: '<other_url>'
      },
      '/api': {
        target: 'https://ticket-m.mtime.cn',
        // ws:true,
        changeOrigin: true
      },
      '/cinema': {
        target: 'https://ticket-api-m.mtime.cn',
        changeOrigin: true
      }
    }
  }
}

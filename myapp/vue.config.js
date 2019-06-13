module.exports = {
    devServer: {
      proxy: {
        '/Service': {
          target: 'https://m.mtime.cn',
          changeOrigin: true
        },
        '/foo': {
          target: '<other_url>'
        }
      }
    }
  }
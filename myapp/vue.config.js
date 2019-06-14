module.exports = {
    devServer: {
      proxy: {
        '/Service': {
          target: 'https://m.mtime.cn',
          changeOrigin: true
        },
        '/PageSubArea': {
          target: 'https://m.mtime.cn/Service/callback.mi',
          changeOrigin: true
        },
        '/foo': {
          target: '<other_url>'
        },
        '/api':{
          target:'https://ticket-m.mtime.cn',
          // ws:true,
          changeOrigin:true
      },
      }
    }
  }

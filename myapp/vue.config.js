module.exports = {
    devServer: {
        proxy: {
            '/api':{
                target:'https://ticket-m.mtime.cn',
                // ws:true,
                changeOrigin:true
            },
            '/foo':{
                target:'<other_url>'
            }
        }
    },

}
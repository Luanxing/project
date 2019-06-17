module.exports = {
    devServer: {
        proxy: {
            '/api':{
                target:'https://ticket-m.mtime.cn',
                // ws:true,
                changeOrigin:true
            },
            '/cinema':{
                target:'https://ticket-api-m.mtime.cn',
                changeOrigin:true
            }
        }
    },
lintOnSave:false
}


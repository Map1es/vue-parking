module.exports = {
    dev: {
        proxy: {
            '/**': {
                target: 'http://134.175.55.2:8080/parking-manage-children/',
                changeOrigin: true,
            }
        }
    }
}
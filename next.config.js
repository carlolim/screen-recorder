const withCSS = require('@zeit/next-css');
const webpack = require('webpack')
const isProd = (process.env.NODE_ENV || 'production') === 'production'
const assetPrefix = isProd ? '/screen-recorder' : ''
module.exports = withCSS({
    exportPathMap: () => ({
        '/': { page: '/' },
        '/recorder': { page: '/recorder' },
        '/help': { page: '/help' },
        '/waitlang': { page: '/waitlang' },
    }),
    assetPrefix: assetPrefix,
    webpack: config => {
        config.plugins.push(
            new webpack.DefinePlugin({
                'process.env.ASSET_PREFIX': JSON.stringify(assetPrefix),
            }),
        )

        return config
    },
})
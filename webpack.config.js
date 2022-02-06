const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: process.env.PORT || 8080, /* default : 8080 */
    },
    plugins: [],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: /* true */{
            keep: /.html$/, /* to preserve index.html in case re-bundling required */
        },
    }
}
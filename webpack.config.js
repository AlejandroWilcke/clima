const path = require('path');

module.exports = {

    entry: './front/src/index.js',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'front/dist')
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'front/src'),
                use: ['babel-loader']
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ]
    },

}
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const path = require('path');

const ruleForStyles = {
    test: /\.css$/,
    use: ["style-loader", "css-loader"]
}

const rulesForJavaScriptAndJSX = {
    test: /\.(js|jsx)$/,
    loader: 'babel-loader',
    options: {
        presets: [
            [
                '@babel/preset-react',
                {
                    runtime: 'automatic'
                }
            ]
        ]
    }
}

const rules = [
    rulesForJavaScriptAndJSX,
    ruleForStyles
]

module.exports = {
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin({ template: "src/index.html" }),
        new Dotenv(),
    ],
    module: {
        rules
    },
    devServer: {
        open: true,
        port: 3000
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    devtool: "source-map"
}
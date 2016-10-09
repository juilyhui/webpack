
// 这是配置文件
// 也是一个简单的JavaScript模块


// “__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。


var webpack = require('webpack');


module.exports = {
    devtool: 'eval-source-map', // 配置生成Source Maps，选择合适的选项
    entry: __dirname + '/app/main.js', // 入口文件
    output: {
        path: __dirname + '/public', // 打包后文件存放的位置
        filename: 'bundle.js' // 打包后输出文件的文件名
    },
    module: {
        loaders: [
            //在配置文件里添加JSON loader
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel', // 在webpack的module部分的loaders里进行配置即可
                // 分两个配置文件进行配置，webpack会自动调用.babelrc里的babel配置选项
                // query: {
                //     presets: ['es2015', 'react']
                // }
            },
            {
                test: /\.css$/,
                loader: 'style!css?modules' // 添加对样式表的处理，感叹号的作用在于使同一文件能够使用不同类型的loader
            }
        ]
    },
    postcss: [
        require('autoprefixer') //调用autoprefixer插件, css自动添加前缀的插件
    ],
    plugins: [
        new webpack.BannerPlugin("Copyright Flying Unicorns inc.") //在这个数组中new一个就可以了
    ], // 插件
    devServer: {
        // contentBase: "./public",//本地服务器所加载的页面所在的目录
        colors: true, // 终端输出结果为彩色
        historyApiFallback: true, // 不跳转
        inline: true // 实时刷新
    }

}

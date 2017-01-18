/**
 * Created by sea35 on 2017/1/17.
 */
var webpack = require('webpack');

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
module.exports = {
    //插件项
    //plugins:[commonsPlugin],
    //页面入口文件配置
    entry: {
        index : './src/index.js'
    },
    //入口文件输出配置
    output:{
        path:'./lib',
        filename: '[name].js'
    },
    externals: {     //排除构建文件外
           'react': 'React',
           'antd':'antd',
           'dva':'dva'
       },
    module: {
        //加载器配置
        loaders:[
            {
                test: /\.css$/,loader: 'style-loader!css-loader'
            },
            {
                test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'
            },
            {
                test: /\.js$/, loader: 'babel-loader', query:{
                presets:['es2015','react']
            }
            },
            {
                test: /\.jsx$/, loader: 'babel-loader!jsx-loader?harmony'
            }
        ]
    },
    resolve: { extensions: ['', '.js', '.jsx'] }
}
const {
    VueLoaderPlugin
} = require('vue-loader')
//遍历文件夹的库
const glob = require('glob');
// 构造绝对路径
const path = require('path');

const List = {};
/* 动态的使用 glob.sync 方法 遍历compoents文件目录 */
async function makeList(dirPath, List) {
    const files = glob.sync(`${dirPath}/**/index.js`)
    console.log(files);
    for (let file of files) {
        const component = file.split(/[/.]/)[2];
        console.log(component);
        //配置list对象
        List[component] = `./${file}`;
    }
    console.log(List);
}
makeList('components/lib', List)

module.exports = {
    entry: List,
    mode: 'development',
    output: {
        filename: '[name].umd.js', //card.umd.js
        path: path.resolve(__dirname, 'dist'),
        library: 'mui',
        libraryTarget: 'umd',
    },
    //配置vue-loader
    plugins: [
        new VueLoaderPlugin(),
    ],
    module: {
        rules: [{
            test: /\.vue$/,
            use: [{
                loader: 'vue-loader'
            }]
        }]
    }
};
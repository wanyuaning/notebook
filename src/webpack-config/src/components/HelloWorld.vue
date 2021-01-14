<template>
  <div class="container">
    
    <div class="options">
      <div v-for="(item, index) in occurDate" :key="index"> 
        <input type="checkbox" v-if="item.type==='checkbox'" v-model="item.value" /><input type="radio" v-if="item.type==='radio'" :value="item.name" v-model="mode" /> {{item.title}}
      </div>
    </div>
    <div class="config-content">
      <pre><i v-if="0">
      const HtmlWebpackPlugin = require('html-webpack-plugin') // yarn add html-webpack-plugin -D</i><i v-if="0">
      const MiniCssExtractPlugin = require('mini-css-extract-plugin')</i><i v-if="0">
      let path = require('path')</i>

      module.exports = {<i v-if="occurDate.entry.value">
        entry: './src/index.js',                           // 相对路径</i><i v-if="occurDate.output.value">
        output: {
          filename: 'bundle.js',
          path: path.resolve(__dirname, 'dist'),           // 绝对路径
        },</i><i v-if="mode==='development'">
        mode: 'development',</i><i v-if="mode==='production'">
        mode: 'production',</i><i v-if="occurDate.devServer.value">
        devServer: {
          port: 3000,             // 端口
          progress: true,         // 显示进度条
          contentBase: './build', // 重新指定服务目录
          compress: true,         // 压缩
        },</i><i v-if="occurDate.HtmlWebpackPlugin.value || occurDate.MiniCssExtractPlugin.value">
        
        plugins: [<i v-if="occurDate.HtmlWebpackPlugin.value">
          new HtmlWebpackPlugin({
            template: './src/index.html',  // 模板地址 
            filename: 'index.html',        // 打包后的文件名      
            minify: {                      // 压缩
              removeAttributeQuotes: true, // 删除属性双引号
              collapseWhitespace: true     // 折叠空行
            },      
            hash: true                     // 给资源加HASH引用参 与output: {filename: 'bundle.[hash:8].js'}不同      
          }),</i><i v-if="occurDate.MiniCssExtractPlugin.value">
          new MiniCssExtractPlugin({
            filename: 'main.css'           // 抽离出来的文件名
          })</i> 
        ],</i><i v-if="occurDate.ResCSS.value || occurDate.ResLess.value || occurDate.ResImage.value || occurDate.ResText.value">
        
        module: {
          rules: [<i v-if="occurDate.ResLess.value">
            {
              test: /\.less$/, 
              use:[
                MiniCssExtractPlugin.loader, 
                'css-loader',
                'less-loader'
              ]
            },</i><i v-if="occurDate.ResCSS.value">
            {
              test: /\.css$/, 
              use:[
                {
                  loader: 'style-loader',
                  options: {
                    insertAt: 'top', // 资源插入到模板的位置
                  }
                }, 
                'css-loader'
              ]
            },</i><i v-if="occurDate.ResImage.value">
            {test: /\.(png|jpg|gif)$/, use: 'file-loader'}</i><i v-if="occurDate.ResText.value">
            { test: /\.txt$/, use: 'raw-loader' }</i>
          ]
        }</i>
      }
      </pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
      testStr: '测试文本',
      occurDate: {
        entry: {value: 1, type: 'checkbox', name: 'entry', title: '入口'},
        output: {value: 1, type: 'checkbox', name: 'output', title: '出口'},
        mode1:  {value: 0, type: 'radio', name: 'production', title: '生产模式'},
        mode2: {value: 0, type: 'radio', name: 'development', title: '开发模式'},
        devServer: {value: 0, type: 'checkbox', name: 'devServer', title: '开发服务'},
        HtmlWebpackPlugin: {value: 0, type: 'checkbox', name: 'HtmlWebpackPlugin', title: 'HTML模板注入'},
        MiniCssExtractPlugin: {value: 0, type: 'checkbox', name: 'MiniCssExtractPlugin', title: '抽离css样式成link标签形式'},
        ResCSS: {value: 0, type: 'checkbox', name: 'ResCSS', title: '资源CSS'},
        ResLess: {value: 0, type: 'checkbox', name: 'ResLess', title: '资源Less'},
        ResImage: {value: 0, type: 'checkbox', name: 'ResImage', title: '资源Image'},
        ResText: {value: 0, type: 'checkbox', name: 'ResText', title: '资源Text'}
        
      },
      mode: '',
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  display: flex;
  font-size: 12px;
}
.options{
  flex: 0 0 200px;
  background-color: #eee
}
.config-content{
  flex: 1 0 auto;
  color: #bbb;
}
  .config-content i{ font-style: normal;}
  .level2{text-indent: 2em;}
  .level3{text-indent: 4em;}
  .level4{text-indent: 6em;}
  .level5{text-indent: 8em;}
  .level6{text-indent: 10em;}
  .hide{display:none}

</style>

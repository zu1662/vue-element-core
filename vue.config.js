const path = require('path')
const webpack = require('webpack')

function resolve (dir) {
  return path.join(__dirname, dir)
}

// vue.config.js
const vueConfig = {
  configureWebpack: {
    plugins: [
      // Ignore all locale files of moment.js
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    ],
    // 关闭 webpack 的性能提示
    performance: {
      hints: false
    }
    // 或者使用以下方式
    // 警告 webpack 的性能提示
    // performance: {
    //   hints: 'warning',
    //   // 入口起点的最大体积
    //   maxEntrypointSize: 5000000,
    //   // 生成文件的最大体积
    //   maxAssetSize: 3000000,
    //   // 只给出 js 文件的性能提示
    //   assetFilter: function (assetFilename) {
    //     return assetFilename.endsWith('.js')
    //   }
    // }
  },

  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))

    // 将 icons 目录排除在 svg 默认规则之外
    config.module.rule('svg').exclude.add(resolve('src/icons')).end()
    // 用 svg-sprite-loader 处理 icons 下的 svg
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
      .use('svgo-loader') // 添加 svgo-loader
      .loader('svgo-loader')
      .options({
        plugins: [
          // { removeAttrs: { attrs: 'fill' } }, // 有些svg会存在fill颜色， 移除 svg 中的 fill 属性
          { removeTitle: true },
          { convertColors: { shorthex: false } },
          { convertPathData: false }
        ]
      })
      .end()
  },
  pluginOptions: {
    // 在每个组件内引入全局less变量
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        // 全局变量路径
        path.resolve(__dirname, './src/styles/var.less')
      ]
    }
  },
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: false,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      less: {
        modifyVars: {
          // less vars，customize ant design theme

          // 'primary-color': '#F5222D',
          // 'link-color': '#F5222D',
          // 'border-radius-base': '4px'
        },
        javascriptEnabled: true
      }
    }
  },

  devServer: {
    // 设置远程可以用dev模式
    // disableHostCheck: true,
    // development server port 8000
    port: 8000
    // If you want to turn on the proxy, please remove the mockjs /src/main.jsL11
    // proxy: {
    //   '/api': {
    //     target: 'http://127.0.0.1:8081',
    //     ws: false,
    //     changeOrigin: true
    //   }
    // }
  },

  // disable source map in production
  productionSourceMap: false,
  lintOnSave: undefined,
  // babel-loader no-ignore node_modules/*
  transpileDependencies: []
}

module.exports = vueConfig

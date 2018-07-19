module.exports = (isDev) => {
  return {
    preserveWhitepace: true,  // 删除template 内标签空格
    extractCss: !isDev, // .vue 文件中的stylus 单独打包
    cssModules: {
      // localIdentName: isDev ? '[path]-[name]-[hash:base:64:5]' : '[hash:base:64:5]',
      // camelCase: true
    }
  }
}

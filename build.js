const config = require('./webpack.config')
const webpack = require('webpack')

webpack(config, (error, stats) => {
  if (error || stats.hasErrors()) {
    console.error('fail')
  }
  console.log(stats.toString({
    // Add console colors
    colors: true
  }))
})
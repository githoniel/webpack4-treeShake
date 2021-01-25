const config = require('./webpack.config')
const path = require('path')
const webpack = require('webpack')
const fs = require('fs-extra')

fs.emptyDirSync(path.resolve(__dirname, 'dist'))

webpack(config, (error, stats) => {
  if (error || stats.hasErrors()) {
    console.error('fail')
  }
  console.log(stats.toString({
    // Add console colors
    colors: true
  }))
})
const withSass = require('@zeit/next-sass')
module.exports = withSass({
  sassLoaderOptions: {
    includePaths: ["absolute/path/a", "absolute/path/b"]
  }
})

const withCSS = require('@zeit/next-css')
module.exports = withCSS({/* my next config */})

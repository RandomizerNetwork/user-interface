const JavaScriptObfuscatorPlugin = require('webpack-obfuscator')
const { obfuscate } = require('javascript-obfuscator');
const { IS_BUNDLED_PAGE, MATCH_ROUTE_NAME } = require('next/dist/server/utils')

class NextJSBundleObfuscatorPlugin {
  constructor(options) {
    this.options = options
  }

  apply (compiler) {
    compiler.plugin('after-compile', (compilation, callback) => {
      const pages = Object
        .keys(compilation.namedChunks)
        .map(key => compilation.namedChunks[key])
        .filter(chunk => IS_BUNDLED_PAGE.test(chunk.name))
      pages.forEach((chunk) => {
        const obfuscated = obfuscate(compilation.assets[chunk.name].source(), this.options).getObfuscatedCode()
        compilation.assets[chunk.name] = {
          source: () => obfuscated,
          size: () => obfuscated.length
        }
      })
      callback()
    })
  }
}
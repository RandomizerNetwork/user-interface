// const path = require("path");
const withVideos = require('next-videos')

module.exports = withVideos({
  reactStrictMode: true,
  swcMinify: true,

  // webpack: {
  //   alias: {
  //     "magic-sdk": path.resolve(
  //       __dirname,
  //       "node_modules/magic-sdk/dist/cjs/index.js"
  //     ),
  //   },
  // },
})
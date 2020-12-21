const path = require("path")

module.exports = {
  resolve: {
    root: path.resolve(__dirname),
    alias: {
      "@": path.resolve(__dirname),
      "~": path.resolve(__dirname),
    },
  },
}

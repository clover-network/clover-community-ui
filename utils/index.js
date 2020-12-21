const navConfig = require("../config/nav-config")
module.exports = function jumpTo(navName) {
  navName = navName.toLocaleLowerCase()
  window.open(navConfig.outerDit[navName], "_blank")
}

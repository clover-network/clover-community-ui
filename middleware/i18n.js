import Cookie from "cookie"
// import { pcOrMobile } from '~/utils'

export default function (ctx) {
  if (process.server) {
    const cookies = Cookie.parse(ctx.req.headers.cookie || "")
    const cookiesLocale = cookies.locale || "en"
    const defaultLocale = cookiesLocale || ctx.app.i18n.fallbackLocale
    ctx.app.i18n.locale = defaultLocale
    ctx.store.commit("SET_LANG", defaultLocale)
  }
  // const u = ctx.userAgent = process.server ? ctx.req.headers['user-agent'] : navigator.userAgent
  // if (pcOrMobile(u) !== 'pc' && ctx.route.fullPath.indexOf('/m') === -1) {
  //   ctx.redirect('/m' + ctx.route.fullPath)
  // }
  // if (pcOrMobile(u) === 'pc' && ctx.route.fullPath.indexOf('/m') > -1) {
  //   ctx.redirect(ctx.redirect(ctx.route.fullPath.split('/m').join('')))
  // }
}

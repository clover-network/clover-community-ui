const target = "http://faucet-api.clovernode.com/clover/"

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_1432256_b1321qx6myb.css",
      }
    ],
    script: [
      { src: `//at.alicdn.com/t/font_1432256_b1321qx6myb.js`, async: true },
      {
        src: `https://www.googletagmanager.com/gtag/js?id=UA-160270407-1`,
        async: true,
      },
      {
        // Global site tag (gtag.js) - Google Analytics
        type: "text/javascript",
        // GA_MEASUREMENT_ID 替换为你刚刚注册得到的媒体资源ID
        innerHTML: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-160270407-1');
        `,
      },
    ],
    __dangerouslyDisableSanitizers: ["script"],
  },
  /*
   ** Global CSS
   */
  css: ["~assets/scss/global.scss", "~assets/fonts/nasalization/font.css"],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    "~/plugins/i18n.js",
    "~/plugins/clipboard2.js",
  ],
  router: {
    middleware: "i18n",
  },
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // "@nuxtjs/eslint-module",
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    "bootstrap-vue/nuxt",
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    "@nuxtjs/style-resources",
    "vue-scrollto/nuxt",

    // Or if you have custom options...
    [
      "vue-scrollto/nuxt",
      {
        duration: 500,
        container: "body",
        easing: "ease",
        offset: 100,
        force: true,
        cancelable: true,
        onStart: false,
        onDone: false,
        onCancel: false,
        x: false,
        y: true,
      },
    ],
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    proxy: true
  },
  proxy: {
    '/api': {
      target,
      pathRewrite: {
        '^/api': '/api'
      }
    }
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    extend(config, ctx) {
      config.output.globalObject = "this"
      config.module.rules.push({
        test: /\.pdf$/,
        loader: "url-loader",
      })
    },
  },
  styleResources: {
    scss: [
      "./assets/scss/*.scss",
      "node_modules/bootstrap/scss/bootstrap.scss",
      "node_modules/bootstrap-vue/src/index.scss",
    ],
  },
  bootstrapVue: {
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: false, // Or `bvCSS: false`
    icon: true,
  },
  loading: {
    color: "#eb761c",
    height: "4px",
    css: {
      zIndex: 1000,
    },
  },
}

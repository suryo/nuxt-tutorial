export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-tutorial',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {
        charset: 'utf-8'
      },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~assets/css/tailwind.css",
    "@fortawesome/fontawesome-svg-core/styles.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "bootstrap-vue/nuxt",
    "@nuxtjs/tailwindcss",
    ['@nuxtjs/fontawesome', {
      component: 'fa',
      suffix: true,
      icons: {
        solid: true,
        regular: true,
        brands: true
      }
    }],
    "@nuxtjs/composition-api/module",
    ["@nuxtjs/eslint-module", { fix: true }]
  ],

  axios: {
    baseURL: 'http://127.0.0.1:8000',
    
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    "@nuxtjs/axios",
    'nuxt-vue-select',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}

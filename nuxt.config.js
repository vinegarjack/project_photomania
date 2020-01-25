
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  router: {
    middleware: ['i18n']
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#cacaha' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/i18n.js', ssr: true },
    { src: '~/plugins/validate.js', ssr: true },
    { src: '~/plugins/toast.js', ssr: true }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/router'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/font-awesome',
    '@nuxtjs/auth',
    '@nuxtjs/toast'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  auth: {
    redirect: {
      login: '/login',
      home: '/'
    },
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/login',
            method: 'post',
            propertyName: 'accessToken'
          },
          // user: { url: '/login', method: 'get', propertyName: '' },
          user: false,
          logout: false
        },
        tokenRequired: true
      }
    }
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    host: 'localhost',
    port: 8080
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [
      'vee-validate/dist/rules'
    ],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}

require('dotenv').config()

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Alberto Casero',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Soy Alberto Casero, máster en ingeniería web por la Universidad Politécnica de Madrid, con varios años de experiencia en gestión de proyectos y programación tanto en el lado cliente como en el servidor.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500&display=swap' },
      /* Vue-fab dependencies */
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/app.scss',
    '@/assets/css/colors.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/axios',
    '~/plugins/scroll-to.js',
    '~/plugins/services.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/dotenv',
    ['@nuxtjs/google-analytics', {
      id: process.env.google_analytics_id,
      dev: false
    }],
    '@nuxtjs/sitemap'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://www.npmjs.com/package/nuxt-fontawesome
    ['nuxt-fontawesome', {
      component: 'fa',
      imports: [
        // import whole set
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['fas']
        },
        {
          set: '@fortawesome/free-regular-svg-icons',
          icons: ['far']
        },
        {
          set: '@fortawesome/free-brands-svg-icons',
          icons: ['fab']
        }
      ]
    }]
  ],
  /*
  ** Axios configuration
  */
  axios: {
    baseURL: process.env.api_url
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
    transpile: [
      'vue-fab',
      'vue-ripple-directive'
    ]
  },
  /*
  ** Sitemap configuration
  */
  sitemap: {
    hostname: process.env.hostname,
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    routes: [
      '/'
    ].map(route => ({
      url: route,
      changefreq: 'monthly',
      priority: 1,
      lastmodISO: new Date().toISOString().split('T')[0]
    }))
  }
}

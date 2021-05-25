export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'cowin',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/font.css', '@/assets/tailwind.css', 'vuesax/dist/vuesax.css'],

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#1D4ED8' },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/vuesax', { src: '~/plugins/persistedState.client.js' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    //'@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-analytics',
  ],

  googleAnalytics: {
    id: 'UA-168805487-3',
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
      short_name: 'CoWin',
      display: 'fullscreen',
      prefer_related_applications: true,
      description:
        'Find Covid vaccine slots. Track vaccine centers near to you.',
      start_url: '/index',
      background_color: '#1D4ED8',
    },
    meta: {
      mobileAppIOS: true,
      name: 'CoWin',
      author: 'aneeshameed@elifent.tech',
      description:
        'Find Covid vaccine slots. Track vaccine centers near to you.',
      theme_color: '#1D4ED8',
      ogSiteName: 'CoWin.elifent.tech',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}

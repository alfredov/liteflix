export default {
  head: {
    title: 'LiteFlix',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Montserrat'
      }
    ]
  },
  modules: ['@nuxtjs/style-resources', '@nuxtjs/axios'],
  styleResources: {
    scss: [
      './assets/css/colors.scss',
      './assets/css/typography.scss',
      './assets/css/mixins.scss'
    ]
  },
  serverMiddleware: ['~/api/index.js'],
  axios: {
    baseURL: process.env.API_URL || 'http://localhost:3000/api/',
    redirectError: {
      404: '/notfound'
    }
  }
}

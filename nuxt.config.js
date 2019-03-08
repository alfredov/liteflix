export default {
  head: {
    title: 'LiteFlix',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },
  modules: ['@nuxtjs/style-resources', '@nuxtjs/axios'],
  styleResources: {
    scss: ['./assets/css/colors.scss', './assets/css/typography.scss']
  },
  serverMiddleware: ['~/api/index.js'],
  axios: {
    baseURL: process.env.API_URL || 'http://localhost:3000/api/',
    redirectError: {
      404: '/notfound'
    }
  }
}

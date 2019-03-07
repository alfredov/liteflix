export default {
  head: {
    title: 'LiteFlix',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid:'description', name:'description', content:'The latest Tv series' }
    ]
  },
  serverMiddleware: ['~/api/index.js']
}

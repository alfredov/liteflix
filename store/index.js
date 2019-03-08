export const state = () => ({
  list: [{ title: 'movie1' }, { title: 'movie2' }]
})

export const getters = {
  movies(state) {
    return state.list
  },
  upComingMovies(state) {
    return state.list.slice(1, 15)
  }
}

export const mutations = {
  set(state, movies) {
    state.list = movies
  },
  add(state, { title }) {
    state.list.push({ title })
  }
}

export const actions = {
  async getMovies({ commit }) {
    try {
      const movies = await this.$axios.$get('/movies')
      commit('set', movies)
    } catch {
      commit('set', [])
    }
  }
}

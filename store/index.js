import {
  upcomingType,
  popularType,
  dramaType,
  topRatedType
} from '../utils/constants'

export const state = () => ({
  list: []
})

export const getters = {
  movies(state) {
    return state.list
  },
  upComingMovies(state) {
    return state.list.filter(item => item.type === upcomingType)
  },
  popularMovies(state) {
    return state.list.filter(item => item.type === popularType)
  },
  dramaMovies(state) {
    return state.list.filter(item => item.type === dramaType)
  },
  topRatedMovies(state) {
    return state.list.filter(item => item.type === topRatedType)
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

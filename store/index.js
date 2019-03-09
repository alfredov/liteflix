import {
  upcomingType,
  popularType,
  dramaType,
  topRatedType,
  nowPlayingType
} from '../utils/constants'
import { filterMoviesByType, sortMoviesByReleaseDate } from '../utils'

export const state = () => ({
  list: []
})

export const getters = {
  movies(state) {
    return state.list
  },
  nowPlayingMovie(state) {
    const firstMovie = sortMoviesByReleaseDate(
      filterMoviesByType(state.list, nowPlayingType)
    )[3]
    return firstMovie || {}
  },
  upComingMovies(state) {
    return sortMoviesByReleaseDate(filterMoviesByType(state.list, upcomingType))
  },
  popularMovies(state) {
    return filterMoviesByType(state.list, popularType)
  },
  dramaMovies(state) {
    return filterMoviesByType(state.list, dramaType)
  },
  topRatedMovies(state) {
    return filterMoviesByType(state.list, topRatedType)
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

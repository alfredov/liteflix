import {
  upcomingType,
  popularType,
  dramaType,
  topRatedType,
  nowPlayingType
} from '../utils/constants'
import { filterMoviesByType, sortMoviesByReleaseDate } from '../utils'

export const state = () => ({
  list: [],
  genres: []
})

export const getters = {
  movies(state) {
    return state.list
  },
  genres(state) {
    return state.genres
  },
  nowPlayingMovie(state) {
    const firstMovie = sortMoviesByReleaseDate(
      filterMoviesByType(state.list, nowPlayingType)
    )[16]
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
  setMovies(state, movies) {
    state.list = movies
  },
  setGenres(state, genres) {
    state.genres = genres
  },
  addUpcomingMovie(state, { title, genre, image }) {
    const newMovie = {
      title,
      type: upcomingType,
      firstGenre: genre,
      releaseDate: '2019-03-30',
      horizontalImage: {
        w500: image
      }
    }

    const movies = JSON.parse(localStorage.movies || '{}')

    if (movies && movies.length) {
      movies.push(newMovie)
      localStorage.movies = JSON.stringify(movies)
    } else {
      localStorage.movies = JSON.stringify([newMovie])
    }

    state.list.push(newMovie)
  }
}

export const actions = {
  async getMovies({ commit }) {
    try {
      const { movies, allGenres } = await this.$axios.$get('/movies')
      commit('setMovies', movies)
      commit('setGenres', allGenres)
    } catch {
      commit('setMovies', [])
      commit('setGenres', [])
    }
  }
}

import axios from 'axios'
import LRU from 'lru-cache'
import {
  dramaType,
  upcomingType,
  nowPlayingType,
  topRatedType,
  popularType
} from '../utils/constants'
import { getGenresWithNames } from './utils'

const cache = new LRU({
  maxAge: 1000 * 60 * 60 * 6 // 6 h
})

const apikey = '6f26fd536dd6192ec8a57e94141f8b20'
const extraData = {
  [nowPlayingType]: {
    url: `https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}`
  },
  [upcomingType]: {
    url: `https://api.themoviedb.org/3/movie/upcoming?api_key=${apikey}`
  },
  [topRatedType]: {
    url: `https://api.themoviedb.org/3/movie/top_rated?api_key=${apikey}`
  },
  [popularType]: {
    url: `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}`
  },
  [dramaType]: {
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=18`
  }
}

export function getMoviesByType(type, url) {
  /* eslint-disable camelcase */
  return Promise.all([getGenres(), axios.get(url)])
    .then(([genres, response]) => {
      return response.data.results.map(
        ({
          title,
          overview,
          poster_path,
          backdrop_path,
          release_date,
          genre_ids
        }) => {
          const genresWithName = getGenresWithNames(genre_ids, genres)
          const genre = genresWithName[0] || {}
          return {
            type,
            title,
            overview,
            releaseDate: release_date,
            genres: genresWithName,
            firstGenre: genre.name || '',
            verticalImage: {
              original: `https://image.tmdb.org/t/p/original${poster_path}`,
              w500: `https://image.tmdb.org/t/p/w500${poster_path}`
            },
            horizontalImage: {
              original: `https://image.tmdb.org/t/p/original${backdrop_path}`,
              w500: `https://image.tmdb.org/t/p/w500${backdrop_path}`
            }
          }
        }
      )
    })
    .catch(() => [])
}

export function getAllMovies() {
  const moviesCache = cache.get('movies')
  if (moviesCache) {
    return {
      movies: moviesCache,
      allGenres: cache.get('genres') || []
    }
  } else {
    return Promise.all([
      getMoviesByType(nowPlayingType, extraData[nowPlayingType].url),
      getMoviesByType(upcomingType, extraData[upcomingType].url),
      getMoviesByType(dramaType, extraData[dramaType].url),
      getMoviesByType(topRatedType, extraData[topRatedType].url),
      getMoviesByType(popularType, extraData[popularType].url)
    ])
      .then(response => {
        const movies = [
          ...response[0],
          ...response[1],
          ...response[2],
          ...response[3],
          ...response[4]
        ]
        cache.set('movies', movies)
        return {
          movies,
          allGenres: cache.get('genres') || []
        }
      })
      .catch(() => [])
  }
}

export async function getGenres() {
  const genresCache = cache.get('genres')
  if (genresCache) {
    return genresCache
  }
  try {
    const result = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${apikey}`
    )
    const genres = result.data.genres
    cache.set('genres', genres)
    return genres
  } catch {
    return []
  }
}

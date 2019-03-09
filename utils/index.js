export function filterMoviesByType(list = [], type) {
  return list.filter(item => item.type === type)
}

export function sortMoviesByReleaseDate(list = []) {
  return list.sort((item1, item2) => {
    return new Date(item2.releaseDate) - new Date(item1.releaseDate)
  })
}

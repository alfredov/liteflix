export function getGenresWithNames(IDs = [], genres = []) {
  const genresWithName = IDs.reduce((data, genreId) => {
    const genre = genres.find(item => item.id === genreId)
    return [...data, { id: genreId, name: genre.name }]
  }, [])
  return genresWithName
}

export default {
  getGenresWithNames
}

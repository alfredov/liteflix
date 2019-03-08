import express from 'express'
import { getAllMovies, getGenres } from './client'

const app = express()

app.get('/movies', async (req, res) => {
  const movies = await getAllMovies()
  res.json(movies)
})

app.get('/genres', async (req, res) => {
  const genres = await getGenres()
  res.json(genres)
})

export default {
  path: '/api',
  handler: app
}

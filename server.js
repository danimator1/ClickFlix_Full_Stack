const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const db = require('./DB')
const { Movie,Actor,Review } = require('./Models')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('This is root!')
})

// server.js
app.get('/movies', async (req, res) => {
    const movies = await Movie.find({})
    res.json(movies)
  })

  app.get('/actors', async (req, res) => {
    const actors = await Actor.find({})
    res.json(actors)
  })

  app.get('/reviews', async (req, res) => {
    const reviews = await Review.find({})
    res.json(reviews)
  })

  
app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 3001;
const bodyParser = require('body-parser');
const logger = require('morgan');
const db = require('./db');
const { Movie, Actor, Review } = require('./Models');

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(logger('dev'));

app.get('/', (req, res) => {
  res.send('Welcome');
});

app.get('/movies', async (req, res) => {
  const movies = await Movie.find({});
  res.json(movies);
});

app.get('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findById(id);
    if (!movie) throw Error('Movie not found');
    res.json(movie);
  } catch (e) {
    console.log(e);
    res.send('404 Movie not found');
  }
});

app.post('/movies', async (req, res) => {
  try {
    const newMovie = await Movie.create(req.body);
    res.status(201).json({ message: 'Movie created successfully', newMovie });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//Chat GPT helped me with this
app.delete('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedMovie = await Movie.deleteOne({ _id: id });
    if (deletedMovie.deletedCount === 0) {
      return res.status(404).json({ error: 'Movie not found' });
    }
    res.json({ message: 'Movie deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//Chat GPT helped me with this
app.put('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedMovie = await Movie.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    if (!updatedMovie) {
      return res.status(404).json({ error: 'Movie not found' });
    }
    res.json({ message: 'Movie updated successfully', updatedMovie });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/actors', async (req, res) => {
  const actors = await Actor.find({});
  res.json(actors);
});

app.get('/actors/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const actor = await Actor.findById(id);
    if (!actor) throw Error('Actor not found');
    res.json(actor);
  } catch (e) {
    console.log(e);
    res.send('404 Actor not found');
  }
});

app.get('/reviews', async (req, res) => {
  const reviews = await Review.find({});
  res.json(reviews);
});

app.get('/reviews/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const review = await Review.findById(id);
    if (!review) throw Error('Review not found');
    res.json(review);
  } catch (e) {
    console.log(e);
    res.send('404 Review not found');
  }
});

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});

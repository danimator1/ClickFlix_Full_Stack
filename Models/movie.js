const { Schema } = require('mongoose')

const movieSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    releaseDate: { type: Number, required: true },
    duration: { type: Number, required: true },
    link: { type: String, required: true }

  },
  { timestamps: true }
)

module.exports = movieSchema
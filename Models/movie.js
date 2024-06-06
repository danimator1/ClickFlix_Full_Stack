const { Schema } = require('mongoose')

const movieSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    genre: { type: String, required: true },
    releaseDate: { type: String, required: true },
    duration: { type: Number, required: true },
    image: { type: String, required: true },
    link: { type: String, required: true },
    review: { type: Schema.Types.ObjectId, ref: 'Review' }

  },
  { timestamps: true }
)

module.exports = movieSchema
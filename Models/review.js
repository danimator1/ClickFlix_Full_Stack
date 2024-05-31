const { Schema } = require('mongoose')

const reviewSchema = new Schema(
  {
    rating: { type: String, required: true },
    movieReview: { type: String, required: true },
    movie: { type: Schema.Types.ObjectId, ref: 'Movie' }
  },
  { timestamps: true }
)

module.exports = reviewSchema
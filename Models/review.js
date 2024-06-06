const { Schema } = require('mongoose')

const reviewSchema = new Schema(
  {
    rating: { type: String, required: true },
    movieReview: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = reviewSchema
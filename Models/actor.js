const { Schema } = require('mongoose')

const actorSchema = new Schema(
  {
    name: { type: String, required: true },
    bio: { type: String, required: true },
    dob: { type: Number, required: true },
    movie: { type: Schema.Types.ObjectId, ref: 'Movie' }
  },
  { timestamps: true }
)

module.exports = actorSchema
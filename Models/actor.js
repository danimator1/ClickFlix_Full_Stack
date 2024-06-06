const { Schema } = require('mongoose')

const actorSchema = new Schema(
  {
    image: { type: String, required: true },
    name: { type: String, required: true },
    bio: { type: String, required: true },
    dob: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = actorSchema
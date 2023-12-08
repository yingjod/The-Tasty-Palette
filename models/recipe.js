import mongoose from 'mongoose'

const reviewSchema = new mongoose.Schema({
  text: { type: String, required: true, maxlength: 300 },
  rating: { type: Number, required: true, min: 1, max: 5 },
  owner: { type: mongoose.ObjectId, ref: 'User', required: true },
}, {
  timestamps: true,
})

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  category: { type: String, required: true },
  description: { type: String },
  prepTime: { type: Number, required: true },
  ingredients: [String],
  poster: String,
  method: { type: String, required: true },
  rating: { type: Number },
  review: [reviewSchema],
  owner: { type: mongoose.ObjectId, ref: 'User', required: true },
})


recipeSchema
  .set('toJSON', {
    virtuals: true,
  })

export default mongoose.model('Recipe', recipeSchema)
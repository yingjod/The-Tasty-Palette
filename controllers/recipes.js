import Recipe from '../models/recipe.js'


// Index
// Method: Get
// Path: /recipes
export const getAllRecipes = async (req, res) => {
  const recipes = await Recipe.find()
  return res.json(recipes)
}

// Create
// Method: Post
// Path: /recipes
export const createRecipe = async (req, res) => {
  try {
    req.body.owner = req.currentUser._id
    const recipeToCreate = await Recipe.create(req.body)
    return res.status(201).json(recipeToCreate)
  } catch (error) {
    console.log(error)
    return res.status(400).json(error) 
  }
}

// Show
// Method: Get
// Path: /recipes/:recipeId
export const getSingleRecipe = async (req, res) => {
  try {
    const { recipeId } = req.params
    const recipe = await Recipe.findById(recipeId).populate('owner')
    if (!recipe){
      return res.status(404).json({ message: 'Recipe not found' })
    }
    return res.json(recipe)
  } catch (error) {
    console.log(error)
    return res.status(400).json(error)
  }
}

// Update
// Method: Put
// Path: /recipes/:recipeId

export const updateRecipe = async (req, res) => {
  try {
    const { recipeId } = req.params
    const recipe = await Recipe.findById(recipeId)
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' })
    }

    console.log('User making request ->', req.currentUser._id)
    console.log('User that owns recipe ->', recipe.owner)
    console.log('Does user match owner?', recipe.owner.equals(req.currentUser._id))

    if (!recipe.owner.equals(req.currentUser._id)){
      return res.status(401).json({ message: 'Unauthorized' })
    }
    Object.assign(recipe, req.body)
    await recipe.save()
    return res.json(recipe)
  } catch (error) {
    console.log(error)
    return res.status(400).json(error)
  }
}

// Delete
// Method: Delete
// recipes/:recipeID

export const deleteRecipe = async (req, res) => {
  try {
    const { recipeId } = req.params
    const recipe = await Recipe.findByIdAndDelete({ _id: recipeId, owner: req.currentUser._id })
    if (!recipe) {
      return res.status(400).json({ message: 'Recipe not found' })
    }
    return res.sendStatus(204)
  } catch (error) {
    console.log(error)
    return res.status(400).json(error)
  }
}

// ! Review Controllers

// * Create
// Method: Post
// Path: /recipes/:/recipeId/reviews

export const createReview = async (req, res) => {
  try {
    const { recipeId } = req.params
    const recipe = await Recipe.findById(recipeId)
    if (!recipe) return res.status(404).json({ message: 'Recipe not found' })

    req.body.owner = req.currentUser._id
    
    recipe.reviews.push(req.body)

    await recipe.save()

    return res.status(201).json(recipe)

  } catch (error) {
    console.log(error)
    return res.status(400).json(error)
  }
}


// * Delete Review
// Method: Delete
// Path: /recipes/:recipeId/reviews/:reviewId

export const deleteReview = async (req, res) => {
  try {
    const { recipeId, reviewId } = req.params
    const recipe = await Recipe.findById(recipeId)
    if (!recipe) return res.status(400).json({ message: 'Recipe not found' })
    const reviewToDelete = recipe.reviews.id(reviewId)
    if (!reviewToDelete) return res.status(404).json({ message: 'Review not found' })
    if (!reviewToDelete.owner.equals(req.currentUser._id)) {
      return res.status(401).json({ message: 'Unauthorized' })
    }

    reviewToDelete.deleteOne()
    await recipe.save()

    return res.sendStatus(204)

  } catch (error) {
    console.log(error)
    return res.status(400).json(error)
  }
}
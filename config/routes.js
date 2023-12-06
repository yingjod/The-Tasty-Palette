import express from 'express'
import { 
  getAllRecipes,
  createRecipe,
  getSingleRecipe,
  updateRecipe,
  deleteRecipe 
} from '../controllers/recipes.js'

const router = express.Router()

router.route('/recipes')
  .get(getAllRecipes)
  .post(createRecipe)

router.route('/recipes/:recipeId')
  .get(getSingleRecipe)
  .put(updateRecipe)
  .delete(deleteRecipe)

export default router
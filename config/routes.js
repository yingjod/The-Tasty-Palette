import express from 'express'
import { 
  getAllRecipes,
  createRecipe,
  getSingleRecipe,
  updateRecipe,
  deleteRecipe 
} from '../controllers/recipes.js'
import { register, login } from '../controllers/users.js'

const router = express.Router()

router.route('/recipes')
  .get(getAllRecipes)
  .post(createRecipe)

router.route('/recipes/:recipeId')
  .get(getSingleRecipe)
  .put(updateRecipe)
  .delete(deleteRecipe)

router.route('/register')
  .post(register)

router.route('/login')
  .post(login)

export default router
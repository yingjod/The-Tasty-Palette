import express from 'express'
import { 
  getAllRecipes,
  createRecipe,
  getSingleRecipe,
  updateRecipe,
  deleteRecipe,
  createReview,
  deleteReview
} from '../controllers/recipes.js'
import { register, login, getProfile } from '../controllers/users.js'
import secureRoute from './secureRoute.js'
import { registerUser } from '../client/src/utilities/actions/auth.js'

const router = express.Router()

router.route('/recipes')
  .get(getAllRecipes)
  .post(secureRoute, createRecipe)

router.route('/recipes/:recipeId')
  .get(getSingleRecipe)
  .put(secureRoute, updateRecipe)
  .delete(secureRoute, deleteRecipe)

// Review

router.route('/recipes/:recipeId/reviews')
  .post(secureRoute, createReview)

router.route('/recipes/:recipeId/reviews/:reviewID')
  .delete(secureRoute, deleteReview)


// Route for register and login to the new user

router.route('/register')
  .post(register)

router.route('/login')
  .post(login)



// Profile route for display the profile of the user and his recipes created.
router.route('/profile')
  .get(secureRoute, getProfile)
export default router
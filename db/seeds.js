import mongoose from 'mongoose'
import 'dotenv/config'
import Recipe from '../models/recipe.js'
import User from '../models/user.js'
import recipeData from './data/recipes.js'
import userData from './data/users.js'
import reviewData from './data/review.js'


// Function to seed the databases, from user to recipes.
// This functios will create and delete users / recipes.

async function seed(){
  try {
    await mongoose.connect(process.env.CONNECTION_STRING)
    console.log('✅ Database connection established')

    const { deletedCount: deletedRecipeCount } = await Recipe.deleteMany()
    console.log(`❌ Deleted ${deletedRecipeCount} recipes from the database`)

    const { deletedCount: deletedUserCount } = await User.deleteMany()
    console.log(`🚷 Deleted ${deletedUserCount} users from the database`)

    const usersCreated = await User.create(userData)
    console.log(`👤 Seeded ${usersCreated.length} users to the database`)

    const ownedRecipe = recipeData.map(recipe => {
      const randomUserIndex = Math.floor(Math.random() * usersCreated.length)
      const recipeWithReviews = {
        ...recipe,
        owner: usersCreated[randomUserIndex]._id,
        reviews: [], // Initialize an empty array for reviews
      }
    
      // Embed reviews into the recipe
      reviewData.forEach(review => {
        const randomReviewUserIndex = Math.floor(Math.random() * usersCreated.length)
        const reviewWithText = {
          ...review,
          owner: usersCreated[randomReviewUserIndex]._id,
          text: 'Sample review text', 
        }
        recipeWithReviews.reviews.push(reviewWithText)
      })
      return recipeWithReviews
    })

    const recipesCreated = await Recipe.create(ownedRecipe)
    console.log(`🪴 Seeded ${recipesCreated.length} recipes to the database`)

    await mongoose.connection.close()
    console.log('⭕️Closed the connection to the database')
  } catch (error) {
    console.log(error)

    await mongoose.connection.close()
    console.log('⭕️Closed the connection to the database')
    
  }
}
seed()

import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// Page components
import App from './App'
import Home from './components/Home'
import RecipeIndex from './components/RecipeIndex'

import { getAllRecipes, getSingleRecipe } from './utilities/loaders/recipes'
import SingleRecipe from './components/SingleRecipe'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
        
      },
      {
        path: '/recipes',
        element: <RecipeIndex />,
        loader: getAllRecipes
      },
      {
        path: '/recipes/:recipeId',
        element: <SingleRecipe />,
        loader: getSingleRecipe
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

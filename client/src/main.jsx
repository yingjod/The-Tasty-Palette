import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import SingleRecipe from './components/single-recipe'

import { getRecipe } from './utillits/loaders/recipeLoad.js'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/recipes/:recipeId',
    element: <single-recipe />,
    loader: async ({ params }) => getRecipe(params.recipeId),
  }
])















ReactDOM.createRoot(document.getElementById('root')).render(
)

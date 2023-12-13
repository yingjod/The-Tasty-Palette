import { useState, useEffect } from 'react'
import axios from 'axios'
import { getToken } from '../utilities/helpers/common'
// import ErrorPage from './ErrorPage'
import renderStars from './Stars'
import { Link, useNavigate } from 'react-router-dom'

export default function Profile() {
  const [profile, setProfile] = useState({})
  const navigate = useNavigate()
  

  useEffect(() => {
    async function getUserProfile() {
      try {
        if (getToken()) {
          const { data: profile } = await axios.get('/api/profile', {
            headers: {
              Authorization: `Bearer ${getToken()}`,
            },
          })
          setProfile(profile)
        } else {
          navigate('/login')
        }
      } catch (error) {
        console.log(error)
      }
    }
    getUserProfile()
  }, [])

  const handleDeleteRecipe = async (recipeId) => {
    try {
      // console.log('Deleting recipe with ID:', recipe._id)
      const response = await axios.delete(`/api/recipes/${recipeId}`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      console.log('Recipe deleted:', response)
      const { data: profile } = await axios.get(`/api/profile`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      // Update the component state
      setProfile(profile)
    } catch (error) {
      console.error('Error deleting review:', error)
  
      // Log the specific response received
      if (error.response) {
        console.error('Response data:', error.response.data)
      }
    }
  }
  
  
  return (
    <>
      {profile && profile.recipesCreated && profile.recipesCreated.length > 0 ?
            <div className="profileBody">
              <div className='profile-title'>
                <h2>{profile.username}&apos;s Recipes</h2> 
              </div>
              <div className="recipe-cards" >
                {profile.recipesCreated &&
                  profile.recipesCreated.map((recipe, idx) => {
                    return (
                      <div key={idx} className="card-layout">
                        <Link key={recipe._id} to={`/recipes/${recipe._id}`} className="card-layout">
                          <div className="card" style={{width: '20rem'}}>
                            <img className="card-img-top" src={recipe.poster} alt={recipe.title} style={{height: '150px', objectFit: 'cover'}}/>
                            <div className="card-body">
                              <h5 className="text-center bold card-title">{recipe.title}</h5>
                              <div className="stars">{renderStars(recipe.avgRating)}</div>
                            </div>
                          </div> 
                        </Link>
                        <div className='profile-bn-link'>
                        <Link to={`/recipes/${recipe._id}/edit`} className="edit-link">Edit Recipe</Link>
                        <button className="delete-btn" onClick={() => handleDeleteRecipe(recipe._id)}>Delete Recipe</button>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
        :
        <>
            <div className='profile-title'>
                <h2>{profile.username}&apos;s Profile</h2> 
                <p className='no-recipe'>You have not created any recipes yet!</p>
                <Link to={'/recipes/create'} className='create-link'>Create Recipe</Link>
            </div>
        </>
      }
    </>
  )
}

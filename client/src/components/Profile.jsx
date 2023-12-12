import { useState, useEffect } from 'react'
import axios from 'axios'
import { getToken } from '../utilities/helpers/common';
import ErrorPage from './ErrorPage';

import Stars from './Stars'
import { Link, useNavigate } from 'react-router-dom'

const UserProfile = () => {

  const navigate = useNavigate()

  const [profile, setProfile] = useState({})


  useEffect(() => {
    async function getUserProfile() {
      try {
        if (getToken) {
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

  
  return (
    <>
      {profile ?
        <div className="page">
          <div className="profileHeader">
            <h1>{profile.username}</h1>
            
          </div>

          <div className="container">
            <div className="profileBody">
              <h2>{profile.username} Recipes</h2>
              
              <div className="cards" >
                {profile.recipesCreated &&
                  profile.recipesCreated.map(recipe => {
                    return <div key={recipe._id} className='recipeCard'>
                      <Link to={`/recipes/${recipe._id}`}>
                        <img className="searchIMG" src={recipe.poster} alt="recipe" />
                      </Link>
                      <div className="cardDetails">
                        <div className="title">
                          <h4>{recipe.title}</h4>
                        </div>

                        <Stars rating={recipe.avgRating} />

                      </div>

                    </div>
                  })

                }
              </div>
            </div>

          </div>
        </div>
        :
        <>

            <ErrorPage />
            :
            <h2>Loading...</h2>

        </>
      }
    </>
  )
}

export default UserProfile
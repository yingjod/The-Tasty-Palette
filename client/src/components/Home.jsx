import { useEffect, useState } from 'react'
import { getAllRecipes } from '../utilities/loaders/recipes'
import { Link } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';
import textlogo from '../images/text-logo.png'

import 'bootstrap/dist/css/bootstrap.min.css'

export default function Home() {
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchRecipes() {
      try {
        const data = await getAllRecipes()
        console.log(data)
        setRecipes(data)
      } catch (error) {
        console.error('Error fetching recipes:', error)
      } finally {
        setLoading(false);
      }
    }
    fetchRecipes();
  }, []);

  if (loading) {
    return <p>Loading recipes...</p>;
  }

  if (!recipes.length) {
    console.error('No recipes available.');
    return <p>No recipes available.</p>;
  }

    // Shuffle the recipes array randomly
    const shuffledRecipes = recipes.sort(() => Math.random() - 0.5);
    // Select the first 3 recipes from the shuffled array
    const randomRecipes = shuffledRecipes.slice(0, 5);

  return (

    <>
    <div className='textlogo_'>
      <img src={textlogo} className='textlogo' />
    </div>
    <div className="custom-carousel">
    
      <Carousel data-bs-theme="dark">
        {randomRecipes.map((recipe) => (
          <Carousel.Item key={recipe._id}>
            <Link key={recipe._id} to={`/recipes/${recipe._id}`}>
              <img className="d-block" src={recipe.poster} alt={recipe.title} />
            </Link>
            <Carousel.Caption className='info'>
              <h5>{recipe.title}</h5>
              <h6>Total Time: {recipe.prepTime} mins</h6>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  </>
  )
}








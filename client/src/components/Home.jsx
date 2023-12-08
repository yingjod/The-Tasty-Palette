import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllRecipes } from '../utilities/loaders/recipes'

export default function Home() {
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    async function fetchRecipes() {
      try {
        const data = await getAllRecipes()
        setRecipes(data)
      } catch (error) {
        console.error('Error fetching recipes:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchRecipes();
  }, []);
  if (loading) {
    return <p>Loading recipes...</p>
  }
  if (!recipes.length) {
    console.error('No recipes available.')
    return <p>No recipes available.</p>
  }
  const index = Math.floor(Math.random() * recipes.length);
  const randomPick = recipes[index];
  if (!randomPick) {
    console.error('Unable to retrieve a random recipe.');
    return <p>Unable to retrieve a random recipe.</p>;
  }
  // Update the destructuring to match your actual data structure
  const { title, category, description, prepTime, _id } = randomPick;
  if (!title || !category || !_id) {
    console.error('Invalid or missing data:', randomPick);
    return <p>Recipe data is incomplete or missing.</p>;
  }
  return (
    <>
      <div className='recipesimg'>
        <h1 className='text-center bold display-3 mb-4'></h1>
        <Link to={`/recipes/${_id}`}>
          {/* Use the properties according to your actual data structure */}
          <h2>{title}</h2>
        </Link>
        <p>Continent: {category}</p>
        <p>{description}</p>
        <p>Prep time: {prepTime} minutes</p>
      </div>
    </>
  );
}
















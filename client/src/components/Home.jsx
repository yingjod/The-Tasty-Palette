import App from './App.jsx'
import { Link } from 'react-router-dom'

export default function Home() {
  const recipes = App()
  const index = Math.floor(Math.random() * recipes.length)
  const randomPick = recipes[index]
  const image = randomPick.poster
  const id = randomPick.id

  return (
    <>
      <div className='recipesimg'>
        <h1 className='text-center bold display-3 mb-4' ></h1>
        <Link
          src={image}
          key={id}
          to={`/recipes/${id}`}
        >
          <img className='homeimg' src={image} />
        </Link>
      </div>
    </>
  )
}
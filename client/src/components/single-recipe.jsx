import { Link, useLoaderData } from "react-router-dom"

export default function SingleRecipe(){
  // We get a single recipe from the loader based on its id, then destructure it
  const recipe = useLoaderData()
  const {name, image, recipeList} = recipe

  return (
    <>
      <h1>Recipe</h1>
      <div className="container">
        <div className="recipe">
          <h2>{name}</h2>
          <img src={image} alt={`Image of ${name}`} />
          <h3>Recipes List</h3>
          <div className="rcp">
            {recipeList.map((ep, i) => {

              const num = recipe.split('/')
              return (
                <Link to={`/recipes/${num[num.length-1]}`} key={i}>Recipe {num[num.length-1]}</Link>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}


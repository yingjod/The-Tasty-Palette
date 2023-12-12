import { useEffect } from 'react'
import { Form, useActionData, useLoaderData, useNavigate } from 'react-router-dom'

export default function RecipeEdit(){
  const res = useActionData()
  const navigate = useNavigate()
  const recipe = useLoaderData()

  useEffect(() => {
    console.log(res)
    if (res?.status === 202) {
      console.log('CREATED SUCCESSFULLY')
      navigate(`/recipes/${res.data._id}`)
    }
  }, [res, navigate])

  return (
    <>
      <h1 className="text-center bold display-3 mb-4">Edit Recipe</h1>
      <Form className='form' method="POST">
      <label hidden htmlFor="title"></label>
        <input className="createtittle" type="text" name="title" placeholder='Dish Name' defaultValue={recipe.name}/><br />

        <label hidden htmlFor="category"></label>
        <input className="createcategory" type="text" name="category" placeholder='Category' defaultValue={recipe.category}/><br />

        <label hidden htmlFor="description"></label>
        <textarea className="createdescription" type="number" name="description" placeholder='Description' defaultValue={recipe.description}></textarea><br />

        <label hidden htmlFor="prepTime"></label>
        <input className="createprepTime" type="text" name="prepTime" placeholder='PREP Time(mins)' defaultValue={recipe.prepTime} /><br />

        <label hidden htmlFor="ingredients"></label>
        <input className="createingredients" type="text" name="ingredients" placeholder='Ingredients' defaultValue={recipe.ingredientes} /><br />

        <label hidden htmlFor="poster"></label>
        <input className="createposter" type="text" name="poster" placeholder='poster' /><br />

        <label hidden htmlFor="method"></label>
        <textarea className="createmethod" name="method" placeholder='method' defaultValue={recipe.method}></textarea><br />
        
        {res && <p className="danger">{res.data.message}</p>}
        <button className="editbtn" type="submit">Edit</button><br />
      </Form>
    </>
  )
}
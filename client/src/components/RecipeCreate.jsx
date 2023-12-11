import { useEffect } from "react";
import { Form, useActionData ,useNavigate } from 'react-router-dom'
import textcreat from '../images/text-CreateRecipe.png'


export default function RecipeCreate() {
  const res = useActionData()
  const navigate=useNavigate()

  useEffect(() => {
    console.log(res)
    if (res?.status === 201) {
      console.log('created successfully')
      navigate(`/recipes/${res.data._id}`)

    }
  }, [res])

  return (
    <>

      <Form method="post" className="createform" >
        <img src={textcreat} className="textcreate"></img><br />

        <div className="formstlying">
        <label hidden htmlFor="title"></label>
        <input className="createtittle" type="text" name="title" placeholder='Dish Name' /><br />




        <label hidden htmlFor="category"></label>
        <input className="createcategory" type="text" name="category" placeholder='Category' /><br />

        <label hidden htmlFor="description"></label>
        <textarea className="createdescription" type="number" name="description" placeholder='Description'></textarea><br />

        <label hidden htmlFor="prepTime"></label>
        <input className="createprepTime" type="text" name="prepTime" placeholder='PREP Time(mins)' /><br />

        <label hidden htmlFor="ingredients"></label>
        <input className="createingredients" type="text" name="ingredients" placeholder='Ingredients' /><br />

        <label hidden htmlFor="poster"></label>
        <input className="createposter" type="text" name="poster" placeholder='poster' /><br />

        <label hidden htmlFor="method"></label>
        <textarea className="createmethod" name="method" placeholder='method'></textarea><br />
        
        {res && <p className="danger">{res.data.message}</p>}
        <button className="createbtn" type="submit">Create</button><br /><br />

        </div>

      </Form>
    </>

  )
}
import { useEffect, useState } from "react";
import { Form, useActionData, useNavigate } from 'react-router-dom'
import textcreat from '../images/text-CreateRecipe.png'
import ImageUploadField from './ImageUploadField'

export default function RecipeCreate() {
  const res = useActionData()
  const navigate = useNavigate()

  useEffect(() => {

    if (res?.status === 201) {
      console.log('created successfully')
      navigate(`/recipes/${res.data._id}`)
    }
  }, [res, navigate])


  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    prepTime: '',
    ingredients: [],
    method: '',
    poster: ''
  })

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <>
      {/* <Form method="post" className="createform" onSubmit={handleSubmit} > */}
        <Form method="post" className="createform" >
        <img src={textcreat} className="textrecipe"></img><br />
        <div className="formstlying">


          <label hidden htmlFor="title"></label>
          <input className="createtittle" type="text" name="title" placeholder='Dish Name' onChange={handleChange} value={formData.title} /><br />

          <label htmlFor="category" />
          <select
            className="createcategory"
            id="category"
            name="category"
            onChange={handleChange}
            value={formData.category}
          >
            <option value=""> - Select a category - </option>
            <option value="Europe">Europe</option>
            <option value="Asia">Asia</option>
            <option value="South America">South America</option>
            <option value="North America">North America</option>
            <option value="Africa">Africa</option>
            <option value="Oceania">Oceania</option>
          </select><br />


          <label hidden htmlFor="description"></label>
          <textarea className="createdescription" type="number" name="description" placeholder='Description...' onChange={handleChange} value={formData.description}></textarea><br />

          <label hidden htmlFor="prepTime"></label>
          <input className="createprepTime" type="number" name="prepTime" placeholder='Total Time (mins)' onChange={handleChange} value={formData.prepTime} /><br />

          <label hidden htmlFor="ingredients"></label>
          <input className="createingredients" type="text" name="ingredients" placeholder='Ingredients' onChange={handleChange} value={formData.ingredients} /><br />

          <label hidden htmlFor="method"></label>
          <textarea className="createmethod" name="method" placeholder='Method...' onChange={handleChange} value={formData.method} ></textarea><br /><br />

          <div className="upload-and-submit">
            <ImageUploadField setFormData={setFormData} formData={formData} />

            {res && <p className="danger">{res.data.message}</p>}

            <button className="createbtn" type="submit">Create</button>
          </div>
        </div>

      </Form>
    </>

  )
}
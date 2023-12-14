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

  const [setErrorMessage] = useState('');

  function handleChange(e) {
    const { name, value } = e.target;

    // Check if the entered value is a valid positive number
    if (name === 'prepTime' && (isNaN(value) || parseInt(value) < 0)) {
      // If not a valid positive number, set it to 0
      setFormData({ ...formData, [name]: 0 });
      // Set an error message
      setErrorMessage('Prep time must be a valid positive number');
    } else {
      setFormData({ ...formData, [name]: value });
      // Clear error message when a valid value is entered
      setErrorMessage('');
    }
  }

  return (
    <>
      {/* <Form method="post" className="createform" onSubmit={handleSubmit} > */}
      <Form method="post" className="createform" >
        <img src={textcreat} className="textrecipe"></img><br />
        <div className="formstlying">

          <label hidden htmlFor="title"></label>
          <input className="createtitle" type="text" name="title" placeholder='Dish Name' onChange={handleChange} value={formData.title} /><br />

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

          {/* <div className="upload-and-submit">
            {/* <ImageUploadField setFormData={setFormData} formData={formData} /> */}
            {/* <button className="createbtn" type="submit">Create</button> */}

            {/* {res && <p className="danger">{res.data.message}</p>} */}


          <div className="row">
            <div className="col-md-8">
              <ImageUploadField setFormData={setFormData} formData={formData} />
            </div>
            <div className="col-md-4 d-flex align-items-center justify-content-end">
              <button className="btn btn-primary createbtn" type="submit">Create</button>
            </div>
          </div><br />

          {res && <p className="dangerincreate">{res.data.message}</p>}

        </div>

      </Form>
    </>

  )
}

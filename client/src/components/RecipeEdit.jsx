import { useEffect, useState } from 'react'
import { Form, useActionData, useLoaderData, useNavigate } from 'react-router-dom'
import textedit from '../images/text-editrecipe.png'
import ImageUploadField from './ImageUploadField'

export default function RecipeEdit() {
  const res = useActionData()
  const navigate = useNavigate()
  const recipe = useLoaderData()

  useEffect(() => {
    // console.log('res->', res)
    if (res?.status === 200) {
      console.log('CREATED SUCCESSFULLY')
      navigate(`/recipes/${res.data._id}`)
    }
  }, [res, navigate])

  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    prepTime: 0,
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
      <img src={textedit} className="textrecipe"></img><br />
      <Form className='createform' method="POST">
        <div className="formstlying">
          <label hidden htmlFor="title"></label>
            <input className="createtitle" type="text" name="title" placeholder='Dish Name' defaultValue={recipe.title}/><br />

            <label htmlFor="category" />
          <select
            className="createcategory"
            id="category"
            name="category"
            onChange={handleChange}
            defaultValue={recipe.category}
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
            <textarea className="createdescription" type="number" name="description" placeholder='Description...' defaultValue={recipe.description}></textarea><br />

            <label hidden htmlFor="prepTime"></label>
            <input className="createprepTime" type="text" name="prepTime" placeholder='Total Time (mins)' defaultValue={recipe.prepTime} /><br />

            <label hidden htmlFor="ingredients"></label>
            <input className="createingredients" type="text" name="ingredients" placeholder='Ingredients' defaultValue={recipe.ingredients} /><br />

            <label hidden htmlFor="method"></label>
            <textarea className="createmethod" name="method" placeholder='Method...' defaultValue={recipe.method}></textarea><br />


          <div>
            <img src={recipe.poster} className="preview" alt="poster" defaultValue={recipe.poster} /><br /><br />

            <div className="row">
              <div className="col-md-8">
                <ImageUploadField setFormData={setFormData} formData={formData} />
              </div>
              <div className="col-md-4 d-flex align-items-center justify-content-end">
                <button className="btn btn-primary createbtn" type="submit">Complete</button>
              </div>
            </div><br />

            {res && <p className="dangerincreate">{res.data.message}</p>}

          </div>

        </div>
      </Form>
    </>
  )
}

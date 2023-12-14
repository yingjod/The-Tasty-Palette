import { useEffect, useState } from 'react'
import { Form, useActionData, useLoaderData, useNavigate } from 'react-router-dom'
import textedit from '../images/text-editrecipe.png'
import ImageUploadField from './ImageUploadField'

export default function RecipeEdit(){
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

  const [ formData, setFormData ] = useState({
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
            <input className="createtittle" type="text" name="title" placeholder='Dish Name' defaultValue={recipe.title}/><br />

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
            <textarea className="createdescription" type="number" name="description" placeholder='Description' defaultValue={recipe.description}></textarea><br />

            <label hidden htmlFor="prepTime"></label>
            <input className="createprepTime" type="number" name="prepTime" placeholder='Total Time (mins)' onChange={handleChange} value={formData.prepTime} /><br />

            <label hidden htmlFor="ingredients"></label>
            <input className="createingredients" type="text" name="ingredients" placeholder='Ingredients' defaultValue={recipe.ingredients} /><br />

            <label hidden htmlFor="poster"></label>
            <input className="createposter" type="text" name="poster" placeholder='poster' defaultValue={recipe.poster}/><br />

            <label hidden htmlFor="method"></label>
            <textarea className="createmethod" name="method" placeholder='method' defaultValue={recipe.method}></textarea><br />

            <ImageUploadField setFormData={setFormData} formData={formData} />
            
            {res && <p className="danger">{res.data.message}</p>}
            <button className="createbtn" type="submit">Edit</button><br />
        </div>
      </Form>
    </>
  )
}

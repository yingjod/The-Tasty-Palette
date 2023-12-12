import { useEffect, useState } from "react";
import { Form, useActionData, useNavigate } from 'react-router-dom'
import textcreat from '../images/text-CreateRecipe.png'
import ImageUploadField from '../components/ImageUploadField'


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
    prepTime: 0,
    ingredients: [],
    method: '',
    poster:'',
  })

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  //function handleSubmit(e) {
  //  e.preventDefault();
  //}

  return (
    <>
    {/* <Form method="post" className="createform" onSubmit={handleSubmit} ></Form> */}
      <Form method="post" className="createform" >
        <img src={textcreat} className="textcreate"></img><br />
        <div className="formstlying">


          <label hidden htmlFor="title"></label>
          <input className="createtittle" type="text" name="title" placeholder='Dish Name' onChange={handleChange} value={formData.title} /><br />


          <label hidden htmlFor="category"></label>
          <input className="createcategory" type="text" name="category" placeholder='Category' onChange={handleChange} value={formData.category} /><br />

          <label hidden htmlFor="description"></label>
          <textarea className="createdescription" type="number" name="description" placeholder='Description' onChange={handleChange} value={formData.description}></textarea><br />

          <label hidden htmlFor="prepTime"></label>
          <input className="createprepTime" type="text" name="prepTime" placeholder='PREP Time(mins)' onChange={handleChange} value={formData.prepTime} /><br />

          <label hidden htmlFor="ingredients"></label>
          <input className="createingredients" type="text" name="ingredients" placeholder='Ingredients' onChange={handleChange} value={formData.ingredients} /><br />

          <label hidden htmlFor="method"></label>
          <textarea className="createmethod" name="method" placeholder='method' onChange={handleChange} value={formData.method} ></textarea><br />

          <ImageUploadField setFormData={setFormData} formData={formData} />

          {res && <p className="danger">{res.data.message}</p>}

          <button className="createbtn" type="submit">Create</button><br /><br />
        </div>

      </Form>
    </>

  )
}
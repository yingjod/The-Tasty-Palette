import axios from 'axios'
// import { useEffect} from 'react'

export default function ImageUploadField({ formData, setFormData }) {

  async function handleImageUpload(e) {
    const preset = import.meta.env.VITE_UPLOAD_PRESET
    const file = e.target.files[0]
    const endpoint = import.meta.env.VITE_UPLOAD_URL

    // Create a new form to send to cloudinary
    // We need to append the file and the upload_preset
    const data = new FormData()
    data.append('file', file)
    data.append('upload_preset', preset)

    // Send the form data to the API endpoint

    const { data: { secure_url } } = await axios.post(endpoint, data)
    console.log('data=>', data)
    console.log('secure_url=>', secure_url)

    // Set form data to image url
    setFormData({ ...formData, poster: secure_url })
    console.log('formData=>', formData)
  }
  // console.log(poster)
  // useEffect(() => {
  //   // Perform any side effects related to state changes here
  //   console.log('Updated FormData:', formData);
  // }, [formData]);

  return (
    <>

      {formData.poster ?
        <>
          <img src={formData.poster} alt="poster" />
          <input type='hidden' name='poster' value={formData.poster} />
        </>
        :
        <input type="file" name="poster" onChange={handleImageUpload} />
      }
    </>
  )
}
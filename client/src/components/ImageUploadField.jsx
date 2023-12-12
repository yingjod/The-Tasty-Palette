import axios from 'axios'

export default function ImageUploadField({ formData, setFormData }){

  async function handleImageUpload(e){
    const preset = import.meta.env.VITE_UPLOAD_PRESET
    const file = e.target.files[0]
    const endpoint = import.meta.env.VITE_UPLOAD_URL

    // Create a new form to send to cloudinary
    // We need to append the file and the upload_preset
    const data = new FormData()
    data.append('file', file)
    data.append('upload_preset', preset)

    // Send the form data to the API endpoint
    const { data: { secure_url }} = await axios.post(endpoint, data)
    
    // Set form data to image url
    setFormData({ ...formData, poster: secure_url ,})
  }

  return (
    <>
      {formData.poster?
        <img src={formData.poster} alt="Poster" />
        :
        <input type="file" name="poster" onChange={handleImageUpload} />
      }
    </>
  )
}
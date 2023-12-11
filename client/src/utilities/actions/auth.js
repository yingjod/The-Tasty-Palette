import axios from "axios"


export async function registerUser(request) {
  const data = await formToObj(request)
  return await axios.post('/api/register', data, {
    validateStatus: () => true
  })

}



async function formToObj(request) {
  const formData = await request.formData()
  return Object.fromEntries(formData.entries())
}
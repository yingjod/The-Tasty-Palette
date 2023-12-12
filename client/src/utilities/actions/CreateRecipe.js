import axios from "axios"
import { getToken } from "../helpers/common"


export async function CreateRecipe(request){
  const data = await formToObj(request)
  return await axios.post('/api/recipes', data, {
    validateStatus: () => true,
    headers:{
      Authorization:`Bearer ${getToken()}`
    }
  })
}

export async function editRecipe(request, id){
  const data = await formToObj(request)
  return await axios.put(`/api/recipes/${id}`, data, {
    validateStatus: () => true,
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })
}

export async function formToObj(request){
  const formData = await request.formData()
  return Object.fromEntries(formData.entries())
}

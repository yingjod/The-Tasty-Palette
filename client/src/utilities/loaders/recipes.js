export async function getAllRecipes(){
  const res = await fetch('/api/recipes')
  console.log(res)
  return res.json()
}

export async function getSingleRecipe(_id){
  const res = await fetch(`/api/recipes/${_id}`)
  console.log(res)
  return res.json()
}



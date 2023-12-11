export async function getAllRecipes(){
  const res = await fetch('/api/recipes')
  console.log(res)
  return res.json()
}

export async function getSingleRecipe(id){
  const res = await fetch(`/api/recipes/${id}`)
  console.log(res)
  return res.json()
}

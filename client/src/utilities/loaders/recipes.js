export async function getAllRecipes(){
  const res = await fetch('/api/recipes')
  return res.json()
}

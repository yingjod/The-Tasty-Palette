import { useEffect } from 'react'
import axios from 'axios'
function App() {

  useEffect(() => {
    async function getRecipeData() {
      try {
        const { data } = await axios.get('/api/recipes')
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
    getRecipeData()
  }, [])
  return (
    <>
      <h2>Hello World</h2>
    </>
  )
}
export default App
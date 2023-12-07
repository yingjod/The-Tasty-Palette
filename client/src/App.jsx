import { useEffect } from 'react'
import axios from 'axios'
import { Outlet } from 'react-router-dom'

function App() {
  useEffect(() => {
    async function getRecipeData(){
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
      <main>
          <Outlet />   
      </main>
    </>
  )
}

export default App

import { useEffect } from 'react'
import axios from 'axios'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
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
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App

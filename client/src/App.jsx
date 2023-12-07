// import { useEffect } from 'react'
// import axios from 'axios'
// import Nav from './components/Nav.jsx'
// import Footer from './components/Footer.jsx'
// import { Outlet } from 'react-router-dom'

// function App() {

//   useEffect(() => {
//     async function getRecipeData(){
//       try {
//         const { data } = await axios.get('/api/recipes')
//         console.log(data)
//       } catch (error) {
//         console.log(error)
//       }
//     }
//     getRecipeData()
//   }, [])

//   return (
//     <>
//       <Nav />
//       <main>
//         <Outlet />
//       </main>
//       <Footer />
//     </>
//   )
// }
// export default App

// import { useEffect } from 'react'
// import axios from 'axios'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import { Outlet } from 'react-router-dom'
function App() {
  // useEffect(() => {
  //   async function getRecipeData() {
  //     try {
  //       const { data } = await axios.get('/api/recipes')
  //       console.log('Recipe data:', data)
  //     } catch (error) {
  //       if (error.response) {
  //         // The request was made, but the server responded with a status code
  //         // outside the range of 2xx
  //         console.error('Server responded with an error:', error.response.data)
  //       } else if (error.request) {
  //         // The request was made, but no response was received
  //         console.error('No response received from the server')
  //       } else {
  //         // Something happened in setting up the request that triggered an Error
  //         console.error('Error during request setup:', error.message)
  //       }
  //     }
  //   }
  //   getRecipeData()
  // }, [])
  
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
export default App;








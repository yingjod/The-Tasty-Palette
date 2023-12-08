
// import { useState } from 'react'
import { Link } from 'react-router-dom'

// Images
import logoIcon from '../images/logo-icon.png'

// // Bootstrap Components
// import Modal from 'react-bootstrap/Modal'


export default function Nav(){
  return (
  <header className='p-2 p-md-3 p-lg-4'>
        <Link to="/"><img className='logo-icon' src={logoIcon} alt="breadbored logo" /></Link>
        <button className='nav-toggle'>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>
  )
}

{/* <nav>
<Link to="/">Home</Link>
<Link to="/recipes">Recipe Index</Link>
<Link to="/recipes/:recipeId">Single Recipe</Link>
<Link to="/login">Login</Link>
<Link to="/register">Register</Link>
</nav> */}
import { Link } from 'react-router-dom'
import { useState } from 'react'

// Images
import logoIcon from '../images/logo-icon.png'

// Bootstrap components
import Modal from 'react-bootstrap/Modal'

export default function Nav() {

// ! State
  const [show, setShow] = useState(false)

  // function handleLogOut(){
  //   removeToken()
  //   Navigate('/login')
  // }

  return (
    <>
      <header className='navbar'>
        <Link to="/"><img className='logo-icon' src={logoIcon} alt="tasty palette logo" /></Link>
        <button className='nav-toggle' onClick={() => setShow(true)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <nav onClick={() => setShow(false)} className='link-container'>
            <Link to="/">Home</Link><br />
            <Link to="/recipes">All Recipes</Link><br />
            <Link to="/login">Login</Link><br />
            <Link to="/register">Register</Link><br />
          </nav>
        </Modal.Header>
      </Modal>
    </>
  )

}


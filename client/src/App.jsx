import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import { Outlet } from 'react-router-dom'


function App() {

  
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
      <div className='footer'>
      <Footer />
      </div>
    </>
  );
}
export default App;









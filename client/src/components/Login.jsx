import { useEffect } from 'react'
import { Form, useActionData, useNavigate, Link } from 'react-router-dom'
import { setToken } from '../utilities/helpers/common'
import textlogin from '../images/text-login.png'

export default function Login(){
  const res = useActionData()
  const navigate = useNavigate()
  
  useEffect(() => {
    if (res?.status === 202){
      setToken(res.data.token)
      navigate('/recipes')
    }
  }, [res, navigate])

  return (
    <>
      <Form className='form' method="POST">
        <img src={textlogin} className="textlogin"></img>
        <input type="email" name="email" placeholder='Email' /><br />
        <input type="password" name="password" placeholder="Password" /><br />
        <button className='registerbtn' type="submit">Login</button>
        {res && <p className='danger'>{res.data.message}</p>}
      </Form>
      <p>Don't have an account? <Link to="/register"><span className='register-link'> Register here</span></Link></p>
      {res && <p className='danger'>{res.data.message}</p>}
    </>
  )
}


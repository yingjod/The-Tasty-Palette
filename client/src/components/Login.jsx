import { useEffect } from 'react'
import { Form, useActionData, useNavigate } from 'react-router-dom'
import { setToken } from '../utilities/helpers/common'

export default function Login(){
  const res = useActionData()
  const navigate = useNavigate()
  
  useEffect(() => {
    if (res?.status === 202){
      setToken(res.data.token)
      navigate('/bread')
    }
  }, [res, navigate])

  return (
    <>
      <h1 className="text-center bold display-3 mb-4">Login</h1>
      <Form className='form' method="POST">
        <input type="email" name="email" placeholder='Email' />
        <input type="password" name="password" placeholder="Password" />
        <button className='submit-btn' type="submit">Login</button>
        {res && <p className='danger'>{res.data.message}</p>}
      </Form>
    </>
  )
}
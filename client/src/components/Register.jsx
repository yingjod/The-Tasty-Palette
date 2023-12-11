import { useEffect } from "react";
import { Form, useActionData, useNavigate } from "react-router-dom";
import textregister from '../images/text-register.png'

export default function Register() {


  const res = useActionData()
  console.log(res)
  const navigate = useNavigate()

  useEffect(() => {
    if (res?.status === 201) {
      navigate('/login')
    }
  }, [res, navigate])


  return (
    <>

      <Form method="post" className="registerform" >
        <img src={textregister} className="textregister"></img>
        <input className="registeruser" type="text" name="username" placeholder='Username' /><br />
        <input className="registeremail" type="email" name="email" placeholder='Email address' /><br />
        <input className="registerpass" type="password" name="password" placeholder='Password' /><br />
        <input className="registerpasscon" type="password" name="passwordConfirmation" placeholder='Confirm password' /><br /><br />
        <button className="registerbtn" type="submit">Register</button><br /><br />
        {res && <p className="danger">{res.data.message}</p>}
      </Form>
    </>
  );
}


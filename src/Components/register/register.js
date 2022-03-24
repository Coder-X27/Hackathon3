import React, { useState } from 'react'
import axios from "axios"
import { useHistory } from 'react-router-dom'
import '../../Components/register/reg.css'

export default function Register() {

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  })
  const handleChange = e => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value
    })
  }

  const register = () => {
    console.log("jay")
    const { name, email, password, reEnterPassword } = user
    if (name && email && password && (password === reEnterPassword)) {
      alert("posted")
      axios.post("http://localhost:9002/register", user)
        .then(res => console.log(res))
    }
    else {
      alert("invalid credentials")
    }


  }
  const history = useHistory()


  return (
    <>
      <div className="container1 my-5">
      <div className="loginpage">
          <div className="form">
        {console.log("User", user)}
        <h1>Register Your Company</h1>
        <div className='mb-3'>
          <label for="exampleInputEmail1" class="form-label">Company's Name</label>
          <input type="text" className="form-control" placeholder='Enter your Name' name="name" value={user.name} onChange={handleChange} />
        </div>
        <div className='mb-3'>
          <label for="exampleInputPassword1" class="form-label">Email id</label>
          <input type="text" className="form-control" placeholder='Enter your Email' name="email" value={user.email} onChange={handleChange} />
        </div>

        <div className='mb-3'>
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" className="form-control" placeholder='Enter your password' name="password" value={user.password} onChange={handleChange} />
        </div>

        <div className='mb-3'>
          <label for="exampleInputPassword1" class="form-label">Re-Enter Password</label>
          <input type="password" className="form-control" placeholder='Re-Enter your password' name="reEnterPassword" value={user.reEnterPassword} onChange={handleChange} />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>


        <div className="btns">
        <button type="submit" class="btn-primary" onClick={register}>Register</button>
        <div>or</div>
        <button type="submit" class="btn-primary" onClick={() => history.push("/login")}>Login</button>

      </div>
      </div>
        </div>
      </div>
    </>
  )
}

import React, { useState } from 'react'
// import MidBox from '../Components/MidBox'
import "../Style/Common.css"
import { register } from '../Function/User'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
const Register = () => {

  const [data,setData] =useState()
  const navigate = useNavigate()
  const handleInput = (event) =>{
    setData({...data,[event.target.name]: event.target.value})
  }

  const handleSubmit = async(e) =>{
    e.preventDefault();
    const  result = await register(data)
    if (result) {
      navigate("/login")
      toast.success("Register Successful")
    }else{
      toast.error("Register failed")
    }
  }
  return (
    
   <div className='register-wrapper'>
     <form className='register-container' onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <input type="text" onChange={handleInput} name='username' placeholder='Your Name' required/>
      <input type="email" onChange={handleInput} name='email' placeholder='Your Email' required/>
      <input type="password" onChange={handleInput} name='password' placeholder='Password' required/>
      <input type="text" onChange={handleInput} name='phone' placeholder='Phone' required/>
      <h5>Already have an account?<Link to="/login">Sign In</Link></h5>
      <button id='btn-submit'>Sign Up</button>
    </form>
   </div>

  )
}

export default Register
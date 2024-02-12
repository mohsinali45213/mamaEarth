import React, { useState } from "react";
// import MidBox from "../Components/MidBox";
import { login } from "../Function/User";
import { useNavigate } from "react-router-dom";
import "../Style/Common.css"
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleSubmit = async(event) => {
    event.preventDefault();
    const result= await login({email,password})
    if(result){
      localStorage.setItem("user",JSON.stringify(result))
      navigate("/")
    }
  };

  // console.table(email,password);
  return (

      <div className="login-wrapper">
        <form className="login-container" onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <input type="text" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} required/>
        <input type="text" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}  required/>
        <button>Sign In</button>
      </form>
      </div>
    
  );
};

export default Login;

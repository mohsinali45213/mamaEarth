import React, { useState } from "react";
// import MidBox from "../Components/MidBox";
import { login } from "../Function/User";
import { Link, useNavigate } from "react-router-dom";
import "../Style/Common.css";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { userLogin } from "../redux/UserSlice";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await login({ email, password });
    if (result) {
      // dispatch(userLogin(result))
      localStorage.setItem(
        "user",
        JSON.stringify(result.userId)
      );
      navigate("/");
      toast.success("Login Successful")
    }else{
      toast.error("Login Failed")
    }
  };

  // console.table(email,password);
  return (
    <div className="login-wrapper">
      <form className="login-container" onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <h5>Not have an account?<Link to="/register">Sign Up</Link></h5>
        <button>Sign In</button>
      </form>
    </div>
  );
};

export default Login;

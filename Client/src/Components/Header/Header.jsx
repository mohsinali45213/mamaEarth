import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import "./Header.css"
const Header = () => {
const navigate = useNavigate()

  const [isOpen1,setIsOpen1] = useState(false);
  const [isOpen2,setIsOpen2] = useState(false);
  let openBtn1 = useRef()
  let openBtn2 = useRef()
  let ref1= useRef()
  let ref2= useRef()

  useEffect(()=>{
    let handler1 =(e)=>{
      let a = openBtn1.current.contains(e.target) 
      let b =ref1.current.contains(e.target)
      if(!a && !b){
        setIsOpen1(false)
      }
    }
    document.addEventListener("click",handler1)
    let handler2 =(e)=>{
      let c = openBtn2.current.contains(e.target) 
      let d =ref2.current.contains(e.target)
      if(!c && !d){
        setIsOpen2(false)
      }
    }
    document.addEventListener("click",handler2)
  })

  useEffect(()=>{
    const li = document.querySelectorAll(".order-detail li")
    
    console.log(li);
  })
  
  return (
    <div className='header'>
      <div className='header-top'>
        <img ref={openBtn1} onClick={()=>setIsOpen1(!isOpen1)} id="openNav" src="src/assets/Images/menu-burger.png" alt="" />
        <img id='logo' src="src/assets/Images/mamaearth_logo.png" alt="logo" />
        <div className='search'>
          <input type="search-input" />
          <button>
            <img id='search' src="src/assets/Images/search.png" alt="search" />
          </button>
        </div>

        <div className='icons'>
        <span onClick={()=>navigate("/cart")}>
          <img id="icon" src="src/assets/Images/shopping-bag.png" alt="cart" />
          <p>Cart</p>
        </span>
        <span ref={openBtn2} onClick={()=>setIsOpen2(!isOpen2)}>
          <img id="icon" src="src/assets/Images/user.png" alt="account" />
          <p>Account</p>
        </span>

        </div>
      </div>
      <div className='navbar'>
        <ul id='navbar-ul'className={isOpen1?"open":""} ref={ref1} >
        
        <div className='nav-info ' style={{width:"100%"}}>
          <img id='avatar' src="src/assets/Images/1.jpg" alt="" />
          <div className='user-name'>
          <h4>Harry Potter</h4>
          <h5>9834342134</h5>
          </div>
        </div>

          <li><i class="fa-solid fa-house"></i><Link id='navItem' to="/">Home</Link></li>
          <li><Link id='navItem' to="/">Hair</Link></li>
          <li><Link id='navItem' to="/">Face</Link></li>
          <li><Link id='navItem' to="/">Body</Link></li>
          <li><Link id='navItem' to="/">MakeUp</Link></li>
          <li><Link id='navItem' to="/">Ingredient</Link></li>
          <li><Link id='navItem' to="/">Baby</Link></li>
          <li><Link id='navItem' to="/">All Products</Link></li>
        </ul>
      </div>

      <div className={`account-detail ${isOpen2?"open":""}`} ref={ref2}>
        <div className='user-info'>
          <img id='avatar' src="src/assets/Images/1.jpg" alt="" />
          <div className='user-name'>
          <h4>Harry Potter</h4>
          <h5>9834342134</h5>
          </div>
        </div>
        <div className='order-detail'>
          <ul>
            <li><i className="fa-regular fa-user"></i><span>Your Profile</span></li>
            <li onClick={()=>navigate("/cart")}><i className="fa-solid fa-store"></i><span>Your Order</span></li>
            <li><i className="fa-solid fa-phone"></i><span>Contact Us</span></li>
            <li><i className="fa-solid fa-right-to-bracket"></i><span>Login</span></li>
            <li><i className="fa-solid fa-right-from-bracket"></i><span>Logout</span></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
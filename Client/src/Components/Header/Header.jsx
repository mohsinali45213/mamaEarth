import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
import "./Header.js"
const Header = () => {
  return (
    <div className='header'>
      <div className='header-top'>
        <img id="openNav" src="src/assets/Images/menu-burger.png" alt="" />
        <img id='logo' src="src/assets/Images/mamaearth_logo.png" alt="logo" />
        <div className='search'>
          <input type="search-input" />
          <button>
            <img id='search' src="src/assets/Images/search.png" alt="search" />
          </button>
        </div>
        <div className='icons'>
        <span>
          <img id="icon" src="src/assets/Images/shopping-bag.png" alt="cart" />
          <p>Cart</p>
        </span>
        <span>
          <img id="icon" src="src/assets/Images/user.png" alt="account" />
          <p>Account</p>
        </span>
        </div>
      </div>
      <div className='navbar'>
        <ul id='navbar-ul'>
          <li><Link id='navItem' to="/">Home</Link></li>
          <li><Link id='navItem' to="/">Hair</Link></li>
          <li><Link id='navItem' to="/">Face</Link></li>
          <li><Link id='navItem' to="/">Body</Link></li>
          <li><Link id='navItem' to="/">MakeUp</Link></li>
          <li><Link id='navItem' to="/">Ingredient</Link></li>
          <li><Link id='navItem' to="/">Baby</Link></li>
          <li><Link id='navItem' to="/">All Products</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Header
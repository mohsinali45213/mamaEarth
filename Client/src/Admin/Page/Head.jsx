import React from 'react'
import "../../Style/Admin.css"
import { Link, Outlet } from 'react-router-dom'
const Header = () => {
  return (
      <div className='main-container'>
        <div className='left-container'>
        <div>
          
          <h1 id="title"><Link to="/"><i className="fa-solid fa-arrow-left" style={{
            color:"white",
            marginLeft:"-10px"
          }}></i></Link>   Dashboard</h1>
        </div>
        <ul>
          <li><Link to="/admin/products" id='link'>Products</Link></li>
          <li><Link to="/admin/category" id='link'>Category</Link></li>
          <li><Link to="/admin/sub-category" id='link'>SubCategory</Link></li>
          <li><Link to="/admin/order" id='link'>Order</Link></li>
          <li><Link to="/admin/customer" id='link'>Customer</Link></li>
        </ul>
        </div>
        <div className='right-container'>
         
          <Outlet/>
        </div>
      </div>
  )
}

export default Header
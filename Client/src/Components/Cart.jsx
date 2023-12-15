import React from 'react'
import "../Style/Cart.css"
const Cart = ({img,description,info,price}) => {
  return (
    <div className='product-cart'>
      <img id="product-img" src={img} alt="" />
      <h3>{description}</h3>
      <h4>{info}</h4>
      <h5>Review</h5>
      <p id='price'>{price}</p>
      <button>ADD TO CART</button>
    </div>
  )
}

export default Cart
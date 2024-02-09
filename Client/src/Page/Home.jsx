import React from 'react'
import Cart from '../Components/Cart'
import "../Style/Home.css"
const Home = () => {
  
  const product ={
    img:"/src/assets/Images/1.jpg",
    about:"Onion Hair Oil for Hair Regrowth and Hair Fall Control, 250ml",
    info:"Boosts Hair Growth | Adds Strength & Shine",
    price:"349.00"
  }
  return (
    <div className='allProduct'>
      <Cart  img={product.img} about={product.about} info={product.info} price={product.price} />
      <Cart  img={product.img} about={product.about} info={product.info} price={product.price} />
      <Cart  img={product.img} about={product.about} info={product.info} price={product.price} />
      <Cart  img={product.img} about={product.about} info={product.info} price={product.price} />
      <Cart  img={product.img} about={product.about} info={product.info} price={product.price} />
      <Cart  img={product.img} about={product.about} info={product.info} price={product.price} />
      <Cart  img={product.img} about={product.about} info={product.info} price={product.price} />
      <Cart  img={product.img} about={product.about} info={product.info} price={product.price} />
      <Cart  img={product.img} about={product.about} info={product.info} price={product.price} />
      <Cart  img={product.img} about={product.about} info={product.info} price={product.price} />
      <Cart  img={product.img} about={product.about} info={product.info} price={product.price} />
      <Cart  img={product.img} about={product.about} info={product.info} price={product.price} />
    </div>
  )
}

export default Home
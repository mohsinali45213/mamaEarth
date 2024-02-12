import React from 'react'
import "../Style/Common.css"
const Contact = () => {
  return (
    <div className='contact-wrapper'>
      <form className='contact-container'>
        <h2>Contact Us</h2>
        <input type="text" placeholder='Your Name'/>
        <input type="text" placeholder='Your Email'/>
        <input type="text" placeholder='Phone'/>
        <textarea type="text" rows="10" placeholder='Your Massage'/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Contact
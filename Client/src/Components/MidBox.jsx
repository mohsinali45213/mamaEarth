import React from 'react'
import '../Style/MidBox.css'
const MidBox = ({children}) => {
  return (
    <div className='box-wrapper'>
      <div className='box-container'>
       {children}
      </div>
    </div>
  )
}

export default MidBox
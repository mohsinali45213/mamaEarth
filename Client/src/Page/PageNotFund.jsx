import React from 'react'
import "../Style/Common.css"
import { Link } from 'react-router-dom'
const PageNotFund = () => {
  return (
    <div className='notFound'>
      <div>
      <h1>404</h1>
      <Link to="/" id='backToHome'>Back To Home</Link>
      </div>
    </div>
  )
}

export default PageNotFund
import React from 'react'
import DeletePopup from '../../Components/DeletePopup'


const Products = () => {

  return (
    <div className='p-container'>
      <button id='btnNew'>
        <i className="fa-solid fa-circle-plus"></i> New
      </button>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
           <td id='p-td'>
            <img src="/src/assets/Images/1.jpg" alt="" />
            <h5>Rose Face Mask</h5>
           </td>
           <td>Hair</td>
           <td>12</td>
           <td>$320</td>
           <td>Active</td>
           <td>
           <i className="fa-solid fa-pen-to-square"></i>
           <i className="fa-solid fa-trash"></i>
           </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Products
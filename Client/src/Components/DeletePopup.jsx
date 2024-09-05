import React from 'react'
import MidBox from './MidBox'
import '../Style/MidBox.css'
const DeletePopup = ({setOpen,deleteCategory,slug}) => {
  return (
      <MidBox>
        <div className='delete-container'>
          <div>
          <i className="fa-solid fa-triangle-exclamation"></i>
          <span>Delete Content ?</span>
          </div>
          <h5>Are you sure you want to delete this content ?</h5>
          <div>
            <button onClick={()=>setOpen(false)}  id='btn-left'>Cancel</button>
            <button onClick={()=>deleteCategory(slug)} id='btn-right'>Delete</button>
          </div>
        </div>
      </MidBox>
  )
}

export default DeletePopup
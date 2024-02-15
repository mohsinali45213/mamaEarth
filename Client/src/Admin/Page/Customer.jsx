import React, { useEffect, useState } from 'react'
import { getUsers } from '../../Function/User'
import Loading from '../../Page/Loading';
const Customer = () => {
  const [user,setUser] = useState();
  useEffect(()=>{
    const fetchData = async()=>{
    const result = await getUsers();
    setUser(result)
    }
    fetchData()
  },[])

  console.log(user);
  return (
    <div>
      {
        user?
        <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Roll</th>
          <th>Phone</th>
        </tr>
        </thead>
        <tbody>
        {
          user?.map((item)=>(
        <tr>
            <td id='p-td'>
              <img src={item.userImage}  alt="" />
              <p>{item?.username}</p>
            </td>
            <td>{item?.email}</td>
            <td>{item?.role}</td>
            <td>{item?.phone}</td>
        </tr>
          ))
        }
        </tbody>
      </table>:<Loading/>
      }
    </div>
  )
}

export default Customer
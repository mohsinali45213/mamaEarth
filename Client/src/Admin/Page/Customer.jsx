import React, { useEffect, useState } from 'react'
import { getUsers } from '../../Function/User'
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
            <td>{item?.username}</td>
            <td>{item?.email}</td>
            <td>{item?.role}</td>
            <td>{item?.phone}</td>
        </tr>
          ))
        }
        </tbody>
      </table>
    </div>
  )
}

export default Customer
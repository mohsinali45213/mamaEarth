import React, { useEffect, useState } from "react";
import { getUsers } from "../../Function/User";
import Loading from "../../Page/Loading";
import Search from "../../Components/Search";
const Customer = () => {
  const [user, setUser] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const result = await getUsers();
      setUser(result);
    };
    fetchData();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = user?.filter((item) => {
    return item.username.toLowerCase().includes(searchTerm.toLowerCase());
  });

  // console.log(user);
  return (
    <div>
      <Search handleSearch={handleSearch} searchTerm={searchTerm} />
      {user ? (
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Roll</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {filteredData?.map((item,i) => (
              <tr key={item._id}>
                <td>{i+1}</td>
                <td id="p-td">
                  <img src={item.userImage} alt="" />
                  <p>{item?.username}</p>
                </td>
                <td>{item?.email}</td>
                <td>{item?.role}</td>
                <td>{item?.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Customer;

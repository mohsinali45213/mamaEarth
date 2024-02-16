import React, { useEffect, useState } from "react";
import "../Style/Profile.css";
import toast from "react-hot-toast";
import { singleUser, uploadImage, userUpdate } from "../Function/User";
import { useLocation } from "react-router-dom";
const Profile = () => {
  const [toggle, setToggle] = useState(false);
  const [userId, setUserId] = useState();
  const [user, setUser] = useState();
  const [updateData, setUpdateData] = useState();
  const [userImage, setUserImage] = useState();
  const location = useLocation()
  useEffect(() => {
    setUserId(JSON.parse(localStorage.getItem("user")));
    getUserData();
  }, [userId,toggle,location.pathname]);

  const getUserData = async () => {
    const result = await singleUser(userId);
    setUser(result);
  };
 

  const handleInput = (e) => {
    if (e.target.type === "file") {
      setUpdateData({ ...updateData, [e.target.name]: e.target.files[0] });
    } else {
      setUpdateData({ ...updateData, [e.target.name]: e.target.value });
    }
  };
  const putData = async () => {
    if (userImage) {
      const formData = new FormData();
      for (const key in updateData) {
        formData.append(key, updateData[key]);
      }
      const result1 = await uploadImage(user._id, userImage);
      if (result1) {
        setToggle(false)
      }
    }
    const result = await userUpdate(user._id, updateData);
    if (result) {
      setToggle(false);
      toast.success("Update Successful")
    }
  };

  return (
    <div className="profile-container">
      <div className={`display-data ${toggle ? "toggle" : ""}`}>
        <div className="profile-img">
          <img src={user?.userImage} alt="" />
        </div>
        <button onClick={() => setToggle(true)}>Edit</button>
        <div className="profile-info">
          <div>
            <i className="fa-solid fa-user"></i>
            <div className="name">
              <h4>Name</h4>
              <h5>{user?.username}</h5>
            </div>
          </div>
          <div>
            <i className="fa-solid fa-envelope"></i>
            <div className="name">
              <h4>Email</h4>
              <h5>{user?.email}</h5>
            </div>
          </div>
          <div>
            <i className="fa-solid fa-phone"></i>
            <div className="phone">
              <h4>Phone</h4>
              <h5>{user?.phone}</h5>
            </div>
          </div>
        </div>
      </div>
      <div className={`update-data ${toggle ? "toggle" : ""}`}>
        <section>
          <div>
            <input
              onChange={handleInput}
              type="text"
              name="username"
              placeholder="Name"
              defaultValue={user?.username}
            />
            <input
              onChange={handleInput}
              type="text"
              name="email"
              placeholder="Email"
              defaultValue={user?.email}
            />
          </div>
          <div>
            <input
              onChange={handleInput}
              type="tel"
              name="phone"
              placeholder="Phone"
              defaultValue={user?.phone}
            />
            <input
              onChange={(e) => setUserImage(e.target.files[0])}
              type="file"
              name="userImage"
            />
          </div>
          <div>
            <button onClick={() => setToggle(false)}>Cancel</button>
            <button onClick={putData}>Submit</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Profile;

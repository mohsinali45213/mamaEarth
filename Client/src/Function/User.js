import axios from "axios";
const API_URL = `${import.meta.env.VITE_API_URL}/api/v1/users`;

const register = async (registerDetail) => {
  try {
    const register = await axios.post(`${API_URL}/register`, registerDetail);
    console.log("Register Successful...");
    return register.data;
  } catch (error) {
    console.log("Register Failed::", error);
  }
};

const login = async (loginDetail) => {
  try {
    const login = await axios.post(`${API_URL}/login`, loginDetail);
    console.log("Login Successful...");
    return login.data;
  } catch (error) {
    console.log("Login Failed::", error);
  }
};

const uploadImage = async (userId,userImage) => {
  try {
    const upload = await axios.post(`${API_URL}/upload/${userId}`, {userImage},{
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    });
    console.log("Image Is Uploaded");
    return upload.data;
  } catch (error) {
    console.log("Image Upload Failed::", error);
  }
};

const getUsers = async () => {
  try {
    const users = await axios.get(`https://mamaearth-xlme.onrender.com/api/v1/users`);
    console.log("Get successful...");
    return users.data
  } catch (error) {
    console.log("Not Get...");
  }
};

const singleUser =async(id)=>{
  try {
    const user = await axios.get(`https://mamaearth-xlme.onrender.com/api/v1/users/${id}`)
    return user.data
  } catch (error) {
    console.log("user not fetch");
  }
}

const userUpdate = async(id,userData)=>{
  try {
    const user =await axios.post(`https://mamaearth-xlme.onrender.com/api/v1/users/${id}`,userData)
    return user.data
  } catch (error) {
    console.log("user not update",error);
  }
}

const logout =async(id)=>{
  try {
    const user=await axios.get(`https://mamaearth-xlme.onrender.com/api/v1/users/logout/${id}`)
    if (user) {
      console.log("Logout.....");
      localStorage.removeItem("user")
    }
  } catch (error) {
    console.log("Logout Failed...");
  }
}
export { login, register, uploadImage ,getUsers,singleUser,userUpdate,logout};

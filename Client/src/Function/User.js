import axios from "axios";

const API_URL = "http://localhost:3000/api/v1/users";

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

const uploadImage = async (image, userId) => {
  try {
    const upload = await axios.post(`${API_URL}/upload/${userId}`, image);
    console.log("Image Is Uploaded");
    return upload.data;
  } catch (error) {
    console.log("Image Upload Failed::", error);
  }
};

const getUsers = async () => {
  try {
    const users = await axios.get(`http://localhost:3000/api/v1/users`);
    console.log("Get successful...");
    return users.data
  } catch (error) {
    console.log("Not Get...");
  }
};
export { login, register, uploadImage ,getUsers};

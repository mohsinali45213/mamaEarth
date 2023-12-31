import axios from "axios";

const register = async (registerDetail) => {
  try {
    const register = await axios.post("/users/register", registerDetail);
    console.log("Register Successful...");
    return register.data;
  } catch (error) {
    console.log("Register Failed::", error);
  }
};

const login = async (loginDetail) => {
  try {
    const login = await axios.post("/users/login", loginDetail);
    console.log("Login Successful...");
    return login.data;
  } catch (error) {
    console.log("Login Failed::",error);
  }
};

const uploadImage = async (image, userId) => {
  try {
    const upload = await axios.post(`/upload/${userId}`, image);
    console.log("Image Is Uploaded");
    return upload.data;
  } catch (error) {
    console.log("Image Upload Failed::", error);
  }
};
export { login, register, uploadImage };

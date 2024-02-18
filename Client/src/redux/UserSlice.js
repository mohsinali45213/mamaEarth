import { createSlice } from "@reduxjs/toolkit";

const initialState=[]

export const userReducer = createSlice({
  name:"User",
  initialState,
  reducers:{
    userLogin:(state,action)=>{
      return action.payload
    },
    userLogout:(state)=>{
      return null
    }
  }
})

export const {userLogin} = userReducer.actions
export default userReducer.reducer
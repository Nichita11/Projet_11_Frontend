import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userToken:
      localStorage.getItem("userToken") || sessionStorage.getItem("userToken"),
      
  },
  reducers: {
    login: (state, action) => {
      state.userToken = action.payload
      sessionStorage.setItem("userToken", action.payload)
    },
    loginPersist: (state, action) => {
      state.userToken = action.payload
      localStorage.setItem("userToken", action.payload)
    },
    logout: state => {
      state.userToken = null
      localStorage.removeItem("userToken")
      sessionStorage.removeItem("userToken")
    },
  },
})

export const { login, logout, loginPersist } = userSlice.actions

export const selectUser = (state: any) => state.user.userToken

export default userSlice.reducer

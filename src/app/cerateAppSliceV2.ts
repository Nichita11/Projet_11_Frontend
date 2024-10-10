import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userToken:
      localStorage.getItem("userToken") || sessionStorage.getItem("userToken"),
    userData: {
      userName:
        localStorage.getItem("userName") || sessionStorage.getItem("userName"),
      firstName:
        localStorage.getItem("firstName") ||
        sessionStorage.getItem("firstName"),
      lastName:
        localStorage.getItem("lastName") || sessionStorage.getItem("lastName"),
    },
  },
  reducers: {
    login: (state, action) => {
      state.userToken = action.payload.userToken
      sessionStorage.setItem("userToken", action.payload.userToken)
      state.userData = action.payload.userData
      sessionStorage.setItem("userName", action.payload.userData.userName)
      sessionStorage.setItem("firstName", action.payload.userData.firstName)
      sessionStorage.setItem("lastName", action.payload.userData.lastName)
    },
    loginPersist: (state, action) => {
      state.userToken = action.payload.userToken
      localStorage.setItem("userToken", action.payload.userToken)
      state.userData = action.payload.userData
      localStorage.setItem("userName", action.payload.userData.userName)
      localStorage.setItem("firstName", action.payload.userData.firstName)
      localStorage.setItem("lastName", action.payload.userData.lastName)
    },
    logout: state => {
      state.userToken = null
      state.userData = { userName: null, lastName: null, firstName: null }
      localStorage.removeItem("userToken")
      sessionStorage.removeItem("userToken")

      localStorage.removeItem("userName")
      sessionStorage.removeItem("userName")
      localStorage.removeItem("firstName")
      sessionStorage.removeItem("firstName")
      localStorage.removeItem("lastName")
      sessionStorage.removeItem("lastName")
    },
    setUserData: (state, action) => {
      state.userData = action.payload
    },
  },
})

export const { login, logout, loginPersist, setUserData } = userSlice.actions

export const selectToken = (state: any) => state.user.userToken
export const selectUser = (state: any) => state.user.userData

export default userSlice.reducer

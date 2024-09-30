import "./App.css"
import {
  BrowserRouter,
  Routes,
  Route,
  createRoutesFromElements,
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom"
import Home from "./components/home/Home"
import Navbar from "./components/Navbar/Navbar"
import SignIn from "./components/SingIn/SignIn"
import User from "./components/User/User"
import { Provider, useSelector } from "react-redux"
import { storeV2 } from "./app/storeV2"
import { selectUser } from "./app/cerateAppSliceV2"

const RoutesComponent = () => {
  const user = useSelector(selectUser)
  const routes = createRoutesFromElements(
    <>
      {/* <Route path="*" element={<ErrorPage />} /> */}
      <Route
        path="/"
        element={<Home />}
        loader={async () => {
          if (user) {
            let userData = null
            await fetch("http://localhost:3001/api/v1/user/profile", {
              method: "GET",
              headers: {
                Authorization: `Bearer ${user}`,
              },
            })
              .then(res => {
                return res.json()
              })
              .then(json => {
                userData = json.body
              })
            return userData
          }
          return null
        }}
      />
      <Route
        path="sign-in"
        element={<SignIn />}
        loader={async () => {
          if (user) {
            return redirect("/user")
          }
          return null
        }}
      />
      <Route
        path="user"
        element={<User />}
        loader={async () => {
          if (!user) {
            return redirect("/sign-in")
          }
          let userData = null
          await fetch("http://localhost:3001/api/v1/user/profile", {
            method: "GET",
            headers: {
              Authorization: `Bearer ${user}`,
            },
          })
            .then(res => {
              return res.json()
            })
            .then(json => {
              userData = json.body
            })
          return userData
        }}
      />
    </>,
  )
  const router = createBrowserRouter(routes)
  return <RouterProvider router={router} />
}

const App = () => {
  return (
    <Provider store={storeV2}>
      <RoutesComponent />
    </Provider>
  )
}

export default App

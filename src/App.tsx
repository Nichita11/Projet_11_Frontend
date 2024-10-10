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
import { selectToken, selectUser } from "./app/cerateAppSliceV2"

const RoutesComponent = () => {
  const userToken = useSelector(selectToken)
  const routes = createRoutesFromElements(
    <>
      {/* <Route path="*" element={<ErrorPage />} /> */}
      <Route path="/" element={<Home />} />
      <Route
        path="sign-in"
        element={<SignIn />}
        loader={async () => {
          if (userToken) {
            return redirect("/user")
          }
          return null
        }}
      />
      <Route
        path="user"
        element={<User />}
        loader={async () => {
          if (!userToken) {
            return redirect("/sign-in")
          }
          return null
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

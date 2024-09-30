import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Layout from "../Layout/Layout"
import { faUserCircle } from "@fortawesome/free-solid-svg-icons"

import "./SignIn.css"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { login, loginPersist, selectUser } from "../../app/cerateAppSliceV2"
import { redirect } from "react-router-dom"

export default function SignIn() {
  const [form, setForm] = useState<{
    username: string
    password: string
    remember: boolean
  }>({
    username: "",
    password: "",
    remember: false,
  })
  const dispatch = useDispatch()
  const signIn = async (e: any) => {
    e.preventDefault()
    const req = await fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: form.username, password: form.password }),
    }).then(resposne => resposne.json())
    if (req.status === 200) {
      if (form.remember) {
         dispatch(loginPersist(req.body.token))
      } else {
        dispatch(login(req.body.token))
      }
    }
    redirect('/user')
  }

  return (
    <Layout>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <FontAwesomeIcon icon={faUserCircle} className="sign-in-icon" />
          <h1>Sign In</h1>
          <form>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={form.username}
                autoComplete="password"
                onChange={e => {
                  setForm(prev => ({
                    ...prev,
                    username: e.target.value,
                  }))
                }}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={form.password}
                name="password"
                autoComplete="password"
                onChange={e => {
                  setForm(prev => ({
                    ...prev,
                    password: e.target.value,
                  }))
                }}
              />
            </div>
            <div className="input-remember">
              <input
                type="checkbox"
                id="remember-me"
                checked={form.remember}
                onChange={e => {
                  setForm(prev => ({ ...prev, remember: !prev.remember }))
                }}
              />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            {/* <a href="./user.html" className="sign-in-button">
              Sign In
            </a> */}
            <button
              className="sign-in-button"
              type="submit"
              onClick={e => signIn(e)}
            >
              Sign In
            </button>
          </form>
        </section>
      </main>
    </Layout>
  )
}

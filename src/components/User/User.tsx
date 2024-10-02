import Layout from "../Layout/Layout"
import "./User.css"
import { useEffect, useState } from "react"
import Accordeon from "../Accordeon/Accordeon"
import { selectUser } from "../../app/cerateAppSliceV2"
import { useSelector } from "react-redux"
import { useLoaderData } from "react-router-dom"

// let userData: {
//   userName: string
//   email: string
//   firstName: string
//   lastName: string
//   createdAt: string
//   id: string
// } | null = null

const userAccounts: { transactions: number; balance: string }[] = [
  { transactions: 566, balance: "$200.56" },
  { transactions: 201, balance: "$50000.00" },
  { transactions: 69, balance: "$420.69" },
]

export default function User() {
  const userData: any = useLoaderData()
  const [form, setForm] = useState<{
    username: string
    Firstname: string
    Lastname: string
  }>({
    username: userData.userName,
    Firstname: userData.firstName,
    Lastname: userData.lastName,
  })

  const user = useSelector(selectUser)

  const cancel = () => {
    location.reload()
  }

  const save = () => {
    fetch("http://localhost:3001/api/v1/user/profile", {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${user}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName: form.username }),
    })
      .then(async res => await res.json())
      .then(res => {
        location.reload()
      })
  }
  return (
    // @ts-ignore
    <Layout>
      <main className="main bg-bright">
        <div className="header">
          <h1 className="User_info">Edit user info</h1>
          <div className="label_user">
            <div className="input_group">
              <label className="label_text">
                User name:
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
              </label>
              <label className="label_text">
                First name:
                <input
                  disabled
                  type="text"
                  maxLength={15}
                  id="firstname"
                  name="firstname"
                  value={form.Firstname}
                  onChange={e => {
                    setForm(prev => ({
                      ...prev,
                      Firstname: e.target.value,
                    }))
                  }}
                />
              </label>
              <label className="label_text">
                Last name:
                <input
                  disabled
                  type="text"
                  maxLength={15}
                  id="lastname"
                  name="lastname"
                  value={form.Lastname}
                  onChange={e => {
                    setForm(prev => ({
                      ...prev,
                      Lastname: e.target.value,
                    }))
                  }}
                />
              </label>
            </div>
          </div>
        </div>
        <div className="flex_button">
          <button
            className="edit-button"
            type="submit"
            onClick={e => {
              e.preventDefault()
              save()
            }}
          >
            Save
          </button>
          <button
            className="edit-button"
            type="submit"
            onClick={e => {
              e.preventDefault()
              cancel()
            }}
          >
            Cancel
          </button>
        </div>

        <h2 className="sr-only">Accounts</h2>
        {userAccounts.map((el, key) => (
          <div className="transaction-container" key={key}>
            <div className="transaction-list-wrapper">
              <Accordeon {...el}></Accordeon>
            </div>
          </div>
        ))}
      </main>
    </Layout>
  )
}

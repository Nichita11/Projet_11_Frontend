import { useLoaderData } from "react-router-dom"
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar  />
      {children}
      <Footer />
    </>
  )
}

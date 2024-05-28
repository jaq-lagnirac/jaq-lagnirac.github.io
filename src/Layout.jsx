import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import { Outlet } from "react-router-dom"
import './Layout.css'

export function Layout() {

  return (
    <>
      <Navbar/>
      <main>
        <div className="page" style={{margin: "auto"}}>
          <Outlet/>
        </div>
      </main>
      <Footer/>
    </>
  )
}
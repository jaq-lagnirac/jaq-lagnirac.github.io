import { Navbar } from "./components/Navbar"
import { Outlet } from "react-router-dom"
import './Layout.css'

export function Layout() {

  return (
    <>
      <Navbar/>
        <main>
          <div className="page">
            <Outlet/>
          </div>
        </main>
    </>
  )
}
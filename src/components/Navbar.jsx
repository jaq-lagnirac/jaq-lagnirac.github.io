import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import FadeIn from "react-fade-in/lib/FadeIn"
import "./Navbar.css"
import HamburgerIcon from "../assets/Hamburger_icon.svg"

import { useDispatch } from "react-redux"
import { Toggle } from "./Toggle"
import useLocalStorage from "use-local-storage"
import { toggleMode } from "../darkModeSlice"

export function Navbar() {

  // implements hover to show functionality across the nav bar
  const [showNav, setShowNav] = useState(false)
  
  // extract sys pref and uses it as default
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  
  // stores darkmode preference locally (most likely redundant with redux)
  // possibility of switching the react useState but still works as intended
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);

  // redux state management
  let dispatch = useDispatch()

  // sets toggle on render
  useEffect(() => {
    setIsDark(preference)
  }, [])

// sets up button functionality to work with hover to show
  function HoverButton({ className, children }) {
    return (
      <b
        className={className}
        onMouseEnter={() => setShowNav(true)}
        onMouseLeave={() => setShowNav(false)}
      >
        {children}
      </b>
    )
  }

  // button list, used to show
  function NavButtonList({ className, show }) {
    if (show) {
      return (
        <FadeIn>
          <HoverButton className={className}>
            <Link to="/">Home</Link>
          </HoverButton>
          <HoverButton className={className}>
            <Link to="/page1">Page 1</Link>
          </HoverButton>
        </FadeIn>
      )
    }
  }

  return (
    <table className="nav-container">
      <tbody>
        <tr>
          <td className="navbar">
            <HoverButton className="nav-button hamburger">
              <img src={HamburgerIcon} alt="Menu"/>
              {/* <object data={HamburgerIcon}></object> */}
            </HoverButton>
            <NavButtonList className="nav-button nav-tabs" show={showNav}/>
          </td>
          <td className="dark-mode-toggle">
            <Toggle
                isChecked={isDark}
                handleChange={() => dispatch(toggleMode(), setIsDark(!isDark))}
              />
          </td>
        </tr>
      </tbody>
    </table>
  )
}
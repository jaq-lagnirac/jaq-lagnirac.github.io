import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import FadeIn from "react-fade-in/lib/FadeIn"
import "./Navbar.css"
import { BiMenu } from "react-icons/bi";


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

  // sets toggle on render (extra level of assurance)
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
        onClick={() => setShowNav(!showNav)} // for accessibility
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
            <Link to="/contact">Contact</Link>
          </HoverButton>
        </FadeIn>
      )
    }
  }

  return (
    <>
      {/* <div id="nav-bg"/> */}
      <table className="nav-container">
        <tbody>
          <tr>
            <td className="navbar">
              <HoverButton className="nav-button">
                <BiMenu 
                  id="hamburger"
                  size="1.75em"
                />
                {/* <img src={HamburgerIcon} alt="Menu"/> */}
                {/* <object data={HamburgerIcon}></object> */}
              </HoverButton>
              <NavButtonList className="nav-button nav-tabs" show={showNav}/>
            </td>
            <td className="dark-mode-toggle nav-button">
              <Toggle
                  isChecked={isDark}
                  handleChange={() => {setIsDark(!isDark), dispatch(toggleMode())}}
                />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
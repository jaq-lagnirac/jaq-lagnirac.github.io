import { FaInstagram } from "react-icons/fa6";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export function Contact() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "calc(100vh - var(--footer-height))" }}>
      <h1>Contact page</h1>
      <p style={{
        marginTop: "2vh",
        textAlign: "center",
        fontSize: "1.25em",
        lineHeight: "1.5em",
      }}>
        Fully fleshed-out page coming soon!
        <br/><br/>
        In the mean time, feel free to reach out at:
        <br/>
        <FaArrowRight/>
        <a href="https://www.instagram.com/jaq_lagnirac/"> <FaInstagram/> @jaq_lagnirac </a>
        <FaArrowLeft/>
      </p>
    </div>
  )
}
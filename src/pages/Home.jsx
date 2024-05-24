import { TypeAnimation } from "react-type-animation"
import DigitalCodeRain from "../assets/DigitalCodeRainAnimation_OlegGamulinskii_4kUHD.gif"
import './Home.css'

export function Home() {
  
  const typeSequence =[
    'Justin the Martial Artist',
    1000,
    'Justin the Programmer',
    1000,
    'Justin the Gamer',
    1000,
    'Justin the Painter',
    1000,
    'Justin the Dungeon Master',
    1000,
  ]

  return (
    <>
      <div className="landing">
        <img
          src={DigitalCodeRain}
          id="digital-code-rain"
          alt="Landing page"
        />
        <div className="home-text-grouping">
          <TypeAnimation
            sequence={typeSequence}
            wrapper="span"
            speed={50}
            className="type-animation"
            repeat={Infinity}
          />
          <br/>
          <br/>
          <p className="landing-blurb">Placeholder text</p>
        </div>
      </div>
      <div style={{height: "10vh"}}/> {/* gives room for animation */}
    </>
  )
}
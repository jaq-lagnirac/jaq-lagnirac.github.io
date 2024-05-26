import { TypeAnimation } from "react-type-animation"
import { HomeCard } from "../components/HomeCard"
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
      <div id="landing">
        <img
          src={DigitalCodeRain}
          id="digital-code-rain"
          alt="Landing page"
        />
        <div id="home-text-grouping">
          <TypeAnimation
            sequence={typeSequence}
            wrapper="span"
            speed={50}
            className="type-animation"
            repeat={Infinity}
          />
          <br/>
          <br/>
          <p id="landing-blurb">
            A multifaceted individual of eclectic tastes
            who possesses a great love of learning.
          </p>
        </div>
      </div>
      <div style={{height: "15vh"}}/> {/* gives room for animation */}
      <div style={{textAlign: "center"}}>
        <HomeCard
          title="This is test title 1"
          img="https://lyndellinstitute.com/wp-content/uploads/2019/05/Justin-about.jpg"
          side="left"
        >
          This is a test paragraph
        </HomeCard>
        <HomeCard
          title="This is test title 2"
          img=""
          side="right"
        >
          This is a test paragraph
        </HomeCard>
        <HomeCard
          title="This is test title 3"
          img=""
          side="left"
        >
          This is a test paragraph
        </HomeCard>
        
      </div>
      <div style={{height: " 100vh"}}/>
    </>
  )
}
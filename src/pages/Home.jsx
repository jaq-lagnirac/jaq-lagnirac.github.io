import { TypeAnimation } from "react-type-animation"
import { HomeCard } from "../components/HomeCard"
import DigitalCodeRain from "../assets/DigitalCodeRainAnimation_OlegGamulinskii_4kUHD.gif"
import './Home.css'
import TKDJustin from "../assets/TKD_Justin.jpg"
import JustinWorking from "../assets/Justin_working.jpg"
import { Link } from "react-router-dom"

export function Home() {
  
  const typeSequence =[
    'Justin Caringal',
    1000,
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
    <div id="transition-bg"/> {/* this literally only exists so I can do the fade-to-white on the GIF */}
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
        <h1 style={{visibility: "visible"}}>Overview</h1>
        <p>A cursory look over who I am and what I do.</p>
        <HomeCard
          title="Education"
          img={JustinWorking}
          side="left"
        >
          I am a Computer Science major at Truman State Univeristy (Class
          of 2025) with minors in Statistics, Data Science, and French.
        </HomeCard>
        <HomeCard
          title="Projects and Experience"
          img=""
          side="right"
        >
          I have conducted research projects in a Artificial Intelligence,
          Bioinformatics, Cancer Genomics and Data Science (among other
          fields) with researchers at Truman State University and Washington
          University of Saint Louis.
        </HomeCard>
        <HomeCard
          title="Activities"
          img=""
          side="left"
        >
          I have held the offices of President in Truman's Assocation for
          Computing Machinery, the Stargazers Astronomy Club, and Pi Delta
          Phi National French Honor Society. In addition, I've held other
          various positions and am an active part in the Truman community.
        </HomeCard>
        <HomeCard
          title="Chung Do Kwan Tae Kwon Do"
          img={TKDJustin}
          side="right"
        >
          I am a black belt in Tae Kwon Do (Chung Do Kwan school)
          and have been an assistant instructor at Lyndell Institute
          since 2016.
        </HomeCard>
        <HomeCard
          title="Honors and Awards"
          img=""
          side="left"
        >
          I am a proud member of ΦΒΚ (The Phi Beta Kappa Society),
          ΦΚΦ (The Honor Society of Phi Kappa Phi), and ΠΔΦ (Pi Delta Phi,
          the National French Honor Society).
        </HomeCard>
      </div>
      <div style={{height: "15vh"}}/>
    </>
  )
}
import { Article } from "../components/Article";
import { Landing } from "../components/Landing";
import "./Projects.css"
import { GrProjects } from "react-icons/gr";
import { useEffect } from "react";

import JustinWorking from "../assets/Justin_working.jpg"

export function Projects() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="content-page short-page">
      <div style={{ height: "30vh" }}/>
        <Landing
          icon={<GrProjects/>}
          title="Projects"
        />
      <div style={{ height: "50vh" }}/>
      <Article title={"title"} img={ JustinWorking }>
        This is a test of what exactly I can write.
      </Article>
      {/* <hr/> */}
      {/* <h1>test2</h1> */}
      <div style={{ height: "30vh" }}/>
    </div>
  )
}
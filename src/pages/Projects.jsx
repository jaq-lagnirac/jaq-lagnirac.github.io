import { Landing } from "../components/Landing";
import "./Projects.css"
import { GrProjects } from "react-icons/gr";


export function Projects() {
  return (
    <div className="content-page short-page" style={{height: "200vh"}}>
      <div style={{ height: "30vh" }}/>
        <Landing
          icon={<GrProjects/>}
          title="Projects"
        />
      <div style={{ height: "40vh" }}/>
      <h1>test1</h1>
      <hr/>
      <h1>test2</h1>
    </div>
  )
}
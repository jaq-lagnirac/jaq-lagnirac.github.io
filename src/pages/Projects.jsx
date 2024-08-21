import { Article } from "../components/Article";
import { Landing } from "../components/Landing";
import "./Projects.css"
import { GrProjects } from "react-icons/gr";
import { useEffect } from "react";

import mediroLogo from "../assets/logo-color.svg"
import pptLogo from "../assets/Microsoft_PowerPoint_Logo.png"

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
      <Article title="Mediro - Media Directory Organizer" img={ mediroLogo }>
        I developed this tool in order to facilitate the automatic sorting
        of pictures and videos in a Windows directory. My family gets a lot
        of use out of our cameras, whether that be on a month long vacation
        or to document the little things in life. My family has a hard disk
        drive for cold storage backup and had been manually sorting all of
        the files by hand, taking hours and days of work. Therefore, we 
        wanted to a one-click executable which could read in inputs from a
        directory and sort them based on the creation date.
        <br/>
        <br/>
        Most cameras and files created are named using the&nbsp; 
        <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO 8601 format</a>,
        so the basic way to process the files is to parse this data and output
        the nested directories required to successfully sort the files. No
        superfluous directories are created, and anything that cannot be sorted
        is automatically moved to an unsorted directory to prevent infinite loops.
        <br/>
        <br/>
        This project is still being developed (as of 2024-08-04) in order
        to improve consistency, add edge case handling, and provide a better
        user experience. The current version as of writing is v1.3.0.
        <br/>
        <br/>
        <br/>
        For more, click here for the&nbsp;
        <a href="https://github.com/jaq-lagnirac/mediro">Github page</a>.
      </Article>
      <Article title="Slides Generator" img={ pptLogo }>
        In mid-June, I received a text from Evelyn Schmidt, a friend who worked
        in the&nbsp;
        <a href="https://griffithlab.org/index.html">Griffith Lab</a> at Washington
        University of Saint Louis. She requested
        a program which could be used on a Linux command line and which took the relative
        path of a directory full of images and outputted a Microsoft Powerpoint presentation,
        with each image getting its own slide. Afterwards, if the user wishes, they can come
        in later with text boxes in order to provide greater details on the image.
        The command line tool was developed using the Python language and the&nbsp;
        <a href="https://python-pptx.readthedocs.io/en/latest/">python-pptx</a> package.
        The tool was then distributed using Github downloads and is currently being used
        by the Griffith Lab.
        <br/>
        <br/>
        Extensions to this tool have been planned but as of writing have not been developed.
        <br/>
        <br/>
        <br/>
        For more, click here for the&nbsp;
        <a href="https://github.com/jaq-lagnirac/slides-generator">Github page</a>.
      </Article>
      {/* <div style={{ height: "30vh" }}/> */}
    </div>
  )
}
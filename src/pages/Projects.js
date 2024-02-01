import Trails from "../assets/projects_assets/trails.png";
import WolfPackApp from "../assets/projects_assets/wolfpackapp.png";
import React from "react";
import Lasyntex from "../assets/projects_assets/lasyntex.png";
import { Parallax } from "react-scroll-parallax";
import "../css/projects.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Collapsible from "react-collapsible";
import { AiOutlineArrowDown } from "react-icons/ai";
import { Link } from "react-router-dom";
import ProjectBundle from "../classes/ProjectBundle";
import Boink from "../assets/projects_assets/boink.png";
import KiwiiMenu from "../assets/projects_assets/kiwiimenu.png";
import BattleShip from "../assets/projects_assets/battleship.png";
import UFound from "../assets/projects_assets/ufound.png";
import MazeRunner from "../assets/projects_assets/mazerunner.png";
import ProjectButton from "../components/ProjectButton";
import OtherProject from "../components/OtherProject";
import Firebase from "../assets/projects_assets/technologies/firebase.png";
import UniGPT from "../assets/projects_assets/unigpt/unigpt.png";
import TechnologyBanners from "../classes/TechnologyBanners";
import CSC258 from "../assets/projects_assets/csc258.png"
import CallHub from "../assets/projects_assets/callhubconnect.png"
import Vitre from "../assets/projects_assets/vitre/vitre.png"

const otherProjects = [
  new ProjectBundle(
    "Bo!nk",
    Boink,
    "Jan 2021 - May 2021",
    [
      TechnologyBanners.unity,
      TechnologyBanners.csharp,
      TechnologyBanners.html,
      TechnologyBanners.css,
    ],
    "Bo!nk, is a drawing-based puzzle game that challenges the player to draw lines and direct balls into holes. It features a cartoonish art style, multiple levels, sound effects and many other mechanics. It was made in Unity and released on App Store for download.",
    [
      new ProjectButton(
        "https://apps.apple.com/gb/app/bo-nk/id1570376501",
        "iOS"
      ),
      new ProjectButton("https://markville.dev/boinksite/index.html", "Web"),
    ]
  ),
  new ProjectBundle(
    "Kiwii Menu",
    KiwiiMenu,
    "May 2022 - Jan 2023",
    [TechnologyBanners.reactjs, TechnologyBanners.flutter, Firebase],
    "Kiwii Menu is a small startup aiming to create virtual menus for restuarants in Markham.",
    [new ProjectButton("https://daonsushi.ca/#/", "Web")]
  ),
  new ProjectBundle(
    "Battleship",
    BattleShip,
    "Dec 2022",
    [TechnologyBanners.java],
    "Coded using native Java, it includes fully functional Ai opponent, player vs Ai Mode (Hard and Easy!), graphical user interface, terminal based game, music and SFX and file saving, reload past saved games. Made for my ICS4U class, I created it with my partners, Vivien Cai and Jiaan Li.",
    [new ProjectButton("https://github.com/Jiaan124/Battleship", "GitHub")]
  ),
  new ProjectBundle(
    "UFound",
    UFound,
    "Nov 2022",
    [TechnologyBanners.reactjs, Firebase],
    "Ever notice Robarts commons filled with lost goods left neglected? Ever leave your items somewhere on campus and can't seem to find a central place to look for where they might have been left by others? With the busy lives of students around campus, we made a web app for the students of UofT to post listings of found lost goods. Students can securely log in using their UTORID and interact with listings to claim their lost goods.",
    [
      new ProjectButton(
        "https://github.com/sarinali/uoft-lost-and-found",
        "GitHub"
      ),
      new ProjectButton("https://devpost.com/software/ufound", "Devpost"),
    ]
  ),
  new ProjectBundle(
    "Maze Runner",
    MazeRunner,
    "March 2023",
    [TechnologyBanners.python],
    "My final project made with my groupmates for UofT CSC111 class, we created a program to generate and solve large mazes! With a focus on graph theory and graph theory algorithms, we used DFS to generate a randomized maze with a guaranteed answer and used BFS to compute the shortest answer to the maze. Made natively in Python, we used PyGame for user interaction and cool computations!",
    [new ProjectButton("https://github.com/sarinali/maze-runner", "GitHub")]
  ),
];

function Projects() {
  const [width, setWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
    /* Inside of a "useEffect" hook add an event listener that updates
           the "width" state variable when the window size changes */
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    return () =>
      window.removeEventListener("resize", window.handleWindowResize);
  }, []);

  return (
    <div className="project-body">
      {/* <div className="feature-title-1">Featured</div> */}
      <Parallax speed={width > 760 ? -10 : 0}>
        <div className="featured-projects">
          <div className="feature-container">
            <img src={CallHub} alt="" className="feature-image"></img>
            <div className="feature-item">
              <div className="project-title-card">CallHub: Connect</div>
              <Link to="/projects/callhub" className="link-feature">
                <BsFillArrowRightCircleFill className="feature-icon"></BsFillArrowRightCircleFill>
              </Link>
            </div>
          </div>
          <div className="feature-container">
            <img src={CSC258} alt="" className="feature-image"></img>
            <div className="feature-item">
              <div className="project-title-card">Computer Systems</div>
              <Link to="/projects/computersystems" className="link-feature">
                <BsFillArrowRightCircleFill className="feature-icon"></BsFillArrowRightCircleFill>
              </Link>
            </div>
          </div>
          <div className="feature-container">
            <img src={UniGPT} alt="" className="feature-image"></img>
            <div className="feature-item">
              <div className="project-title-card">UniGPT</div>
              <Link to="/projects/unigpt" className="link-feature">
                <BsFillArrowRightCircleFill className="feature-icon"></BsFillArrowRightCircleFill>
              </Link>
            </div>
          </div>
        </div>
        <div className="featured-projects">
          <div className="feature-container">
            <img src={Trails} alt="" className="feature-image"></img>
            <div className="feature-item">
              <div className="project-title-card">Markham Trails</div>
              <Link to="/projects/markhamtrails" className="link-feature">
                <BsFillArrowRightCircleFill className="feature-icon"></BsFillArrowRightCircleFill>
              </Link>
            </div>
          </div>
          <div className="feature-container">
            <img src={WolfPackApp} alt="" className="feature-image"></img>
            <div className="feature-item">
              <div className="project-title-card">wolfpackapp</div>
              <Link to="/projects/wolfpackapp" className="link-feature">
                <BsFillArrowRightCircleFill className="feature-icon"></BsFillArrowRightCircleFill>
              </Link>
            </div>
          </div>
          <div className="feature-container">
            <img src={Lasyntex} alt="" className="feature-image"></img>
            <div className="feature-item">
              <div className="project-title-card">Lasyntex</div>
              <Link to="/projects/lasyntex" className="link-feature">
                <BsFillArrowRightCircleFill className="feature-icon"></BsFillArrowRightCircleFill>
              </Link>
            </div>
          </div>
        </div>
        <div className="featured-projects">
          <div className="feature-container">
            <img src={Vitre} alt="" className="feature-image"></img>
            <div className="feature-item">
              <div className="project-title-card">Vitre</div>
              <Link to="/projects/vitre" className="link-feature">
                <BsFillArrowRightCircleFill className="feature-icon"></BsFillArrowRightCircleFill>
              </Link>
            </div>
          </div>
        </div>
      </Parallax>
      <div className="feature-title">More</div>
      
      <div className="other-project-item">
        {otherProjects.map((project) => {
          return (
            <div>
              <Collapsible
                trigger={
                  <div className="other-name">
                    {project.title}
                    <AiOutlineArrowDown></AiOutlineArrowDown>
                  </div>
                }
                easing="ease"
              >
                <OtherProject
                  buttons={project.buttonList}
                  img={project.image}
                  date={project.date}
                  techList={project.techList}
                  description={project.description}
                ></OtherProject>
              </Collapsible>
              <hr className="other-separator"></hr>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;

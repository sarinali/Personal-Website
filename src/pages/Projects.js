
import Trails from '../assets/projects_assets/trails.png'
import WolfPackApp from '../assets/projects_assets/wolfpackapp.png'
import React from 'react'
import Lasyntex from "../assets/projects_assets/lasyntex.png"
import { Parallax } from "react-scroll-parallax";
import "../css/projects.css"
import { BsFillArrowRightCircleFill } from "react-icons/bs"
import Collapsible from 'react-collapsible';
import { AiOutlineArrowDown } from "react-icons/ai"
import { Link } from "react-router-dom"
import ProjectBundle from '../components/ProjectBundle';
import Reactjs from "../assets/projects_assets/technologies/reactjs.png"
import Flutter from '../assets/projects_assets/technologies/flutter.png';
import Boink from "../assets/projects_assets/boink.png"
import KiwiiMenu from "../assets/projects_assets/kiwiimenu.png"
import BattleShip from "../assets/projects_assets/battleship.png"
import UFound from "../assets/projects_assets/ufound.png"
import Unity from "../assets/projects_assets/technologies/unity.png"
import ProjectButton from '../components/ProjectButton';
import OtherProject from '../components/OtherProject';
import Firebase from '../assets/projects_assets/technologies/firebase.png'

import Java from '../assets/projects_assets/technologies/java.png';

const otherProjects = [
    new ProjectBundle(
        "Bo!nk",
        Boink,
        "Jan 2021 - May 2021",
        [Unity],
        "Bo!nk, is a drawing-based puzzle game that challenges the player to draw lines and direct balls into holes. It features a cartoonish art style, multiple levels, sound effects and many other mechanics. It was made in Unity and released on App Store for download.",
        [
            new ProjectButton(
                "https://apps.apple.com/gb/app/bo-nk/id1570376501",
                "iOS"
            ),
            new ProjectButton(
                "https://markville.dev/boinksite/index.html",
                "Web"
            )
        ],
        
    ),
    new ProjectBundle(
        "Kiwii Menu",
        KiwiiMenu,
        "May 2022 - Jan 2023",
        [Reactjs, Flutter, Firebase],
        "Kiwii Menu is a small startup aiming to create virtual menus for restuarants in Markham.",
        [
            new ProjectButton(
                "https://daonsushi.ca/#/",
                "Web"
            )
        ],
    ),
    new ProjectBundle(
        "Battleship",
        BattleShip,
        "Dec 2022",
        [Java],
        "Coded using native Java, it includes fully functional Ai opponent, player vs Ai Mode (Hard and Easy!), graphical user interface, terminal based game, music and SFX and file saving, reload past saved games. Made for my ICS4U class, I created it with my partners, Vivien Cai and Jiaan Li.",
        [
            new ProjectButton(
                "https://github.com/Jiaan124/Battleship",
                "GitHub"
            )
        ],
    ),
    new ProjectBundle(
        "UFound",
        UFound,
        "Nov 2022",
        [Reactjs, Firebase],
        "Ever notice Robarts commons filled with lost goods left neglected? Ever leave your items somewhere on campus and can't seem to find a central place to look for where they might have been left by others? With the busy lives of students around campus, we made a web app for the students of UofT to post listings of found lost goods. Students can securely log in using their UTORID and interact with listings to claim their lost goods.",
        [
            new ProjectButton(
                "https://github.com/sarinali/uoft-lost-and-found",
                "GitHub"
            ),
            new ProjectButton(
                "https://devpost.com/software/ufound",
                "Devpost"
            )
        ],
    ),
]

function Projects() {
    const [width, setWidth] = React.useState(window.innerWidth);    React.useEffect(() => {
        /* Inside of a "useEffect" hook add an event listener that updates
           the "width" state variable when the window size changes */
        window.addEventListener("resize", () => setWidth(window.innerWidth));
        return () => window.removeEventListener("resize", window.handleWindowResize);
    }, []);


    return (
        <div className="project-body">
            <div className="feature-title">Featured</div>
            <Parallax speed={width > 760 ? -10 : 0}>
                <div className="featured-projects">
                    <div className="feature-container">
                        <img src={Trails} alt="" className="feature-image"></img>
                        <div className="feature-item">
                            <div>Markham Trails</div>
                            <Link to="/projects/markhamtrails" className='link-feature'>
                                <BsFillArrowRightCircleFill className='feature-icon'></BsFillArrowRightCircleFill>

                            </Link>
                        </div>
                    </div>
                    <div className="feature-container">
                        <img src={WolfPackApp} alt="" className="feature-image"></img>
                        <div className="feature-item">
                            <div>wolfpackapp</div>
                            <Link to="/projects/wolfpackapp" className='link-feature'>
                                <BsFillArrowRightCircleFill className='feature-icon'></BsFillArrowRightCircleFill>

                            </Link>
                        </div>
                    </div>
                    <div className="feature-container">
                        <img src={Lasyntex} alt="" className="feature-image"></img>
                        <div className="feature-item">
                            <div>Lasyntex</div>
                            <Link to="/projects/lasyntex" className='link-feature'>
                                <BsFillArrowRightCircleFill className='feature-icon'></BsFillArrowRightCircleFill>

                            </Link>
                        </div>
                    </div>
                </div>
            </Parallax>
            <div className='feature-title'>Other</div>
            <div className='other-project-item'>
                {otherProjects.map((project) => {
                    return (
                        <div>
                            <Collapsible trigger={<div className='other-name'>
                                {project.title}
                                <AiOutlineArrowDown></AiOutlineArrowDown>
                            </div>} easing="ease">
                            <OtherProject 
                                buttons={project.buttonList}
                                img={project.image}
                                date={project.date}
                                techList={project.techList}
                                description={project.description}
                            ></OtherProject>
                            </Collapsible>
                            <hr className='other-separator'></hr>
                        </div>

                    )
                })}
            </div>

        </div>
    )
}

export default Projects;
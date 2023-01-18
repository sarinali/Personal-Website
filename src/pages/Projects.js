
import Trails from '../assets/projects_assets/trails.png'

import WolfPackApp from '../assets/projects_assets/wolfpackapp.png'

import React from 'react'
import Lasyntex from "../assets/projects_assets/lasyntex.png"
import { Parallax } from "react-scroll-parallax";
import "../css/projects.css"
import {BsFillArrowRightCircleFill} from "react-icons/bs"
import Collapsible from 'react-collapsible';
import {AiOutlineArrowDown} from "react-icons/ai"
import {Link} from "react-router-dom"


function Projects() {
    const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 760;
  React.useEffect(() => {
    /* Inside of a "useEffect" hook add an event listener that updates
       the "width" state variable when the window size changes */
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    return () => window.removeEventListener("resize", window.handleWindowResize);
  }, []);
    // const projects = [
    //     new ProjectBundle(
    //         Trails, 
    //         'Markham Trails', 
    //         '2022-2023', 
    //         '0',
    //         [new ProjectButton(
    //             'https://play.google.com/store/apps/details?id=com.doriansarina.markhamtrails', 
    //             'Android'),
    //         new ProjectButton(
    //             'https://apps.apple.com/ca/app/markham-trails/id1640993603',
    //             'iOS'),
    //         ],
    //         [
    //         new TechBundle(
    //             Flutter,
    //             'Flutter in Dart'
    //         ),
    //         new TechBundle(
    //             GMap,
    //             'Google Maps API'
    //         )
    //         ],
    //         'Markham Trails is a Flutter application developed for informational and entertaining hiking trails in Markham. Equipped with Google Maps API and location tracking, the user can enjoy audio recordings and interesting facts about different landmarks they are close to. This is a project in direct collaboration with the City of Markham and Markham Public Library.',
    //         false,
    //         'linear-gradient(354deg, #DAEDF0 10.68%, #EFEECF 96.49%);',
    //         350
    //     ),
    //     new ProjectBundle(
    //         UFound, 
    //         'UFound', 
    //         '2022', 
    //         '1',
    //         [new ProjectButton(
    //             'https://github.com/sarinali/uoft-lost-and-found', 
    //             'GitHub'),
    //         new ProjectButton(
    //             'https://devpost.com/software/ufound',
    //             'Devpost'),
    //         ],
    //         [
    //         new TechBundle(
    //             ReactJS,
    //         'ReactJS in JavaScript'
    //         ),
    //         new TechBundle(
    //             Firebase,
    //             'Firebase'
    //         )
    //         ],
    //         "Ever notice Robarts commons filled with lost goods left neglected? Ever leave your items somewhere on campus and can't seem to find a central place to look for where they might have been left by others? With the busy lives of students around campus, we made a web app for the students of UofT to post listings of found lost goods. Students can securely log in using their UTORID and interact with listings to claim their lost goods.",
    //         true,
    //         'linear-gradient(354deg, #383B4C 10.68%, #26335C 96.49%);',
    //         350
    //     ),
    //     new ProjectBundle(
    //         KiwiiMenu, 
    //         'Kiwii Menu', 
    //         '2022', 
    //         '2',
    //         [new ProjectButton(
    //             'https://daonsushi.ca/#/', 
    //             'Web'),
    //         ],
    //         [
    //         new TechBundle(
    //             ReactJS,
    //         'ReactJS in JavaScript'
    //         ),
    //         new TechBundle(
    //             Flutter,
    //             'Flutter in Dart'
    //         ),
    //         new TechBundle(
    //             Firebase,
    //             'Firebase Hosting'
    //         )
    //         ],
    //         "Kiwii Menu is a small startup aiming to create virtual menus for restuarants in Markham.",
    //         false,
    //         'linear-gradient(354deg, #EEDFC4 10.68%, #F2C09F 96.49%);',
    //         200
    //     ),
    //     new ProjectBundle(
    //         WolfPackApp, 
    //         'wolfpackapp', 
    //         '2021', 
    //         '3',
    //         [new ProjectButton(
    //             'https://apps.apple.com/ca/app/wolfpackapp/id1602012389', 
    //             'iOS'),
    //         new ProjectButton(
    //             'https://play.google.com/store/apps/details?id=com.doriansarina.wolfpackapp',
    //             'Android'
    //         )
    //         ],
    //         [
    //         new TechBundle(
    //             Flutter,
    //             'Flutter in Dart'
    //         ),
    //         new TechBundle(
    //             Firebase,
    //             'Firebase'
    //         )
    //         ],
    //         "wolfpackapp is designed to be a one-stop-shop for all student to get their daily info at a glance. With quick access to links, built in calendars, and live announcements, wolfpackapp will help students stay up to date on all important info. wolfpackapp was YRDSB approved and made the official mobile app of Unionville High School.",
    //         false,
    //         '#FAF7EB'
    //     ),
    //     new ProjectBundle(
    //         Boink, 
    //         'Bo!nk', 
    //         '2021', 
    //         '4',
    //         [new ProjectButton(
    //             'https://apps.apple.com/gb/app/bo-nk/id1570376501', 
    //             'iOS'),
    //         new ProjectButton(
    //             'https://markville.dev/boinksite/index.html',
    //             'Web'
    //         )
    //         ],
    //         [
    //         new TechBundle(
    //             Unity,
    //             'Unity in C#'
    //         ),
    //         ],
    //         "Bo!nk, is a drawing-based puzzle game that challenges the player to draw lines and direct balls into holes. It features a cartoonish art style, multiple levels, sound effects and many other mechanics. It was made in Unity and released on App Store for download.            ",
    //         false,
    //         'linear-gradient(354deg, #E9F2F4 10.68%, #BCC8DF 96.49%);'
    //     ),
    //     new ProjectBundle(
    //         BattleShip, 
    //         'Battleship', 
    //         '2021', 
    //         '5',
    //         [new ProjectButton(
    //             'https://github.com/Jiaan124/Battleship', 
    //             'GitHub'),
    //         ],
    //         [
    //         new TechBundle(
    //             Java,
    //             'Native Java'
    //         ),
    //         ],
    //         "Coded using native Java, it includes fully functional Ai opponent, player vs Ai Mode (Hard and Easy!), graphical user interface, terminal based game, music and SFX and file saving, reload past saved games. Made for my ICS4U class, I created it with my partners, Vivien Cai and Jiaan Li.",
    //         false,
    //         'linear-gradient(89.63deg, #B484A6 9.72%, #FDF7D8 79.88%);'
    //     ),
    // ]


    return (
        <div className="project-body">
            <div className="feature-title">Featured</div>
            <Parallax speed={width > 760 ? -10 : 0}>
                <div className="featured-projects">
                <div className="feature-container">
                    <img src={Trails} alt = "" className="feature-image"></img>
                    <div className="feature-item">
                        <div>Markham Trails</div>
                        <Link to="/projects/markhamtrails" className='link-feature'>
                            <BsFillArrowRightCircleFill className='feature-icon'></BsFillArrowRightCircleFill>

                        </Link>
                    </div>
                </div>
                <div className="feature-container">
                    <img src={WolfPackApp} alt = "" className="feature-image"></img>
                    <div className="feature-item">
                        <div>wolfpackapp</div>
                        <Link to="/projects/wolfpackapp" className='link-feature'>
                            <BsFillArrowRightCircleFill className='feature-icon'></BsFillArrowRightCircleFill>

                        </Link>
                    </div>
                </div>
                <div className="feature-container">
                    <img src={Lasyntex} alt = "" className="feature-image"></img>
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
                <Collapsible trigger={<div className='other-name'>
                    Bo!nk
                    <AiOutlineArrowDown></AiOutlineArrowDown>
                </div>
                } easing="ease">
                            <div>
                                {"hello"}
                            </div>
                </Collapsible>
                <hr className='other-separator'></hr>
            </div>
            <div className='other-project-item'>
                <Collapsible trigger={<div className='other-name'>
                    Battleship
                    <AiOutlineArrowDown></AiOutlineArrowDown>
                </div>
                } easing="ease">
                            <div>
                                {"hello"}
                            </div>
                </Collapsible>
                <hr className='other-separator'></hr>
            </div>
            <div className='other-project-item'>
                <Collapsible trigger={<div className='other-name'>
                    Kiiwi Menu
                    <AiOutlineArrowDown></AiOutlineArrowDown>
                </div>
                } easing="ease">
                            <div>
                                {"hello"}
                            </div>
                </Collapsible>
                <hr className='other-separator'></hr>
            </div>
            <div className='other-project-item'>
                <Collapsible trigger={<div className='other-name'>
                    UFound
                    <AiOutlineArrowDown></AiOutlineArrowDown>
                </div>
                } easing="ease">
                            <div>
                                {"hello"}
                            </div>
                </Collapsible>
                <hr className='other-separator'></hr>
            </div>
            
        </div>
    )
}

export default Projects;
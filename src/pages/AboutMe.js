import '../css/aboutme.css'
import Me from "../assets/aboutme_assets/me_af.JPG";
import Goomy from "../assets/aboutme_assets/goomy.png";
import MeGym from "../assets/aboutme_assets/gym.JPG";
import { Parallax } from "react-scroll-parallax";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Mode from '../Mode'
import BlogPosts from '../components/BlogPosts';
import React from 'react'
import "../css/sarinagpt.css"


function AboutMe() {
    const [width, setWidth] = React.useState(window.innerWidth);    React.useEffect(() => {
        /* Inside of a "useEffect" hook add an event listener that updates
           the "width" state variable when the window size changes */
        window.addEventListener("resize", () => setWidth(window.innerWidth));
        return () => window.removeEventListener("resize", window.handleWindowResize);
    }, []);
    var images = [Me, Goomy, MeGym];
    return (
        <div className="aboutme">

            <div className='aboutme-wrapper'>
                <div className='sarina-title'>About Me</div>
                <div className="aboutme-body">
                    <Parallax speed={width > 760 ? -10 : 0}>
                        <div className="me-container">
                        <Carousel>
                            {images.map((image) => {
                                return (
                                    <Carousel.Item>
                                        <img src={image} alt="" className="me"/>
                                    </Carousel.Item>
                                );

                            })}
                        </Carousel>
                            {/* <img src={Me} alt="" className="me"></img> */}
                        </div>
                    </Parallax>
                    <div className="aboutme-p">
                        <div className="aboutme-p1">I'm your average Robarts squatter, computer science student with a 4.0 (I do not have a 4.0) and software engineer enthusiast.</div>
                        <div className="aboutme-p1"><br></br>Besides the fact I study computer science, code and do math, I enjoy lifting, journalling, drawing, playing League of Legends, learning chinese, playing Pokemon Go and listening to music. My favourite Pokemon is Goomy.</div>
                    </div>
                </div>
            </div>
            <div className="writing-body">
                <div className="writing-header">
                    <div className={`writing-title-${Mode.curMode}`} id="writingtitle">Writing</div>
                    <div className="writing-label">My blog!</div>
                </div>
                <BlogPosts></BlogPosts>
            </div>
        </div>
        
    )
}

export default AboutMe;
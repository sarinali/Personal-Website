import '../css/aboutme.css'
import Me from "../assets/aboutme_assets/me.jpg";
import Goomy from "../assets/aboutme_assets/goomy.png";
import MeGym from "../assets/aboutme_assets/megym.JPG";
import { Parallax } from "react-scroll-parallax";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Mode from '../Mode'
import BlogPosts from '../components/BlogPosts';





function AboutMe() {
    var images = [Me, Goomy, MeGym];
    return (
        <div className="aboutme">
            <div className="aboutme-body">
            <Parallax speed={-10}>
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
                    <div className="aboutme-p1">I'm your average Robarts squatter, React.js and Flutter enjoyer and REST API with Node.js enthusiast. Java will remain my favourite language no matter what anyone tells me. </div>
                    <div className="aboutme-p1"><br></br>Besides the fact I study computer science, code and do math, I enjoy lifting, journalling, drawing, bouldering, learning chinese, playing Pokemon Go and listening to music. My favourite Pokemon is Goomy.</div>
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
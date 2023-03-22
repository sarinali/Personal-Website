import Badtz from "../assets/home_assets/badtz.png";
import HomePhone from "../assets/home_assets/homephone.png";
import MainAsset from "../assets/home_assets/mainhomeasset.png";
import { Parallax } from "react-scroll-parallax";
import {FaPause} from "react-icons/fa";
import React from 'react'



function HomeImage() {
    const [width, setWidth] = React.useState(window.innerWidth);
    React.useEffect(() => {
        /* Inside of a "useEffect" hook add an event listener that updates
           the "width" state variable when the window size changes */
        window.addEventListener("resize", () => setWidth(window.innerWidth));
        return () => window.removeEventListener("resize", window.handleWindowResize);
    }, []);

    return (
        <div className="home-image-container">
            <div className="home-media">
                <div className="home-img-main">
                <Parallax speed={width > 760 ? -10 : 0}>
                    <img src = {MainAsset} alt="" className="img-main"></img>
                </Parallax>
                </div>

            </div>
        </div>
    );
}

export default HomeImage;
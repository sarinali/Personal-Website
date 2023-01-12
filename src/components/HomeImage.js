import Badtz from "../assets/home_assets/badtz.png";
import HomePhone from "../assets/home_assets/homephone.png";
import MainAsset from "../assets/home_assets/mainhomeasset.png";
import { Parallax } from "react-scroll-parallax";
import {FaPause} from "react-icons/fa";


function HomeImage() {

    return (
        <div className="home-image-container">
            <div className="home-media">
                <div className="home-img-main">
                <Parallax speed={-10}>
                    <img src = {MainAsset} alt="" className="img-main"></img>
                </Parallax>
                </div>

            </div>
        </div>
    );
}

export default HomeImage;
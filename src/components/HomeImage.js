import {Badtz} from "../assets/home_assets/badtz.png";
import HomePhone from "../assets/home_assets/homephone.png";
import MainAsset from "../assets/home_assets/mainhomeasset.png";

function HomeImage() {
    return (
        <div className="home-image-container">
            <div className="home-img-main">
                <img src = {MainAsset} alt="" className="img-main"></img>
                <div className="home-phone">
                    <img src={HomePhone} alt='' className="img-phone"></img>
                </div>
            </div>
        </div>
    );
}

export default HomeImage;
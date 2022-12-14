import MediaContainerAbout from "../components/MediaContainerAbout";
import PageIntro from "../components/PageIntro";
import '../css/aboutme.css'
import Fashion1 from "../assets/aboutme_assets/fashion1.JPG"
import Fashion2 from "../assets/aboutme_assets/fashion2.png"
import Lifting from "../assets/aboutme_assets/lifting.jpg"


function AboutMe() {
    return (
        <div className="aboutme">
            <div className="aboutme-body">
            

                <PageIntro
                    pageName={'About Me'}
                    displayIndex={'| 03'}
                    displayText={['I’ll just let the pictures do the talking.', 'Check out my hobbies, interests and favourite things about each one! :)']}
                ></PageIntro>
        
            </div>
            <div className="media-container">
                <MediaContainerAbout imageList={[Fashion2, Fashion1]} chineseCaption={'时尚。'} caption={'outfit making and makeup :)'} title={'Fashion'}></MediaContainerAbout>
            </div>
            <div className="chinese-text"></div>
        </div>
        
    )
}

export default AboutMe;
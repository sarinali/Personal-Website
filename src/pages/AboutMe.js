import MediaContainerAbout from "../components/MediaContainerAbout";
import PageIntro from "../components/PageIntro";
import '../css/aboutme.css'
import Fashion1 from "../assets/aboutme_assets/fashion1.JPG";
import Fashion2 from "../assets/aboutme_assets/fashion2.png";
import Lifting from "../assets/aboutme_assets/lifting.jpg";
import Climbing from "../assets/aboutme_assets/climbing.jpg";
import Nectar from "../assets/aboutme_assets/nectar.png";
import Nuture from "../assets/aboutme_assets/nuture.jpeg";
import OnTheSquare from "../assets/aboutme_assets/onthesquaree.jpeg";
import Zephyr from "../assets/aboutme_assets/zephyr.png";

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
                <MediaContainerAbout imageList={[Fashion2, Fashion1]} chineseCaption={'时尚。'} caption={'outfit making and makeup :)'} title={'Fashion'} itemIndex={'| 00.'} itemTitle={'Fashion and Beauty'} descriptionList={['I am a little bit of a narcissist... I love looking good, dressing good and feeling good!', 'I love curating outfits, doing my makeup and online shopping. My favourite thing to do is browse the internet on platforms like Pinterest and 小红书 for the latest trends, outfit inspiration and makeup looks.', 'My philosophy is, look good, feel good!!']}></MediaContainerAbout>
                <MediaContainerAbout imageList={[Lifting, Climbing]} chineseCaption={'锻炼。'} caption={'working out and bouldering 💪'} title={'Fitness'} itemIndex={'| 01.'} itemTitle={'Lifting and Bouldering'} descriptionList={['Fitness is a a stress reliever and a hobby for me!', 'Lately I have been visiting UofT’s Athletic Center to weight lift. I got into lifting a couple months ago and I have made it an official goal to one day squat 225 lbs, bench 135 lbs and deadlift 225lbs.', 'My I also used to boulder! The highest grade I climbed was a V4 :(. It was a fun past time until I had to give it up to save time for academics and extracurriculars.']}></MediaContainerAbout>
                <MediaContainerAbout imageList={[Nuture, Nectar, OnTheSquare, Zephyr]} chineseCaption={'音乐。'} caption={"spotify's biggest fan"} title={'Music'} itemIndex={'| 02.'} itemTitle={'Music'} descriptionList={['As a former pianist and trumpeter, music is literally what keeps me going.', 'My headphones are glued to my head 24 hours a day, last year I clocked in 90,756 minutes of Spotify. My favourite artists are NIKI, Joji, Gorillaz and Porter Robinson. (I am a hopeless romantic)', 'You should add me on Spotify and recommend me some new tunes 😎']} link='https://open.spotify.com/user/sarinajin.li?si=44bf42485d004f05'></MediaContainerAbout>

            </div>
        </div>
        
    )
}

export default AboutMe;
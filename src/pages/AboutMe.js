import PageIntro from "../components/PageIntro";
import '../css/aboutme.css'

function AboutMe() {
    return (
        <div className="aboutme-body">
            <div className="aboutme-content">

                <PageIntro
                    pageName={'About Me'}
                    displayIndex={'03'}
                    displayText={['I’ll just let the pictures do the talking.', 'Check out my hobbies, interests and favourite things about each one! :)']}
                ></PageIntro>
                <div>asldkf</div>
            </div>
        </div>
    )
}

export default AboutMe;
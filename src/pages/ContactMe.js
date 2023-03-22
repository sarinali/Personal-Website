import PageIntro from "../components/PageIntro";
import '../css/contact.css'
import Instagram from '../assets/contactme_assets/ig.png'
import ResumeIMG from '../assets/contactme_assets/resume.png'
import Resume from '../assets/contactme_assets/SarinaLiCV.pdf'
import LinkedIn from '../assets/contactme_assets/linkedin.png'

function ContactMe() {
    return (
        <div className="contact-body">
            <PageIntro
                    pageName={'Contact Me'}
                    displayIndex={'| 04'}
                    displayText={['Want more?', 'I hope LinkedIn, Instagram and my resume is enough...']}
                ></PageIntro>
                <div className="socials-container">
                <div className="socials-display">
                    <a className="instagram-container" href="https://www.instagram.com/sarinajnli/?next=%2F">
                        <img src={Instagram} alt='' className='ig'></img>
                        <div className="ig-handle">@sarinajnli</div>
                        <div className="ig-label">Instagram</div>
                    </a>
                    <a className="resume-container" href={Resume} target='_blank' alt='' rel="noreferrer">
                        <img src={ResumeIMG} alt='' className='resume'></img>
                        <div className="ig-handle">View PDF</div>
                        <div className="ig-label">Resume</div>
                    </a>
                    <div className="linkedin-container">
                    <img src={LinkedIn} alt='' className='linkedin'></img>
                        <div className="linkedin-handle">@sarinali</div>
                        <div className="linkedin-label">Linkedin</div>
                    </div>

                </div>
                </div>
        </div>
    )
}

export default ContactMe;
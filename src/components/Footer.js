import "../css/footer.css";
import {AiFillGithub, AiOutlineInstagram, AiOutlineLinkedin} from 'react-icons/ai';
import {SiDevpost, SiLeetcode} from 'react-icons/si'; 
import {SlSocialSpotify} from 'react-icons/sl';
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";


function Footer() {
  return (
    <div className="footer">
      <div className="footer-div1">
      <div className="footer-logo-wrapper">
        {/* <div className="footer-logo-container">
            <div >李晶</div>
            <div >sarina li</div>
        </div> */}

      </div>
        <div className="footer-contact">
        <div className="contact-phone-container">
            <a href="tel:416-838-0998" className="contact-phone" id="phone" data-tooltip-content="call me!">416 838-0998</a>
            <ReactTooltip anchorId={'phone'} />
        </div>
        <div className="contact-email-container">
            <a href="mailto:sarinajin.li@gmail.com" className="contact-email" id="email" data-tooltip-content="email me!">Sarinajin.li@gmail.com</a>
            <ReactTooltip anchorId={'email'} />
        </div>
        </div>
      </div>
      <div className="footer-div2">
        <hr className="footer-line"></hr>
      </div>
      <div className="footer-div3">
        <div className="footer-marker">2022 Sarina Li</div>
        <div className="footer-icons">
            <div className="footer-icon-container">
                <AiFillGithub className="footer-github" 
                onClick={() => window.open('https://github.com/sarinali', '_blank')}
                id='github'
                data-tooltip-content='sarinali on GitHub'
                ></AiFillGithub>
                <ReactTooltip anchorId={'github'} />

            </div>
            <div className="footer-icon-container">
                <SiDevpost className="footer-devpost"
                onClick={() => window.open('https://devpost.com/sarinali?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav', '_blank')}
                id='devpost'
                data-tooltip-content='sarinali on Devpost'
                ></SiDevpost>
                <ReactTooltip anchorId={'devpost'} />
            </div>
            <div className="footer-icon-container">
                <SiLeetcode className="footer-leetcode"
                onClick={() => window.open('https://leetcode.com/incelleetcodr/', '_blank')}
                id='leetcode'
                data-tooltip-content='incelleetcodr on Leetcode'
                ></SiLeetcode>
                <ReactTooltip anchorId={'leetcode'} />
            </div>
            {/* <div className="footer-icon-container">
                <AiOutlineInstagram className="footer-instagram"
                onClick={() => window.open('https://www.instagram.com/sarinajnli/?next=%2F', '_blank')}
                id='instagram'
                data-tooltip-content='sarinajnli on Instagram'
                ></AiOutlineInstagram>
                <ReactTooltip anchorId={'instagram'} />

            </div> */}
            <div className="footer-icon-container">
                <AiOutlineLinkedin className="footer-linkedin"
                onClick={() => window.open('https://www.linkedin.com/in/sarinali/', '_blank')}
                id='linkedin'
                data-tooltip-content='sarinali on LinkedIn'
                ></AiOutlineLinkedin>
                <ReactTooltip anchorId={'linkedin'} />
            </div>
            <div className="footer-icon-container">
                <SlSocialSpotify className="footer-spotify"
                onClick={() => window.open('https://open.spotify.com/user/sarinajin.li', '_blank')}
                id='spotify'
                data-tooltip-content='sjnli on Spotify'
                ></SlSocialSpotify>
                <ReactTooltip anchorId={'spotify'} />
            </div>
            
        </div>
      </div>
    </div>
  );
}

export default Footer;

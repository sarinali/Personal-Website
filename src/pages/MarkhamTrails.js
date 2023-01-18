import React from 'react'
import "../css/trails.css"
import Img1 from "../assets/projects_assets/markhamtrails/1.png"
import Img2 from "../assets/projects_assets/markhamtrails/2.png"
import Img3 from "../assets/projects_assets/markhamtrails/3.png"
import Flutter from "../assets/projects_assets/technologies/flutter.png"
import Gmap from "../assets/projects_assets/technologies/gmap.png"
import AppPage from "../assets/projects_assets/markhamtrails/app_page.png"
import ModalView from "../assets/projects_assets/markhamtrails/modalview.jpg"
import Logo1 from "../assets/projects_assets/markhamtrails/logo.png"
import Logo2 from "../assets/projects_assets/markhamtrails/newlogo.png"
import SS1 from "../assets/projects_assets/markhamtrails/IMG_2279.PNG"
import SS2 from "../assets/projects_assets/markhamtrails/IMG_2280.PNG"
import SS3 from "../assets/projects_assets/markhamtrails/IMG_2281.PNG"



export default function MarkhamTrails() {
  return (
    <div className='trails-body'>
      <div className='trails-title'>Markham Trails</div>
      <div className='trails-date'>March 2022 - Present</div>
      <div className='trails-tech'>
        <img className='trails-tech-individ' src={Flutter} alt=""></img>
        <img className='trails-tech-individ' src={Gmap} alt=""></img>
      </div>
      <div className='trails-prev-imgs'>
        <img src={Img1} alt="" className='img-indiv'></img>
        <img src={Img2} alt="" className='img-indiv'></img>
        <img src={Img3} alt="" className='img-indiv'></img>
      </div>
      <div className='trails-tagline'>
        “Explore nature with a story!
        <br></br>
        <br></br>
        Explore nearby trails with an audio experience. Enjoy Markham’s beautiful Rogue Trail system and historic main streets as Markham Public Library staff guide you through the local and natural history of the community.”
      </div>
      <div className='trails-p'>
        Markham Trails is a collaborative effort with Markville App Development Club, Unionville App Development Club and the City of Markham.
      </div>
      <div className='trails-p'>
        I worked mainly as a front end through mobile development and devops engineer through managing the releases and testing. I am still working with Markham Public Library to test, maintain and develop updates to the Markham Trails app.
      </div>
      <div className='trails-p'>
        The original idea was proposed to the City of Markham as a library app for study room bookings. We were offered an alternative instead: to create an app that centered around the hiking and walking experience in Markham. The development process began in March of 2022. Here are some prototype screenshots:
      </div>
      <div className='trails-prev-imgs'>
        <img src={AppPage} alt="" className='img-indiv'></img>
        <img src={ModalView} alt="" className='img-indiv'></img>
      </div>
      <div className='trails-p'>
      The design changed overtime with changing demands and refinement of our idea and user experience. We scrapped features that we felt didn’t really fulfill the dream of a functional hiking guide and added features such as audio, notifications on route, additional information and map markers. 
      </div>
      <div className='trails-p'>
      The finished product definitely captured the feel we wanted much better than our design did with smoother user experience and more of a refined feel. Obviously, it isn’t as professional as other big apps on the market but with our small team and lack of professional experience, we felt that it went pretty far. 
      </div>
      <div className='trails-p'>
      When it came to designing the logo, we came up with these designs (special thanks to Dorian for designing these!) 
      </div>
      <div className='trails-prev-imgs'>
        <img src={Logo1} alt="" className='img-indiv-l'></img>
        <img src={Logo2} alt="" className='img-indiv-l'></img>      
        </div>
      <div className='trails-caption'>(first iteration with the second iteration side by side)</div>
      <div className='trails-p'>
      Here is the current iteration of our app: 
      </div>
      <div className='trails-prev-imgs'>
        <img src={SS1} alt="" className='img-indiv'></img>
        <img src={SS2} alt="" className='img-indiv'></img>
        <img src={SS3} alt="" className='img-indiv'></img>
      </div>
      <div className='trails-p'>
      While we are satisfied with the current design, there is a chance that updates will continue to roll out as I am currently working with Markham Public Library as a Mobile Developer to work on this project. 
      </div>
      <div className='trails-p'>
      I encourage you to download Markham Trails, come to Markham and give it a try :) 
      </div>
      <div className='trails-p'>
        App Store: <a href='https://play.google.com/store/apps/details?id=com.doriansarina.markhamtrails'>https://play.google.com/store/apps/details?id=com.doriansarina.markhamtrails</a>
      </div>
      <div className='trails-p'>
      Google Play: <a href='https://apps.apple.com/ca/app/markham-trails/id1640993603'>https://apps.apple.com/ca/app/markham-trails/id1640993603</a>
      </div>
    </div>
    
  )
}

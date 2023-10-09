import React from 'react'
import "../css/trails.css"
import Flutter from "../assets/projects_assets/technologies/flutter.png"
import Firebase from "../assets/projects_assets/technologies/firebase.png"
import Img1 from "../assets/projects_assets/wolfpackapp/1.png"
import Img2 from "../assets/projects_assets/wolfpackapp/2.png"
import { CodeBlock, dracula } from "react-code-blocks";
import Nullable from "../assets/projects_assets/wolfpackapp/nullable-hierarchy.png"
import SS from "../assets/projects_assets/wolfpackapp/ss.png"
import S1 from "../assets/projects_assets/wolfpackapp/mockupannouncement.png"
import S2 from "../assets/projects_assets/wolfpackapp/mockuplinks.png"
import Logo from "../assets/projects_assets/wolfpackapp/image.png"
import FeatureGraphic from "../assets/projects_assets/wolfpackapp/featured_graphic.png"
import Video from "../assets/projects_assets/wolfpackapp/promo.mp4"
import TechnologyBanners from '../classes/TechnologyBanners'

export default function Wolfpackapp() {
  return (
    <div className='trails-body'>
      <div className='trails-title'>wolfpackapp</div>
      <div className='trails-date'>Jun 2021 - Dec 2021</div>
      <div className='trails-tech'>
        <img className='trails-tech-individ' src={TechnologyBanners.flutter} alt=""></img>
        <img className='trails-tech-individ' src={TechnologyBanners.xcode} alt=""></img>
        <img className='trails-tech-individ' src={TechnologyBanners.android_studio} alt=""></img>
        <img className='trails-tech-individ' src={Firebase} alt=""></img>
      </div>
      <div className='trails-prev-imgs'>
        <img src={Img1} alt="" className='img-indiv'></img>
        <img src={Img2} alt="" className='img-indiv'></img>
      </div>
      <div className='trails-tagline'>
        "Wolfpackapp is designed to be a one-stop-shop for all student to get their daily info at a glance. With quick access to links, built in calendars, and live announcements, wolfpackapp will help students stay up to date on all important info. Download wolfpackapp now and explore tons of exciting features!"
      </div>
      <div className='trails-p'>
      wolfpackapp is the official mobile app of Unionville High school with exciting and convenient features for students such as real time announcements, built in twitter feeds, notifications and calendars. It is a hub for UHS students to get all of their daily information in one place.
      </div>
      <div className='trails-p'>
      I worked full stack for this mobile application; creating and implementing the app and connecting the backend. I also worked very closely with Dorian Chen to finish this mobile application. 
      </div>
      <div className='trails-p'>
      This project is one of my favourites; it took the longest to release because it was officially vetted and approved by YRDSB (York Region District School Board) before being released. Many administrative things were needed for this project. 
      </div>
      <div className='trails-p'>
      One of the challenges with this project was the learning curve we faced downloading and trying Flutter for the first time. This was extremely daunting; at the time null safety had just released and us being noobie mobile programmers. We were watching tutorials from 2020 when null safety hadn’t been released so we were extremely confused as to why perfectly good code from reliable tutorials wasn’t running. Turns out, we learned about “null safety” where we learned that we had to mark an object as potentially null in runtime. 
      </div>
      <div className='trails-pc'>
      For example:
      </div>
      <CodeBlock
      text={"Container? hello; \n\n// potentially null object!"}
      language="dart"
      showLineNumbers={true}
      theme={dracula} 
    />
    <div className='trails-prev-imgs'>
      <img src={Nullable} alt="" className='img-indiv-f'></img>
    </div>
    <div className='trails-p'>
    After jumping over this hurdle, most of the development was smooth sailing. Here is a screenshot used to understand the hierarchy of widgets:
    </div>
    <div className='trails-prev-imgs'>
      <img src={SS} alt="" className='img-indiv-f'></img>
    </div>
    <div className='trails-p'>
    After understanding the way nested widgets, state management and formatting worked in Flutter, we worked much faster and much more efficiently. This was the finished product with some mockups:
    </div>
    <div className='trails-prev-imgs'>
      <img src={S1} alt="" className='img-indiv'></img>
      <img src={S2} alt="" className='img-indiv'></img>
    </div>
    <div className='trails-p'>
    Here was our finished logo (credits to Stephen Zhuang for designing such a cute and scalable icon!)
    </div>
    <div className='trails-prev-imgs'>
      <img src={Logo} alt="" className='img-indiv-l'></img>
    </div>
    <div className='trails-p'> 
    Here was our feature graphic:
    </div>
    <div className='trails-prev-imgs'>
      <img src={FeatureGraphic} alt="" className='img-indiv-f'></img>
    </div>
    <div className='trails-p'>
    Finally, with the help of Dorian, we hopped into Adobe After Effects and made this promotional video. I am still proud of it to this day, I still think that this is one of my best graphic works in a while. Check it out: 
    </div>
    <div className='trails-prev-imgs'>
      <video src={Video} alt="" type="video/mp4" controls="true" className="img-vid"></video>
    </div>
    <div className='trails-p'>
    Make sure you support this project if you are interested! Give me a download and a 5 star review :)
    </div>
    <div className='trails-p'>
        App Store: <a href='https://apps.apple.com/ca/app/wolfpackapp/id1602012389'>https://apps.apple.com/ca/app/wolfpackapp/id1602012389</a>
      </div>
      <div className='trails-p'>
      Google Play: <a href='https://play.google.com/store/apps/details?id=com.doriansarina.wolfpackapp '>https://play.google.com/store/apps/details?id=com.doriansarina.wolfpackapp </a>
      </div>
    </div>
  )
}

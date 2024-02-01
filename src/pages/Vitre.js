import React from "react";
import TechnologyBanners from "../classes/TechnologyBanners";
import UoftHacks from "../assets/projects_assets/vitre/uofthacks.jpg";
import Day1 from "../assets/projects_assets/vitre/day1.JPG";
import Day3 from "../assets/projects_assets/vitre/day3.JPG";

export default function Vitre() {
  return (
    <div className="trails-body">
      <div className="trails-title">Vitre</div>
      <div className="trails-date">January 26-28, 2024</div>
      <div className="trails-tech">
        <img
          className="trails-tech-individ"
          src={TechnologyBanners.unity}
          alt=""
        ></img>
        <img
          className="trails-tech-individ"
          src={TechnologyBanners.csharp}
          alt=""
        ></img>
      </div>
      <div className="trails-prev-imgs">
        <img src={UoftHacks} alt="" className="img-indiv-f"></img>
      </div>
      <div className="trails-tagline">
        “A charming VR experience that helps you recall your French skills by
        stepping into your memories."
      </div>
      <div className="trails-p">
        This project was a collective effort from{" "}
        <a href="https://github.com/zjayee">Jayee Zheng</a>,{" "}
        <a href="https://dorianchen.com/">Dorian Chen</a>,{" "}
        <a href="https://www.braydenpetersen.com/">Brayden Petersen</a> and
        Sarina Li for our <a href="https://uofthacks.com/">UoftHacks 11</a>{" "}
        project!
      </div>
      <div className="trails-p">
        We received the{" "}
        <a href="https://www.rbcroyalbank.com/personal.html">RBC</a> award at
        this hackathon :), and yes that is Brayden in the thumbnail, credits to
        him for filming and editing our videos!
      </div>
      <div className="trails-p">
        TLDR: Vitre is an educational French learning VR app with a twist; you
        learn through reliving memories of someone else's life to experience the
        environment immersion and learn as if you are talking to someone in real
        life.
      </div>
      <div className="trails-p">
        I worked on: <a href="https://cohere.com/">co:here</a> chat and classify
        functions used to give the user a French level and dynamically chat with
        the user and I worked on frontend game menus and music. This hackathon
        was exhausting; we did not sleep the second night and worked from 9am
        all the way to 7:30am... 😅
      </div>
      <div className="trails-prev-imgs">
        <img src={Day1} alt="" className="img-indiv-l"></img>
        <img src={Day3} alt="" className="img-indiv-l"></img>
      </div>
      <div className="trails-caption">
        day 1 (awake 🧘‍♀️) vs day 3 (schlumped 😣)...
      </div>
      <div className="trails-p">
        There were so many challenges I honestly lost track of times I wanted to
        cry LOL but regardless, I learned a lot about Unity 3D and developing
        for VR. I also have a newfound appreciate for game devs... I don't think
        I could do this full time.
      </div>
      <div className="trails-p">
        Check out our Devpost! (Like it as well 😛)
      </div>
      <div className="trails-p">
        Devpost:{" "}
        <a href="https://devpost.com/software/vitre">
        https://devpost.com/software/vitre
        </a>
      </div>
    </div>
  );
}

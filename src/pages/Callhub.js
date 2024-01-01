import React from "react";
import "../css/trails.css";
import Display from "../assets/projects_assets/callhubconnect.png";
import Architecture from "../assets/projects_assets/callhub/techstack.png";
import TechnologyBanners from "../classes/TechnologyBanners";
import UserFlow from "../assets/projects_assets/callhub/userflow.jpg";
import ERD from "../assets/projects_assets/callhub/erp.jpeg";
import Video from "../assets/projects_assets/callhub/callhubdemo.mp4";

export default function Callhub() {
  return (
    <div className="trails-body">
      <div className="trails-title">CallHub: Connect</div>
      <div className="trails-date">December 2023</div>
      <div className="trails-tech">
        <img
          className="trails-tech-individ"
          src={TechnologyBanners.reactjs}
          alt=""
        ></img>
        <img
          className="trails-tech-individ"
          src={TechnologyBanners.netlify}
          alt=""
        ></img>
        <img
          className="trails-tech-individ"
          src={TechnologyBanners.spring}
          alt=""
        ></img>
        <img
          className="trails-tech-individ"
          src={TechnologyBanners.java}
          alt=""
        ></img>
        <img
          className="trails-tech-individ"
          src={TechnologyBanners.azure}
          alt=""
        ></img>
        <img
          className="trails-tech-individ"
          src={TechnologyBanners.mongo}
          alt=""
        ></img>
      </div>
      <div className="trails-prev-imgs">
        <img src={Display} alt="" className="img-indiv-f"></img>
      </div>
      <div className="trails-tagline">
        "CallHub is an interactive call center application, designed to
        revolutionize how organizations engage with customers during support
        interactions."
      </div>
      <div className="trails-p">
        This project was a collective effort from{" "}
        <a href="https://github.com/zjayee">Jayee Zheng</a>,{" "}
        <a href="https://github.com/3milyfz">Emily Zhou</a>,{" "}
        <a href="https://github.com/lucieyang1">Lucie Yang</a> and Sarina Li for
        our partnership CSC207 project with{" "}
        <a href="https://www.securiancanada.ca/">Securian</a>.
      </div>
      <div className="trails-p">
        CallHub was a team effort to produce a full stack application with the
        goal of revolutionizing the call centre experience.
      </div>
      <div className="trails-p">
        The backend is engineered with Spring Boot and MongoDB, featuring
        websockets and HTTP to convey information in real time. The frontend is
        engineered with React, featuring interactive, clean and minimalistic UI
        designs.
      </div>
      <div className="trails-p">
        As a TLDR, CallHub Connect is a call centre companion with these
        following main features:
      </div>
      <ul>
        <li>
          Document Upload: Easily upload and share documents during the call.
        </li>
        <li>
          E-Signature: Seamlessly sign agreements or forms during the
          conversation.
        </li>
        <li>
          Text Messaging: Enable text-based communication alongside voice.
        </li>
      </ul>
      <div className="trails-p">Here is a picture of our architecture:</div>
      <div className="trails-prev-imgs">
        <img src={Architecture} alt="" className="img-indiv-f"></img>
      </div>
      <div className="trails-p">
        We really dove into this project with care, here is our ERD (entity
        relation diagram) and our user experience journey!
      </div>
      <div className="trails-prev-imgs">
        <img src={ERD} alt="" className="img-indiv-f"></img>
      </div>
      <div className="trails-prev-imgs">
        <img src={UserFlow} alt="" className="img-indiv-f"></img>
      </div>
      <div className="trails-p">
        Some very cool things we managed to implement this time were websockets
        and document annotation. These two features can be combined in ways such
        as having your edits on a PDF show up in real time. This was one of our
        favourite features because it brought so mcuh flexibility on how this
        feature could be used in a real life scenario.
      </div>
      <div className="trails-prev-imgs">
        <video
          src={Video}
          alt=""
          type="video/mp4"
          controls="true"
          className="img-vid"
        ></video>
      </div>
      <div className="trails-p">
        In the future, we want to integrate custom business logic along with AI
        features that further enhance the user experience. We will put a focus
        on clean and intuitive design along with moving our tech stack to a more
        modern solution :)
      </div>
      <div className="trails-p">
        Web:
        <a href="https://callhub.netlify.app/ ">https://callhub.netlify.app/</a>
      </div>
      <div className="trails-p">
        GitHub:
        <a href="https://github.com/Callhub-Connect">
          https://github.com/Callhub-Connect
        </a>
      </div>
    </div>
  );
}

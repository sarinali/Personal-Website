import React from "react";
import "../css/trails.css";
import Display from "../assets/projects_assets/unigpt/unigpt2.png";
import Architecture from "../assets/projects_assets/unigpt/schema.jpg";
import TechnologyBanners from "../classes/TechnologyBanners";
import Video from "../assets/projects_assets/unigpt/demo.mp4";

export default function UniGPT() {
  return (
    <div className="trails-body">
      <div className="trails-title">UniGPT</div>
      <div className="trails-date">August 2023</div>
      <div className="trails-tech">
        <img
          className="trails-tech-individ"
          src={TechnologyBanners.nodejs}
          alt=""
        ></img>
        <img
          className="trails-tech-individ"
          src={TechnologyBanners.reactjs}
          alt=""
        ></img>
        <img
          className="trails-tech-individ"
          src={TechnologyBanners.heroku}
          alt=""
        ></img>
      </div>
      <div className="trails-prev-imgs">
        <img src={Display} alt="" className="img-indiv-f"></img>
      </div>
      <div className="trails-tagline">
        “Introducing UniGPT: Your virtual assistant designed to answer all your
        questions about the University of Waterloo!”
      </div>
      <div className="trails-p">
        This project was a collective effort from Dorian Chen, Jaqueline Ho and
        Sarina Li.
      </div>
      <div className="trails-p">
        This project is made for experimentation with LLMs, GPT in particular.
      </div>
      <div className="trails-p">
        UniGPT is made with a ReactJS frontend paired with a NodeJS server side
        application and Pinecone database for storing vector embeddings.
      </div>
      <div className="trails-p">
        I worked on this project with Dorian Chen and I was a full stack
        developer.
      </div>
      <div className="trails-p">
        As a TLDR, UniGPT turns raw text (retrieved from Waterloo's website with
        a web scraper) to vector embeddings using OpenAI's GPT 3.5 LLM model.
        Upon generating the embeddings, they are stored in a vector database and
        queried upon when the user asks a question.
      </div>
      <div className="trails-p">
        Here is a picture of our user flow/journey:
      </div>
      <div className="trails-prev-imgs">
        <img src={Architecture} alt="" className="img-indiv-f"></img>
      </div>
      <div className="trails-p">
        If you are reading this and want to try the web app but find you cannot
        open the link or it's down, chances are we ran out of credits for our
        backend server application :(. To compensate, I have a demo video you
        can watch right here:
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
        If you want to check out the web app in action:
      </div>
      <div className="trails-p">
        Web: <a href="https://universitygpt-43101.web.app/ ">https://universitygpt-43101.web.app/ </a>
      </div>
      <div className="trails-p">
        GitHub: 
        <a href="https://github.com/dourian/UniGPT">
         https://github.com/dourian/UniGPT
        </a>
      </div>
    </div>
  );
}

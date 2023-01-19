import React from 'react'
import "../css/trails.css"
import GCloud from "../assets/projects_assets/technologies/gcloud.png"
import MYSQL from "../assets/projects_assets/technologies/mysql.png"
import NodeJS from "../assets/projects_assets/technologies/nodejs.png"
import ReactJS from "../assets/projects_assets/technologies/reactjs.png"
import Display from "../assets/projects_assets/lasyntex/img.png"
import Architecture from "../assets/projects_assets/lasyntex/ss.png"
import Postman from "../assets/projects_assets/lasyntex/postman.png"
import GSQL from "../assets/projects_assets/lasyntex/sql.png"
import Search from "../assets/projects_assets/lasyntex/search.png"
import Swagger from "../assets/projects_assets/lasyntex/swagger.png"
import Favicon from "../assets/projects_assets/lasyntex/Lasyntex.jpg"
import Logo from "../assets/projects_assets/lasyntex/lasyntex.png"

export default function Lasyntex() {
  return (
    <div className='trails-body'>
      <div className='trails-title'>Lasyntex</div>
      <div className='trails-date'>Jan 2023</div>
      <div className='trails-tech'>
        <img className='trails-tech-individ' src={ReactJS} alt=""></img>
        <img className='trails-tech-individ' src={NodeJS} alt=""></img>
        <img className='trails-tech-individ' src={MYSQL} alt=""></img>
        <img className='trails-tech-individ' src={GCloud} alt=""></img>
      </div>
      <div className='trails-prev-imgs'>
        <img src={Display} alt="" className='img-indiv-f'></img>
      </div>
      <div className='trails-tagline'>
      “Your quick pocket guide to LaTeX commands! Search and find the command that you need fully fitted with examples, descriptions and more. Try Lasyntex, a web app writing proofs since 2023!”
      </div>
      <div className='trails-p'>
      Lasyntex is a back end focused REST API web application to quickly search up Latex commands for reference. I must admit, this web app is very useful for my computer science classes and my discrete maths classes. It is a quick reference search to help me write my proofs faster. 
      </div>
      <div className='trails-p'>
      I worked on this project with Dorian Chen and I was a full stack developer. 
      </div>
      <div className='trails-p'>
      Lasyntex’s tech stack is React.js front end, Node.js backend with MYSQL database hosted on Google Cloud Platform. We used this particular stack because Google gives new accounts 300 free credits: great for students looking to make something without cost. 
      </div>
      <div className='trails-p'>
      Here is a picture of our architecture: 
      </div>
      <div className='trails-prev-imgs'>
        <img src={Architecture} alt="" className='img-indiv-f'></img>
      </div>
      <div className='trails-p'>
      For testing purposes, we used Postman to test our CRUD operations in our REST API. It was a new experience because it was our first time using Postman. However, I found this developer tool very easy and intuitive to use.
      </div>
      <div className='trails-prev-imgs'>
        <img src={Postman} alt="" className='img-indiv-f'></img>
      </div>
      <div className='trails-p'>
      While writing our REST API controller, we learned a lot about MYSQL queries. I personally found this very educational learning the basic CRUD operations of SQL and more. 
      </div>
      <div className='trails-prev-imgs'>
        <img src={GSQL} alt="" className='img-indiv-f'></img>
      </div>
      <div className='trails-p'>
      After implementing our backend, we hopped straight into our frontend. Initially, we had problems building and deploying our backend with our frontend because React.js folders are generally ~300 MB and we were trying to deploy all of this extra storage to Google Cloud. To fix this problem, we had to look into Docker technologies and a .dockerignore file. This saved us a lot of storage (and money)
      </div>
      <div className='trails-p'>
      Once writing the front end began, we breezed through most of it having prior React.js knowledge. We made a landing page like this: 
      </div>
      <div className='trails-prev-imgs'>
        <img src={Search} alt="" className='img-indiv-f'></img>
      </div>
    <div className='trails-p'>
    After we did that, we implemented our Swagger which was a reference to our API in case anyone in the future wanted to use it. 
    </div>
    <div className='trails-prev-imgs'>
        <img src={Swagger} alt="" className='img-indiv-f'></img>
      </div>
    <div className='trails-p'>
    The final step was creating a logo and a favicon to go with our website and deploying it. We picked these two as our favicon and logo respectively (did you know that the logo is made when you type {"\\mathbb{L}"})    </div>
    <div className='trails-prev-imgs'>
        <img src={Favicon} alt="" className='img-indiv-favicon'></img>
      </div>
      <div className='trails-prev-imgs'>
        <img src={Logo} alt="" className='img-indiv-logo'></img>
      </div>
      <div className='trails-p'>
      This was overall a very fun and education project (more educational I think). I would appreciate if you checked it out and possibly used this tool in your assignments :)
      </div>
      <div className='trails-p'>
        Web: <a href='https://lasyntex.ca/ '>https://lasyntex.ca/ </a>
      </div>
      <div className='trails-p'>
      GitHub: <a href='https://github.com/dourian/Lasyntex '>https://github.com/dourian/Lasyntex </a>
      </div>
    </div>
  )
}

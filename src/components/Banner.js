import React from 'react'
import "../css/sarinagpt.css"
import Pfp from "../assets/sarinagpt_assets/pfp.JPG"
import Mode from "../Mode"

export default function Banner() {
  return (
    <div id='banner' className={`banner-${Mode.curMode}`}>
      <img src={Pfp} alt = '' className='pfp'></img>
      <div className='name-container'>
        <div className='name-wrapper'>
          <div className='name'>SarinaGPT</div>

          <div className='description'>Here to answer questions you have about Sarina!</div>


      </div>
      </div>
      
    </div>
  )
}

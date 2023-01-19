import React from 'react'
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

export default function OtherProject({ img, description, techList, date, buttons }) {
    return (
        <div className='other-proj-wrapper'>
            <div className='other-img'>
                <img src={img} alt="" className='other-proj-img'></img>
            </div>
            <div className='other-proj-t'>{date}</div>
            <div className='other-proj-tlist'>
                {techList.map((item) => {
                   
                    return (
                        <img className='other-tech' src={item} alt=""></img>
                    )
                })}
            </div>
            <div className='other-proj-t'>
            {description}
            </div>
            <div className='other-proj-t'>
                {buttons.map((button) => {
                    return (
                        <div>
                            {button.text + ": "}
                            <a href={button.link}>{button.link}</a>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

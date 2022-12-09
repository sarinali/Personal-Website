import React from "react";
import '../css/topbar.css'
import {Link} from 'react-router-dom'

function TopBarDesktop() {
    return (
        <div className="topbar-container">
            <div className='logo-container'>
                <div className='chinese-name'>李晶</div>
                <div className='english-name'>sarina li</div>
            </div>
            <div className='topbar'>
                <div className='topbar-item-container'>
                    <Link to="/" className="topbar-item">Home</Link>
                </div>
                <div className='topbar-item-container'>
                    <Link to="/aboutme" className="topbar-item">About Me</Link>
                </div>
                <div className='topbar-item-container'>
                    <Link to="/experience" className="topbar-item">Experience</Link>
                </div>
                <div className='topbar-item-container'>
                    <Link to="/projects" className="topbar-item">Projects</Link>
                </div>
                <div className='topbar-item-container'>
                    <Link to="/contact" className="topbar-item">Contact Me</Link>
                </div>
            </div>
        </div>
    )
}

export default TopBarDesktop;
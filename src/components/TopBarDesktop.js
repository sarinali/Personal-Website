import '../css/topbar.css'
import {Link} from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import Mode from '../Mode.js';
import Toggle from 'react-toggle'
import {MdDarkMode} from "react-icons/md";
import "react-toggle/style.css" 
import { useLocation} from 'react-router-dom';

function TopBarDesktop() {
    const [theme, setTheme] = useState('light');
    const location = useLocation();
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
            Mode.curMode = "dark";
        } else {
            setTheme('light');
            Mode.curMode = "light";
        }
    };
    useEffect(() => {
        document.body.className = theme;
        document.getElementById("app").className = `App ${theme}`
        // if (Mode.curMode === "light") {
        // console.log(location.pathname)
        if (location.pathname === '/sarinagpt') {
            document.getElementById("answerbody").className = `answer-body-${theme}`
            document.getElementById("formbody").className = `form-body-${theme}`
            document.getElementById("askbar").className = `ask-bar-${theme}`
            document.getElementById("banner").className = `banner-${theme}`
        } else if (location.pathname === '/contact') {
            document.getElementById("boxone").className = `name-text-${theme}`
            document.getElementById("box2").className = `email-text-${theme}`
            document.getElementById("box3").className = `message-text-${theme}`
        }
    }, [theme, location]);

    const changeOpacity = () => {
        // console.log(window.scrollY);
        var minOpacity = 0.5;
        var maxScrollBreakpoint = 200;
        var newOpacity = window.scrollY / maxScrollBreakpoint;
        newOpacity = Math.max(minOpacity, 1-newOpacity);
        document.getElementById("topbar").style.opacity = newOpacity;
    }

    function changeBackground(e) {
        e.target.style.opacity = 1;
      }

    window.addEventListener('scroll', changeOpacity)
    return (
        <div className={`topbar-container-${Mode.curMode}`} 
        id='topbar'
        onMouseEnter={changeBackground}
        onMouseLeave={changeOpacity}
        >
            <div className='logo-container'>
                <div className='chinese-name'>李晶</div>
                <div className='english-name'>sarina li</div>
            </div>
            <div className='topbar'>
                <div className='topbar-item-container'>
                    <Link to="/" className={`topbar-item-${Mode.curMode}`}>Home</Link>
                </div>
                <div className='topbar-item-container'>
                    <Link to="/projects" className={`topbar-item-${Mode.curMode}`}>Projects</Link>
                </div>
                <div className='topbar-item-container'>
                    <Link to="/aboutme" className={`topbar-item-${Mode.curMode}`}>About Me</Link>
                </div>
                {/* <div className='topbar-item-container'>
                    <Link to="/experience" className="topbar-item">Experience</Link>
                </div> */}
                <div className='topbar-item-container'>
                    <Link to="/contact" className={`topbar-item-${Mode.curMode}`}>Contact Me</Link>
                </div>
                <div className='topbar-item-container'>
                    <Link to="/sarinagpt" className={`topbar-item-${Mode.curMode}`}>SarinaGPT</Link>
                </div>
                <div className='topbar-spacer'></div>
                <div className='toggle-item-container'>
                    <Toggle
                        icons={{
                        checked: <MdDarkMode />,
                        unchecked: null,
                        }}
                        className='custom-toggle'
                        onChange={toggleTheme} />
                </div>
            </div>
        </div>
    )
}

export default TopBarDesktop;
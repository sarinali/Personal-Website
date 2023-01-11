import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import TopBar from './components/TopBar';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import ContactMe from './pages/ContactMe';
import Footer from './components/Footer';
import React, { useState, useEffect } from 'react';
import Mode from './Mode.js';
import Toggle from 'react-toggle'
import {MdDarkMode} from "react-icons/md";
import "react-toggle/style.css" 


function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
      if (theme === 'light') {
        setTheme('dark');
        Mode.isDark = true;
      } else {
        setTheme('light');
        Mode.isDark = false;
      }
    };
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);
  return (
    <Router>
      <div className={`App ${theme}`}>
        <TopBar></TopBar>
        {/* <button onClick={toggleTheme}>Toggle Theme</button> */}
        <label>
  <Toggle
    // defaultChecked={this.state.soupIsReady}
    icons={{
      checked: <MdDarkMode />,
      unchecked: null,
    }}
    onChange={toggleTheme} />
</label>
        {/* <Link to="/aboutme">About</Link> */}
        <Routes>
            <Route exact path="/" element={<Home></Home>}></Route>
            <Route exact path="/aboutme" element={<AboutMe></AboutMe>}></Route>
            <Route exact path="/experience" element={<Experience></Experience>}></Route>
            <Route exact path="/projects" element={<Projects></Projects>}></Route>
            <Route exact path="/contact" element={<ContactMe></ContactMe>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;

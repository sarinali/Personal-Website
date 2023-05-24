import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import TopBar from './components/TopBar';
import Home from './pages/Home';
// import Home1 from './pages/Home1';
import AboutMe from './pages/AboutMe';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import ContactMe from './pages/ContactMe';
import Footer from './components/Footer';
import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import MarkhamTrails from './pages/MarkhamTrails';
import Wolfpackapp from './pages/Wolfpackapp';
import Lasyntex from './pages/Lasyntex';
import SarinaGPT from './pages/SarinaGPT.tsx';




function App() {
  return (
    <ParallaxProvider>
        <Router>
      <div className="App" id='app'>
        <TopBar></TopBar>
        <Routes>
            <Route exact path="/" element={<Home></Home>}></Route>
            <Route exact path="/aboutme" element={<AboutMe></AboutMe>}></Route>
            <Route exact path="/experience" element={<Experience></Experience>}></Route>
            <Route exact path="/projects" element={<Projects></Projects>}></Route>
            <Route exact path="/contact" element={<ContactMe></ContactMe>}></Route>
            <Route exact path="/projects/markhamtrails" element={<MarkhamTrails></MarkhamTrails>}></Route>
            <Route exact path="/projects/wolfpackapp" element={<Wolfpackapp></Wolfpackapp>}></Route>
            <Route exact path="/projects/lasyntex" element={<Lasyntex></Lasyntex>}></Route>
            <Route exact path='/sarinagpt' element={<SarinaGPT></SarinaGPT>}></Route>
        </Routes> 
        <Footer></Footer>
      </div>
    </Router>
    </ParallaxProvider>
    
  );
}

export default App;

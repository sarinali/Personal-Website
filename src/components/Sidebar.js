/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import {Link} from 'react-router-dom'
// import './Sidebar.css';
import '../css/sidebar.css';


export default props => {
  return (
    <Menu right>
        <Link to='/' className='btn'>Home</Link>
        {/* <Link to='/aboutme' className='btn'>About Me</Link> */}
        {/* <Link to='/experience' className='btn'>Experience</Link> */}
        <Link to='/projects' className='btn'>Projects</Link>
        <Link to='/contact' className='btn'>Contact Me</Link>
        <Link to='/sarinagpt' className='btn'>SarinaGPT</Link>
    </Menu>
  );
};
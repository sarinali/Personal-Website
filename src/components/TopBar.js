import TopBarDesktop from './TopBarDesktop'
import TopBarMobile from './TopBarMobile'
import React, { useState, useEffect } from 'react';


function TopBar() {

  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 900;
  React.useEffect(() => {
    /* Inside of a "useEffect" hook add an event listener that updates
       the "width" state variable when the window size changes */
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    return () => window.removeEventListener("resize", window.handleWindowResize);
  }, []);
  // width > breakpoint ? console.log('greater than 760') : console.log('less than 760')
  // }
  return width < breakpoint ? <TopBarMobile /> : <TopBarDesktop />;
  
}

export default TopBar;
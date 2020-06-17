//lib
import React, { useState, useEffect } from 'react';
//components
import Header from './components/Header.js';
import MainContent from './components/MainContent.js';
import Footer from './components/Footer.js';


function App() {
  const initialBp = getBp(window.innerWidth);
  const [bp, setBp] = useState(initialBp);
  function getBp(winSize)
  {
    let n="default";
    const breakpoints = [576, 768, 992, 1200];
    const breakcodes = ["sm", "md", "lg", "xl"];
    breakpoints.forEach((bp) => {
      if (winSize >= bp) {
        n = breakcodes[breakpoints.indexOf(bp)];
      }
    });
    return n;
  }
  function handleResize() {
    let w = window.innerWidth;
    let newBp = getBp(w);
    if (bp !== newBp)
    {
      console.log("chgt BP",newBp);
      setBp(newBp);
    }
  
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })
  return (
    <div className="App">
      <Header />
      <MainContent bp={bp}/>
      <Footer />
    </div>
  );
}

export default App;

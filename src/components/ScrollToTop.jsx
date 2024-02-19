import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../assets/css/ScrollToTop.css';

const ScrollToTop = () => {

  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  // store scroll position in state to adjust visiblity of scroll-to-top button
  const handleScroll = () => {
    // Show the button if the user has scrolled down, hide it otherwise
    setIsVisible(window.scrollY > 0);
  };

  // scroll to top of page when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Add the event listeners when the component mounts.
  useEffect(() => {
    // Attach the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  // Scroll to the top of the page when the pathname changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return (
    <div className='scrollToTopDiv' onClick={scrollToTop} 
    style={{ display: isVisible ? 'block' : 'none'}}>

      <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 24 24" fill="none" className='scrollToTopButton'>
        {/* remove fillRule and ClipRule if an error is encountered*/}
        <path fillRule="evenodd" clipRule="evenodd" d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM8 10V8H16V10H8ZM16.2427 15.2974L14.8285 16.7116L12 13.8832L9.17164 16.7116L7.75743 15.2974L12.0001 11.0547L16.2427 15.2974Z" fill="currentColor" vectorEffect="non-scaling-stroke" stroke="currentColor" strokeWidth=".5"/>
      </svg>

    </div>
  );
};

export default ScrollToTop;

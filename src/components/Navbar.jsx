import React, {useState, useEffect} from 'react'
import '../assets/css/Navbar.css';
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';




// component is using destrucutred props from APP.js:
// - activeTab: Currently active tab name.
// - setActiveTab: Function to set the active tab.
const NavBar = ({ activeTab, setActiveTab }) => {

  // for the ID scroll
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  // Get the current location using the useLocation hook
  const location = useLocation();

  // Function to check if a given link is active based on the current location
  const isLinkActive = (path) => {
    return location.pathname === path;
  };

  // Function to check if the current location matches the default path
  const isDefaultPath = () => {
    return location.pathname === '/' || location.pathname === '/home' || location.pathname === '/home/' || location.pathname === '/research-insulin-dopamine/' || location.pathname === '/research-insulin-dopamine' || location.pathname === '';
  }; 

  // research-insulin-dopamine/
  
  // State to track the menus visibility
  const [menuVisible, setMenuVisible] = useState(false);
  const [compoundMenuVisible1, setCompoundMenuVisible1] = useState(false);
  const [compoundMenuVisible2, setCompoundMenuVisible2] = useState(false);
  const [compoundMenuVisible3, setCompoundMenuVisible3] = useState(false);

  // Functions to handle compund menu link clicks or closing clicks
  const handleCompoundMenuClick1 = () => {
    setCompoundMenuVisible1(true);
  }
  const handleCompoundXClick1 = () => {
    setCompoundMenuVisible1(false);
  }
  const handleCompoundMenuClick2 = () => {
    setCompoundMenuVisible2(true);
  }
  const handleCompoundXClick2 = () => {
    setCompoundMenuVisible2(false);
  }
  const handleCompoundMenuClick3 = () => {
    setCompoundMenuVisible3(true);
  }
  const handleCompoundXClick3 = () => {
    setCompoundMenuVisible3(false);
  }
  


  // Function to handle hamburger menu click
  const handleHamburgerMenuClick = () => {

    // toggle menu visibility
    // menuVisible === false ? setMenuVisible(true) : setMenuVisible(false);

    // set menu visibilit to true
    setMenuVisible(true);
  
  };

  const handleHamburgerMenuBlur = () => {
    // on blur, return to original position and hide menu
    setTimeout(() => {

      setMenuVisible(false);

    }, 100);
    
  }

  const handleXClick = () => {
    setMenuVisible(false);
  }

  useEffect(() => {
    // prevent the user from scrolling the page when the menu is open
    if (menuVisible) {
      document.documentElement.style.pointerEvents = 'none';
      document.body.style.pointerEvents = 'none';
      document.documentElement.style.overflow = 'clip';
      document.body.style.overflow = 'clip';
    } else {
      document.documentElement.style.pointerEvents = 'auto';
      document.body.style.pointerEvents = 'auto';
      document.documentElement.style.overflowY = 'auto';
      document.body.style.overflowY = 'auto';
    };

    // Add event listener when the component mounts
    const handleClickOutside = (e) => {

      if (menuVisible && !e.target.closest('.menuContainer') && !e.target.closest('.hamburgerMenueIconDiv')){
        setTimeout(() => {
          setMenuVisible(false);
          setCompoundMenuVisible1(false);
          setCompoundMenuVisible2(false);
          setCompoundMenuVisible3(false);
        }, 50);
        return;
      } else if (e.target.closest('.menuInsideClick')){
        setTimeout(() => {
          setMenuVisible(false);
          setCompoundMenuVisible1(false);
          setCompoundMenuVisible2(false);
          setCompoundMenuVisible3(false);
        }, 50);
        return;
      }
      
    }

    if (menuVisible){
      setTimeout(() => {
        document.addEventListener('click', handleClickOutside);
      }, 100);
    } else {
      setTimeout(() => {
        document.removeEventListener('click', handleClickOutside);
      }, 100); 
    }
  }, [menuVisible]);


  return (
    <div 
    // className={`navbar-container ${menuVisible ? 'blurred-background' : ''}`} 
    className='navbar-container'
    > 

      <div className="hamburgerMenueIconDiv">
        {/* the tabIndex is for using the onBlur. Otherwise, could also use LINK instead of div */}
        <div tabIndex={0} onClick={handleHamburgerMenuClick} 
        // onBlur={handleHamburgerMenuBlur}
        >  

          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="hamburgerMenueIcon" 
          >
            
            <path d="M0 3.75H20M0 10H20M0 16.25H20" vectorEffect="non-scaling-stroke" stroke="currentColor" strokeWidth="1.5"></path>
          </svg>

        </div>
      </div>

      {menuVisible && (
        <div className='menuContainer-background' ></div>
      )}

      {/* heavy content side menu */}
      <div className={`menuContainer ${!menuVisible ? 'menuContainer-hide' : ''}`} 
      style={{pointerEvents: 'auto'}}>

        <div className='x-symbolDiv'>

          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" 
          className='x-symbol'
          onClick={handleXClick}>
            {/* remove vectorEffect, strokeWidth, and strokeLinejoin if an error is encountered*/}
            <path d="M1.25 18.75L18.75 1.25M18.75 18.75L1.25 1.25" vectorEffect="non-scaling-stroke" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="bevel"></path>
          </svg>

        </div>

        <ul className="menu-compound-links menuInsideClick">
          <li>  
            <Link to={process.env.PUBLIC_URL + "/home"} className={isLinkActive('/home') ? "active" : ""}>Home</Link>
          </li>
          
          {isDefaultPath() ? (
            <>
              <li>
                <ScrollLink onClick={handleXClick} to="about" smooth={true} duration={500}>About</ScrollLink>
              </li>
              <li>
                <ScrollLink onClick={handleXClick} to="research" smooth={true} duration={500}>Research</ScrollLink>
              </li>
              <li>
                <ScrollLink onClick={handleXClick} to="contact" smooth={true} duration={500}>Contact</ScrollLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/about" className={isLinkActive('/about') ? "active" : ""}>About</Link>
              </li>
              {/* There is not component called research, and botht the logs and researchMaterial compoenets have their own tabs, so unless we are in the home component, having this line is an inconvenience */}
              {/* <li>
                <Link to="/research" className={isLinkActive('/research') ? "active" : ""}>Research</Link>
              </li> */}
              <li>
                <Link to="/contact" className={isLinkActive('/contact') ? "active" : ""}>Contact</Link>
              </li>
            </>
          )}

        </ul>

        

        <ul className="menu-compound-links menuInsideClick">
          <li>
            <Link to="/logs" className={isLinkActive('/logs') ? "active" : ""}>Logs</Link>
          </li>
          <li> 
            <Link to="/researchMaterial" className={isLinkActive('/researchMaterial') ? "active" : ""}>Research Material</Link>
          </li>
        </ul>





      </div>
      
      <ul className="navbar-links">
        <li>
          <Link to={process.env.PUBLIC_URL + "/home#hero"} onClick={scrollToTop} className={isLinkActive('/home#hero') ? "active" : ""}>Home</Link>
        </li>

        {isDefaultPath() ? (
          <>
            <li>
              <ScrollLink to="about" smooth={true} duration={500}>About</ScrollLink>
            </li>
            <li>
              <ScrollLink to="research" smooth={true} duration={500}>Research</ScrollLink>
            </li>
            <li>
              <ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/about" className={isLinkActive('/about') ? "active" : ""}>About</Link>
            </li>
            {/* <li>
              <Link to="/research" className={isLinkActive('/research') ? "active" : "">Research</Link>
            </li> */}
            <li>
              <Link to="/contact" className={isLinkActive('/contact') ? "active" : ""}>Contact</Link>
            </li>
          </>
        )}


      </ul>


      {/* main website icon */}

      <div className='main-iconDiv'>
        <Link to="/home" className={isLinkActive('/home') ? "active" : ""}>

          <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="15px" height="15px" viewBox="0 0 300 300" preserveAspectRatio="xMidYMid meet" className='main-icon'>
            <g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)" stroke="none">
              <path d="M1851 2979 c-69 -13 -139 -38 -216 -77 -199 -99 -338 -238 -435 -435 -75 -153 -93 -231 -94 -412 0 -173 18 -261 84 -401 112 -240 317 -426 553 -500 l57 -18 0 -470 c0 -280 4 -485 10 -507 13 -46 70 -112 115 -133 44 -21 150 -23 196 -3 45 19 105 87 118 134 7 24 11 206 11 503 l0 466 58 12 c84 17 245 101 337 175 141 114 247 269 307 447 32 94 33 97 33 290 0 193 -1 196 -33 290 -60 178 -169 338 -307 447 -147 118 -363 203 -510 203 -70 -1 -60 -12 35 -39 l59 -16 -179 0 -179 0 59 16 c96 28 105 39 30 38 -36 -1 -85 -5 -109 -10z m-51 -68 c-317 -102 -565 -375 -625 -690 -73 -380 107 -760 454 -958 90 -51 87 -56 -7 -9 -235 118 -400 338 -458 611 -19 90 -19 295 0 378 60 256 199 451 413 579 74 45 230 108 263 107 8 -1 -10 -9 -40 -18z m402 -25 c522 -103 826 -632 646 -1127 -141 -386 -552 -622 -950 -545 -575 113 -871 736 -592 1245 174 318 546 495 896 427z m253 -29 c98 -49 156 -90 231 -163 131 -127 203 -265 259 -497 l34 -144 -28 -119 c-57 -238 -94 -323 -197 -452 -108 -135 -252 -233 -429 -292 -42 -14 -79 -34 -92 -49 l-23 -26 0 -450 c0 -279 -4 -464 -10 -487 -15 -52 -50 -91 -117 -128 l-57 -33 -51 28 c-78 43 -112 81 -124 137 -7 30 -11 221 -11 497 0 441 0 449 -21 475 -12 15 -35 33 -53 42 -17 8 -22 12 -11 8 11 -3 49 -12 85 -20 35 -9 68 -18 72 -20 5 -3 -5 -17 -22 -31 -29 -24 -30 -28 -30 -102 0 -68 3 -80 23 -98 12 -12 31 -23 42 -25 20 -5 20 -5 0 -13 -11 -4 -30 -17 -42 -28 -23 -20 -23 -25 -23 -241 0 -212 1 -221 22 -243 12 -13 27 -23 35 -23 7 0 13 -4 13 -10 0 -5 -5 -10 -12 -10 -6 0 -22 -10 -35 -22 -19 -17 -23 -32 -23 -76 0 -138 133 -226 242 -159 62 37 82 72 86 147 l4 67 -38 31 c-25 21 -33 32 -22 32 9 0 26 12 37 26 20 25 21 39 21 244 0 212 0 217 -22 237 -13 11 -32 24 -43 28 -20 8 -20 8 0 13 11 2 30 13 43 25 19 17 22 31 22 91 0 62 -3 73 -27 98 -15 15 -38 28 -52 29 -14 0 21 9 79 19 240 40 442 167 587 367 47 64 117 212 139 293 26 92 26 348 0 440 -69 252 -247 468 -484 587 -48 24 -76 41 -62 37 14 -4 52 -20 85 -37z m-387 -1755 l82 3 0 -77 0 -78 -125 0 -125 0 0 84 0 84 43 -10 c23 -5 79 -8 125 -6z m82 -477 l0 -225 -125 0 -125 0 0 225 0 225 125 0 125 0 0 -225z m-2 -390 c-3 -58 -8 -69 -36 -98 -29 -28 -39 -32 -87 -32 -48 0 -58 4 -87 32 -28 29 -33 40 -36 98 l-4 65 127 0 127 0 -4 -65z"/>
              <path d="M1955 2794 c-11 -2 -45 -9 -75 -15 -255 -51 -487 -277 -556 -542 -104 -401 147 -817 556 -918 31 -8 106 -14 170 -14 64 0 139 6 170 14 275 68 493 286 561 561 18 71 18 269 0 339 -69 271 -277 485 -540 556 -56 15 -248 28 -286 19z m-151 -97 c-195 -79 -346 -241 -415 -442 -21 -61 -24 -88 -24 -210 1 -128 3 -146 29 -213 42 -113 92 -190 175 -273 74 -73 191 -149 254 -164 15 -4 27 -11 27 -16 0 -12 -95 26 -163 66 -159 94 -267 236 -317 417 -28 101 -28 275 0 376 62 224 221 396 435 473 85 30 84 20 -1 -14z m502 8 c210 -79 364 -249 425 -470 18 -67 21 -97 17 -209 -4 -109 -9 -144 -32 -210 -65 -190 -213 -343 -406 -422 -33 -13 -68 -24 -77 -23 -10 0 10 10 44 23 207 77 374 256 438 466 22 75 31 234 16 312 -27 143 -93 262 -205 373 -80 78 -163 130 -271 169 -22 8 -34 15 -28 15 7 1 43 -10 79 -24z m-121 -20 c240 -50 450 -260 500 -500 31 -146 12 -285 -56 -425 -59 -119 -170 -230 -289 -289 -193 -94 -387 -94 -580 0 -119 59 -230 170 -289 289 -94 192 -94 384 -1 579 79 165 260 307 440 345 86 19 189 19 275 1z"/>
              <path d="M1832 2539 c-48 -14 -109 -80 -123 -131 -23 -89 12 -182 88 -229 30 -19 52 -24 105 -24 58 0 72 4 109 30 112 80 114 249 3 328 -45 32 -126 43 -182 26z m26 -52 c-87 -39 -122 -131 -77 -203 47 -77 131 -98 197 -48 89 69 78 184 -23 241 -46 26 -30 31 21 7 18 -9 43 -31 54 -49 26 -43 27 -128 1 -171 -54 -88 -217 -84 -263 7 -24 45 -23 125 1 165 18 30 73 64 101 63 8 0 3 -6 -12 -12z m91 -51 c67 -35 65 -143 -4 -174 -91 -41 -179 51 -131 137 26 47 84 63 135 37z"/>
              <path d="M1616 2134 c-9 -8 -16 -24 -16 -34 0 -10 7 -26 16 -34 8 -9 24 -16 34 -16 43 0 65 54 34 84 -8 9 -24 16 -34 16 -10 0 -26 -7 -34 -16z"/>
              <path d="M935 2533 c-85 -12 -203 -64 -330 -147 -44 -29 -97 -63 -117 -75 -103 -62 -164 -202 -128 -296 8 -21 7 -27 -8 -31 -50 -15 -126 -61 -158 -96 -59 -66 -88 -140 -90 -230 -1 -64 -6 -81 -27 -110 -41 -55 -58 -97 -64 -157 -5 -50 -4 -54 9 -36 8 11 27 50 42 88 16 37 32 70 37 73 26 16 49 86 48 147 -3 114 54 202 163 258 75 38 87 58 87 141 -1 81 23 141 72 181 98 80 298 196 392 227 61 19 53 5 -10 -19 -84 -31 -135 -62 -153 -94 -15 -28 -15 -28 52 -90 67 -61 99 -113 97 -159 0 -17 -4 -13 -12 14 -18 57 -70 122 -113 144 -27 13 -60 19 -105 19 -55 0 -72 -5 -107 -28 -62 -40 -95 -99 -100 -175 -4 -61 -4 -63 34 -101 l39 -39 -60 -5 c-73 -5 -115 -25 -173 -81 -66 -63 -85 -106 -90 -210 -4 -82 -7 -93 -38 -133 -117 -153 -65 -372 111 -469 72 -40 66 -43 -17 -9 -34 14 -67 25 -73 25 -19 0 -65 -55 -75 -91 -24 -84 -4 -162 60 -231 30 -33 61 -55 95 -67 56 -19 52 -5 39 -139 -6 -54 -3 -69 20 -117 42 -84 114 -137 218 -159 15 -3 37 -21 49 -39 40 -58 83 -98 134 -125 43 -23 62 -27 140 -27 75 0 97 4 133 23 66 35 119 88 149 150 29 61 31 97 46 702 2 86 3 60 5 -82 2 -199 3 -208 25 -233 l22 -26 35 21 c75 43 112 61 116 57 2 -2 -18 -18 -45 -35 -207 -128 -194 -436 23 -550 44 -23 63 -27 141 -27 74 0 97 4 133 23 23 12 42 19 42 14 0 -9 -35 -28 -108 -58 -65 -26 -64 -38 1 -31 65 6 154 50 169 83 14 30 -6 64 -36 64 -13 0 -45 -12 -72 -27 -42 -24 -60 -28 -129 -28 -92 0 -137 19 -196 82 -60 63 -74 98 -74 188 0 90 14 125 74 188 47 51 101 77 168 84 43 5 58 11 70 29 14 22 14 26 -2 50 -16 25 -20 26 -78 20 -71 -7 -148 -40 -200 -86 l-37 -32 0 405 c0 355 -2 408 -16 421 -20 21 -47 20 -67 -2 -15 -16 -17 -79 -19 -587 -3 -637 1 -596 -77 -678 -59 -63 -104 -82 -196 -82 -63 0 -89 5 -120 22 -45 23 -110 91 -137 141 -13 24 -24 32 -45 32 -58 0 -108 22 -154 69 -68 68 -86 149 -53 242 10 26 14 54 11 62 -3 9 -25 21 -49 26 -66 17 -110 44 -142 89 -39 56 -46 131 -18 195 l20 46 69 -35 c45 -23 88 -36 129 -40 59 -6 63 -5 79 20 16 24 16 28 2 50 -12 18 -27 24 -70 29 -66 6 -109 27 -160 76 -63 59 -82 104 -82 196 0 88 14 126 68 183 31 32 32 35 32 126 0 85 2 96 30 142 77 124 234 160 352 81 60 -40 102 -107 110 -176 9 -76 48 -105 88 -64 37 37 -5 187 -75 267 -44 50 -122 93 -192 107 -44 9 -58 16 -62 33 -31 113 54 226 170 226 91 0 174 -81 174 -170 0 -20 8 -35 25 -46 23 -15 27 -15 50 0 69 45 -18 237 -129 286 l-41 18 85 40 c103 49 163 64 226 55 39 -5 49 -3 60 12 20 27 17 53 -8 69 -26 16 -89 25 -133 19z m-318 -629 c72 -41 135 -141 132 -208 -1 -13 -6 -5 -14 20 -7 22 -20 54 -28 70 -21 39 -93 107 -142 133 -25 13 -30 19 -15 15 14 -3 44 -17 67 -30z"/>
              <path d="M321 1714 c-22 -16 -23 -22 -17 -77 8 -77 43 -153 97 -212 45 -49 131 -105 161 -105 34 0 29 -22 -15 -64 -29 -29 -59 -47 -90 -55 -55 -13 -72 -48 -42 -81 23 -25 41 -25 109 0 59 23 128 87 151 144 12 29 21 34 69 44 73 15 146 53 184 96 28 32 30 39 20 61 -17 37 -58 37 -98 0 -50 -46 -90 -60 -175 -60 -90 0 -125 14 -188 74 -51 47 -77 101 -84 168 -4 39 -12 58 -27 68 -26 19 -26 19 -55 -1z m73 -181 c49 -95 149 -162 253 -171 l66 -5 -26 -19 c-14 -10 -36 -36 -48 -56 -30 -50 -68 -91 -101 -108 -49 -25 -51 -15 -3 19 25 17 56 49 67 69 20 35 20 38 4 62 -9 14 -43 39 -76 56 -100 50 -167 139 -176 233 l-4 42 13 -45 c8 -25 21 -60 31 -77z m491 -112 c-7 -12 -70 -46 -113 -61 -25 -10 -26 -9 -8 5 11 8 25 15 30 15 6 1 29 14 51 29 40 29 53 33 40 12z"/>
              <path d="M13 1257 c4 -38 16 -76 36 -111 29 -53 30 -54 11 -71 -27 -24 -52 -95 -48 -136 3 -32 6 -28 51 64 l49 99 -36 79 c-20 43 -36 82 -36 86 0 4 -8 17 -16 28 -15 19 -16 16 -11 -38z"/>
              <path d="M803 1035 c-135 -42 -234 -158 -250 -292 -5 -48 -6 -49 -38 -45 -54 6 -86 -46 -49 -82 8 -9 30 -16 47 -16 114 -2 220 -102 234 -220 6 -55 23 -80 53 -80 37 0 53 29 47 87 -11 101 -82 216 -161 258 -32 18 -36 24 -36 60 2 122 98 227 220 242 55 6 80 23 80 53 0 48 -61 62 -147 35z m-23 -70 c-56 -28 -125 -101 -151 -158 -10 -23 -19 -64 -19 -92 0 -49 1 -51 69 -115 75 -70 109 -125 117 -186 4 -38 4 -37 -14 12 -36 99 -110 174 -200 201 l-58 17 30 27 c23 20 36 44 49 98 13 50 30 86 58 121 37 47 115 99 149 99 8 0 -5 -11 -30 -24z"/>
              <path d="M10 855 c0 -22 9 -59 20 -82 24 -53 97 -127 141 -143 l34 -12 0 -87 c0 -103 23 -162 88 -229 48 -49 93 -76 160 -93 28 -7 49 -18 52 -28 11 -34 101 -114 162 -143 46 -22 73 -28 105 -26 l43 4 -60 27 c-130 60 -131 61 -228 165 -27 30 -50 43 -87 52 -37 9 -65 25 -105 61 -64 59 -85 111 -85 214 0 83 -16 112 -80 145 -47 24 -86 70 -116 135 -37 80 -44 86 -44 40z"/>
              <path d="M1088 169 c-62 -60 -106 -89 -169 -112 -25 -10 -54 -24 -65 -33 -35 -28 87 -10 146 22 48 26 129 102 143 134 6 13 8 13 14 0 16 -37 102 -113 158 -141 47 -23 72 -29 106 -27 l44 4 -60 28 c-112 52 -126 61 -186 119 -33 31 -64 57 -69 57 -5 0 -33 -23 -62 -51z"/>
            </g>
          </svg>

        </Link>
      </div>

      <ul className="navbar-links">
        <li>
          <Link to="/logs" className={isLinkActive('/logs') ? "active" : ""}>Logs</Link>
        </li>
        <li> 
          <Link to="/researchMaterial" className={isLinkActive('/researchMaterial') ? "active" : ""}>Research Material</Link>
        </li>
      </ul>


    </div>
    
  )
}

export default NavBar

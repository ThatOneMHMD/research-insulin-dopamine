import React from 'react';
import '../assets/css/Hero.css';

const Hero = () => {

    // Smooth scroll to the target section
    const handleSmoothScroll = (event) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div id='hero' className="hero">
            <div className="hero-content">
                <h1>Insulin&Dopamine!</h1>
                <p>This website features a <strong> review research article </strong> that explores the interaction between Insulin and Dopamine signalling</p>
                
                {/* the transition is instant... fix */}
                <a href="#welcome" className="heroBtn" onClick={handleSmoothScroll}>


                    Get Started
                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 32 32" fill="none" role="img">
                        <path d="M14 1L30 16L14 31" stroke="currentColor" strokeWidth="1.7" vectorEffect="non-scaling-stroke"></path>
                    </svg>
                    
                </a>

                {/* <div className='heroBorder'></div> */}
            </div>

            
        </div>
    );
}

export default Hero;

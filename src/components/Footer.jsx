import React from 'react';
import { Link, useLocation } from "react-router-dom";
import '../assets/css/Footer.css';

const Footer = ({ activeTab, setActiveTab }) => {

    // Get the current location using the useLocation hook
    const location = useLocation();

    // Function to check if a given link is active based on the current location
    const isLinkActive = (path) => {
     return location.pathname === path;
    };

    return (
        <div className='footer-container'>

            <div className="copyright">
                &copy; {new Date().getFullYear()} Insulin&Dopamine
            </div>

        </div>
    );
};

export default Footer;

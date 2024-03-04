// use HashRouter for github pages???
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, {useState, useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import './App.css';
import './index.css';
import './assets/css/Home.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import ScrollToTop from './components/ScrollToTop';
import Logs from './components/Logs';
import ResearchMaterial from './components/ResearchMaterial';
import About from './components/About';
import Contact from './components/Contact';
import SeparatorWide from './components/SeparatorWide';


function App() {

  // This makes sure the default active tab is the "about" section
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <Router>

      <div className="App mainBackground">

        {/* pass in activeTab state */}
        <Navbar setActiveTab={setActiveTab} activeTab={activeTab} />

        {/* if need be, can uncomment and apply this later */}
        {/* <PathMap/> */}
        
        <div className="maxComponentHeight">
          <Routes>

            {/* Navbar and Compound Navbar*/}
            <Route path="/" element={<Home />} />     
            <Route path={process.env.PUBLIC_URL} element={<Home />} /> 
            <Route path="/home" element={<Home />} />  

            <Route path="/about" element={<About />} /> 
            <Route path="/contact" element={<Contact />} />

            <Route path="/logs" element={<Logs />} />
            <Route path="/researchMaterial" element={<ResearchMaterial />} /> 
       

            {/* Wildcard */}
            <Route path="*" element={<Home />} />

          </Routes>

        </div>  

        <SeparatorWide marginBottom={'40px'} rotation={-5} />
        <SeparatorWide  rotation={-5} />

        
        <ScrollToTop />
        <Footer setActiveTab={setActiveTab} activeTab={activeTab} />

      </div>

    </Router>
  );
}

export default App;

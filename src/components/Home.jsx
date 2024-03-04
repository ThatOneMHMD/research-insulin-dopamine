import React, {useEffect} from 'react';
import { Link, useLocation } from "react-router-dom";

import '../assets/css/Home.css';
import Hero from './Hero.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Separator from './Separator.jsx';
import SeparatorWide from './SeparatorWide.jsx';


const Home = () => {

    const location = useLocation();

    // smooth scroll to the target section
    const handleSmoothScroll = (event) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // useEffect(() => {
    //     // Smooth scroll to the target element when the component mounts
    //     const smoothScrollToHash = () => {
    //         const targetId = location.hash;
    //         if (targetId) {
    //             setTimeout(() => {
    //                 const targetElement = document.querySelector(targetId);
    //                 if (targetElement) {
    //                     targetElement.scrollIntoView({ behavior: 'smooth' });
    //                 }
    //             }, 100); // Delay execution by 100 milliseconds
    //         }
    //     };
    
    //     smoothScrollToHash();
    
    //     // Add event listener to the document to handle smooth scrolling on hash changes
    //     const handleSmoothScroll = () => {
    //         smoothScrollToHash();
    //     };
    //     window.addEventListener('hashchange', handleSmoothScroll);
    
    //     // Clean up the event listener when the component unmounts
    //     return () => {
    //         window.removeEventListener('hashchange', handleSmoothScroll);
    //     };
    // }, []);
    

    
    return (
        <div>

            <Hero />

            <SeparatorWide rotation={-5} />

            <div id='welcome'>

                <div className='center'>

                    <h2 className='title'>Overview</h2>

                    <div className='welcome-content'>
                        
                        <div>
                            <p>Welcome to Insulin&Dopamine! Our primary goal here is to document the process of writing our review paper and to serve as a reliable backup for our research data.</p>
                            
                            <p>Through this platform, we aim to provide a comprehensive overview of our research journey, from the initial conception of ideas to the final publication of our review paper. By sharing our experiences, methodologies, and findings, we hope to inspire and educate others in the scientific community.</p>

                            <p>Furthermore, this website serves as a repository for our research data, ensuring its accessibility and preservation for future reference. We understand the importance of data integrity and transparency in scientific research, and we are committed to upholding these principles.</p>
                        </div>

                        {/* Uncomment the following lines to include an image */}
                        {/* <img src={welcomeImage} className='welcomeImage' alt="Welcome Image" /> */}

                    </div>

                    <a href="#about" className="homeBtn" onClick={handleSmoothScroll}>

                        See More

                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 32 32" fill="none" role="img">
                            <path d="M14 1L30 16L14 31" stroke="currentColor" strokeWidth="1.7" vectorEffect="non-scaling-stroke"></path>
                        </svg>

                    </a>

                </div>
            </div>


            <Separator rotation={-5} />

            <div id='about'>

                <div className='center'>

                
                    <h2 className='title'>About Us</h2>

                    {/* make it 2 column one with the text and another with a pic... */}

                    <div className='about-content'>
                        
                        <div>
                            <p>Our mission is to delve into the intricate interplay between insulin and dopamine signaling pathways, elucidating their dynamic relationship and its implications for physiological and psychological health. Through rigorous research and comprehensive analysis, we aim to contribute to a deeper understanding of this complex interaction.</p>
                            
                            <p>Our focus lies squarely on exploring the multifaceted relationship between insulin and dopamine signaling. From understanding how insulin resistance impacts dopamine levels to unraveling the neural circuits involved in their interaction, our aim is to provide valuable insights into this intriguing field of study.</p>

                            <p>With a commitment to excellence, we adopt a multidisciplinary approach, drawing upon insights from neuroscience, endocrinology, and psychology. By synthesizing findings from diverse disciplines, we strive to offer a comprehensive perspective on the intricate interplay between insulin and dopamine signaling pathways.</p>
                        </div>

                        {/* <img src={aboutImage} className='aboutImage' alt="About Us Img: Virtual Brain" /> */}
                        

                        
                    </div>

                    <Link to="/about" className="homeBtn">Learn More</Link>

                </div>
            </div>

            

            <Separator rotation={-5} />


            
            <div id='research'>

                <div className='center'>

                    <h2 className='title'>Research</h2>  

                    <div className='twoColumns'>

                        <div className='div-center'>

                            <div className='research-title'>Logs</div> 

                            <div className='research-info'>

                                Logs are essential records that document the progression and milestones of this research project. They serve as a detailed chronicle, capturing our journey from initial hypotheses to final conclusions. In the Logs section, you'll find weekly entries summarizing key activities, insights gained, challenges encountered, and solutions devised throughout the research process. These logs provide invaluable insights into the evolution of the project, facilitating reflection, analysis, and future decision-making.
                           
                            </div> 

                            <Link to="/logs" className="homeBtn">Learn More</Link>

                           

                        </div>

                        <div className='div-center'>

                            <div className='research-title'>Research Material</div>

                            <div className='research-info'> 

                                Research Materials encompass a wide range of resources used to support and substantiate the research endeavor. From primary sources and literature reviews to interviews, surveys, and experimental data, these materials constitute the foundation upon which our research findings are built. In the Research Material section, you'll find curated collections of documents, articles, datasets, and other relevant resources that have informed and enriched the research process. Explore these materials to delve deeper into the background, context, and empirical basis of the project.

                            </div> 

                            <Link to="/researchMaterial" className="homeBtn">Learn More</Link>

                        </div>

                    </div>
                </div>

            </div>



            <Separator rotation={-5} />



            


            <div id='contact'>

                <div className='center'>

                    <h1 className='title'>Contact</h1>

                    <div className='contact-intro'>
                        Help us improve! Send us your feedback, questions, or any other inquiries. We will get back to you as soon as possible.
                        <br />
                        <br />
                    </div>

                    <div className='twoColumns'>

                        <div className='div-center'>

                            <div className='contact-info'>
                                <p><strong>Supervisor: Dr. Rodrigo Mansur</strong></p>

                                <p> <strong>Phone:</strong> 416-603-5106</p>
                                <p><strong>Email:</strong> rodrigo.mansur@uhn.ca</p>
                                <p><strong>Website:</strong> <a href='https://psychiatry.utoronto.ca/faculty/rodrigo-mansur' target='blank'> Dr. Rodrigo Mansur, utoronto PhD. </a> </p>
                            </div>

                        </div>


                        <div className='div-center'>
                            <div className='contact-info'>
                                <p><strong>Research Author: Muhammad Atrach</strong></p>
                                <p> <strong>Phone:</strong> 647-638-3875</p>
                                <p style={{ wordBreak: 'break-all' }}><strong>Email:</strong> muhammad.atrach@mail.utoronto.ca</p>
                                <p><strong>Website:</strong> <a href='https://thatonemhmd.github.io/20-ReactPortfolio/' target='blank'> Muhammad Atrach, utoronto M.Sc. </a> </p>
                            </div>
                        </div>

                    </div>

                    <Link to="/contact" className="homeBtn">Learn More</Link>

                </div>

            </div>

            <Separator rotation={-5} />





            {/* we do not need a main section for now... */}

            {/* <div id='main'>
                <h1 className='title'>Welcome to My Awesome Home Component!</h1>
                <p>This is where the magic happens.</p>

                <p>Here's a list of things we can do:</p>
                <ul>
                    <li>Make a new component</li>
                    <li>Use a component</li>
                    <li>Pass props</li>
                    <li>Render a list</li>  
                </ul>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, aperiam laboriosam eligendi quod molestiae facilis voluptatem pariatur labore a, itaque perspiciatis iusto quas, odio architecto mollitia laudantium repellendus perferendis ratione!</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, aperiam laboriosam eligendi quod molestiae facilis voluptatem pariatur labore a, itaque perspiciatis iusto quas, odio architecto mollitia laudantium repellendus perferendis ratione!</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, aperiam laboriosam eligendi quod molestiae facilis voluptatem pariatur labore a, itaque perspiciatis iusto quas, odio architecto mollitia laudantium repellendus perferendis ratione!</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, aperiam laboriosam eligendi quod molestiae facilis voluptatem pariatur labore a, itaque perspiciatis iusto quas, odio architecto mollitia laudantium repellendus perferendis ratione!</p>

            </div> */}



            {/* <SeparatorWide marginBottom={'40px'} rotation={-5} /> */}

            {/* <SeparatorWide marginBottom={'40px'} rotation={5} /> */}

            {/* <SeparatorWide  rotation={-5} /> */}

            
            


        </div>
    );
};

export default Home;
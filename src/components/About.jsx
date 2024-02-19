import React from 'react';
import '../assets/css/Home.css';

import aboutImage from '../assets/images/lab-brain1.png';
import SeparatorWide from './SeparatorWide.jsx';

const About = () => {
    return (
        <div id='about' className='containerMinHeight'>

            <SeparatorWide rotation={-5} />

            {/* add titleBackground? negative z index... */}
            <h2 className='title'>About Us</h2> 

            {/* make it 2 column one with the text and another with a pic... */}

            <div className='about-content'>
                <div>
                    <p>Our mission is to delve into the intricate interplay between insulin and dopamine signaling pathways, elucidating their dynamic relationship and its implications for physiological and psychological health. Through rigorous research and comprehensive analysis, we aim to contribute to a deeper understanding of this complex interaction.</p>
                    
                    <p>Our focus lies squarely on exploring the multifaceted relationship between insulin and dopamine signaling. From understanding how insulin resistance impacts dopamine levels to unraveling the neural circuits involved in their interaction, our aim is to provide valuable insights into this intriguing field of study.</p>

                    <p>With a commitment to excellence, we adopt a multidisciplinary approach, drawing upon insights from neuroscience, endocrinology, and psychology. By synthesizing findings from diverse disciplines, we strive to offer a comprehensive perspective on the intricate interplay between insulin and dopamine signaling pathways.</p>
                
                    <p>Furthermore, our research endeavors culminate in the creation of a comprehensive review paper synthesizing the latest findings and insights in the field. As we meticulously analyze and integrate data from various primary sources, our review will provide a consolidated overview of the current understanding of the interaction between insulin and dopamine signaling pathways. By synthesizing and critically evaluating existing literature, our review aims to offer a valuable resource for researchers, clinicians, and stakeholders interested in this burgeoning area of study. Through our review paper, we aspire to contribute to the advancement of knowledge and the development of novel avenues for research and intervention in the realms of both physiological and psychological health.</p>

                </div>

                {/* <img src={aboutImage} className='aboutImage' alt="About Us Img: Virtual Brain" /> */}

            </div>

            
        </div>
    );
};

export default About;

import React from 'react';
import About from '../About/About';
import Skill from '../Skill/Skill';
import Project from '../Project/Project';
import Hero from '../Hero/Hero';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <section>
                <div className=''>
                    <Hero/>
                </div>
            </section>
            <div>

                <About></About>
            </div>
            <div>
                <Skill></Skill>
            </div>
            <div>
                <Project></Project>
            </div>
            <div>
                <Contact/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
};

export default Home;
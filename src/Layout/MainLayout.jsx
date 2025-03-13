import React from 'react';
import Navbar from '../components/Nav/Navbar';
import './MainLayout.css'
import { Outlet } from 'react-router-dom';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Skill from '../components/Skill/Skill';
import Project from '../components/Project/Project';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

const MainLayout = () => {
    return (
        <div className=''>
            <header>
                <nav>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main>
                <section>
                    <div>
                        <Hero />
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
                    <Contact />
                </div>
                <div>
                    <Footer />
                </div>
            </main>
        </div>
    );
};

export default MainLayout;
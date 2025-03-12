import React from 'react';
import heroImg from "../../assets/hero3.jpg"

const Hero = () => {
    return (
        <div className='bg-blue-950 border text-white text-center py-16'>
            <img src={heroImg} alt=""
                className='mx-auto rounded-full mb-8 w-48 h-48 object-cover transform transition-transform duration-300 hover:scale-105'
            />
            <h1 className='text-3xl md:text-4xl font-bold'>
                I'm {" "}
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 font-semibold to-blue-500'>Sujoy Dam
                </span>
                , Front-End Developer
            </h1>
            <p className='mt-4 text-lg text-gray-300'>
                I specialize in building modern and responsive web application UI
            </p>
            <div className='mt-8 space-x-4'>
                <a href="#contact">
                    <button hre className="btn bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">Contact With Me</button>
                </a>
                <button className="btn bg-gradient-to-r from-pink-500 to-yellow-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">Resume</button>
            </div>
        </div>
    );
};

export default Hero;
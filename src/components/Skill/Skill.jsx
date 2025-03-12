import React from 'react';
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { FaJsSquare } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
// import { RiFirebaseFill } from "react-icons/ri";
import { RiFirebaseFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";

const Skill = () => {
    return (
        <div className='bg-blue-950 border text-white py-20' id="skill">
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>My Skills</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8'>
                    <div className='flex flex-col space-y-4 justify-center rounded-lg items-center p-10 hover:scale-105 hover:shadow-xl outline-2 outline hover:outline-teal-500  hover:shadow-teal-500 mix-blend-multipl bg-gray-800 
                    text-white transform transition-transform duration-300'>
                        {/* html  */}
                        <SiHtml5 className='text-7xl' />
                        <h1 className='text-2xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>html5</h1>
                    </div>
                    <div className='flex flex-col space-y-4 justify-center rounded-lg items-center p-10 hover:scale-105 hover:shadow-xl outline-2 outline hover:outline-teal-500  hover:shadow-teal-500 mix-blend-multipl bg-gray-800 
                    text-white transform transition-transform duration-300'>
                        {/* Css  */}
                        <SiCss3 className='text-7xl'/>
                        <h1 className='text-2xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>css3</h1>
                    </div>
                    <div className='flex flex-col space-y-4 justify-center rounded-lg items-center p-10 hover:scale-105 hover:shadow-xl outline-2 outline hover:outline-teal-500  hover:shadow-teal-500 mix-blend-multipl bg-gray-800 
                    text-white transform transition-transform duration-300'>
                        {/*railwind Css  */}
                        <RiTailwindCssFill className='text-7xl'/>
                        <h1 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>TailwindCSS</h1>
                    </div>
                    <div className='flex flex-col space-y-4 justify-center rounded-lg items-center p-10 hover:scale-105 hover:shadow-xl outline-2 outline hover:outline-teal-500  hover:shadow-teal-500 mix-blend-multipl bg-gray-800 
                    text-white transform transition-transform duration-300'>
                        {/* javaScript  */}
                        <FaJsSquare className='text-7xl'/>
                        <h1 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>JavaScript</h1>
                    </div>
                    <div className='flex flex-col space-y-4 justify-center rounded-lg items-center p-10 hover:scale-105 hover:shadow-xl outline-2 outline hover:outline-teal-500  hover:shadow-teal-500 mix-blend-multipl bg-gray-800 
                    text-white transform transition-transform duration-300'>
                        {/* React Js  */}
                        <FaReact className='text-7xl'/>
                        <h1 className='text-2xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>React.js</h1>
                    </div>
                    <div className='flex flex-col space-y-4 justify-center rounded-lg items-center p-10 hover:scale-105 hover:shadow-xl outline-2 outline hover:outline-teal-500  hover:shadow-teal-500 mix-blend-multipl bg-gray-800 
                    text-white transform transition-transform duration-300'>
                        {/* Node Js  */}
                        <DiNodejs className='text-7xl'/>
                        <h1 className='text-2xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Node.js</h1>
                    </div>
                    <div className='flex flex-col space-y-4 justify-center rounded-lg items-center p-10 hover:scale-105 hover:shadow-xl outline-2 outline hover:outline-teal-500  hover:shadow-teal-500 mix-blend-multipl bg-gray-800 
                    text-white transform transition-transform duration-300'>
                        {/* Express Js  */}
                        <SiExpress className='text-7xl'/>
                        <h1 className='text-2xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Expess.js</h1>
                    </div>
                    <div className='flex flex-col space-y-4 justify-center rounded-lg items-center p-10 hover:scale-105 hover:shadow-xl outline-2 outline hover:outline-teal-500  hover:shadow-teal-500 mix-blend-multipl bg-gray-800 
                    text-white transform transition-transform duration-300'>
                        {/* MongoDB  */}
                        <DiMongodb className='text-7xl'/>
                        <h1 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>MongoDB</h1>
                    </div>
                    <div className='flex flex-col space-y-4 justify-center rounded-lg items-center p-10 hover:scale-105 hover:shadow-xl outline-2 outline hover:outline-teal-500  hover:shadow-teal-500 mix-blend-multipl bg-gray-800 
                    text-white transform transition-transform duration-300'>
                        {/* Firebase  */}
                        <RiFirebaseFill className='text-7xl'/>
                        <h1 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Firebase</h1>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Skill;
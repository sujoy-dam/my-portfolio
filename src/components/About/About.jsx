import React from 'react';
import aboutImg from '../../assets/hero3.jpg'
import { MdDriveFileRenameOutline } from "react-icons/md";
import { MdEmail } from "react-icons/md";

const About = () => {
    return (
        <div className='bg-blue-950 text-white py-20' id='about'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>About Me</h2>
                <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                    <img src={aboutImg} alt="" className='w-72 h-50 rounded-full object-cover mb-8 md:mb-0' />
                    <div className=''>
                        <p className='text-lg mb-8 text-justify'>
                            "Hi, I’m Sujoy Dam, a passionate Front-End Developer with experience in building responsive and user-friendly web applications. I specialize in HTML, CSS, JavaScript, and React.js. Currently, I am actively seeking an internship or a junior front-end developer role where I can apply my skills, learn from experienced developers, and contribute to real-world projects. I am highly motivated, eager to learn, and always excited to work on new challenges in web development."
                        </p>
                        <div className='space-y-2 text-left'>
                            <div className='flex items-center gap-2'>
                                <MdDriveFileRenameOutline className='text-xl font-bold' />
                                <h1 className=''>
                                    <span className='text-lg font-medium'>
                                        Name :
                                    </span>
                                    <span>
                                        Sujoy Dam
                                    </span>
                                </h1>
                            </div>
                            <div className='flex items-center gap-2'>
                                <MdEmail className='text-xl font-bold'/>
                                <h1 className=''>
                                    <span className='text-lg font-medium'>
                                        Email :
                                    </span>
                                    <span>
                                        sujooy01@gmail.com
                                    </span>
                                </h1>
                            </div>
                            {/* <div className='text-left'>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
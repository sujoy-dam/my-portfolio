import React from 'react';
import { BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

const Contact = () => {
    return (
        <div className='bg-blue-950 border text-white py-20' id="contact">
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>Contact Me</h2>
                <div className='flex gap-20 flex-col lg:flex-row'>
                    <div className='w-full lg:w-1/2'>

                        <div className='space-y-4 mb-10'>
                            <div className='flex items-center gap-2 shadow-md shadow-black rounded-lg p-5 transform transition-transform duration-300 hover:scale-105'>
                                {/* whatsapp  */}
                                <div className='border rounded-full p-3'>
                                    <BsWhatsapp className='text-xl  text-green-500 ' />
                                </div>
                                <p className='text-lg'>01736812348</p>
                            </div>
                            <div className='flex items-center gap-2 p-5 shadow-md shadow-black transform transition-transform duration-300 hover:scale-105'>
                                {/* Email  */}
                                <div className='border rounded-full p-3'>
                                    <MdEmail className='text-xl text-green-500' />
                                </div>
                                <p className='text-lg'>sujooy01@gmail.com</p>
                            </div>
                            <div className='flex items-center gap-2 p-5 shadow-md shadow-black transform transition-transform duration-300 hover:scale-105'>
                                {/* Mobile */}
                                <div className='border rounded-full p-3'>
                                    <IoCallSharp className='text-xl text-green-500' />
                                </div>
                                <p className='text-lg'>01736812348</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center'>
                            <div className='flex space-x-8'>
                                <a href='#' target='_blank' className='border rounded-full p-3 hover:scale-105 hover:shadow-lg hover:outline-teal-500  hover:shadow-teal-500'>
                                    <FaLinkedin className='text-3xl text-green-500' />
                                </a>
                                <a href='https://github.com/sujoy-dam' target='_blank' className='border rounded-full p-3 hover:scale-105 hover:shadow-lg hover:outline-teal-500 hover:shadow-teal-500'>
                                    <FaGithub className='text-3xl text-green-500' />
                                </a>
                                <a href='https://www.facebook.com/su.joy.3154' target='_blank' className='border rounded-full p-3 hover:scale-105 hover:shadow-lg hover:outline-teal-500 hover:shadow-teal-500'>
                                    <FaFacebook className='text-3xl text-green-500' />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='w-full lg:w-1/2 backdrop-blur-md'>
                        <form>
                            <div className='space-y-4'>
                                <input type="text" placeholder='Write your name' className='w-full p-2 border bg-transparent' required/>
                                <input type="email" placeholder='Write your email' className='w-full p-2 border bg-transparent' required/>
                                <textarea cols="20" rows="8" className='w-full bg-transparent border p-2' placeholder='Write your message' required></textarea>
                                {/* <button className='border-2'>Send Message</button> */}
                                <input type="submit" value="Send Message" className='border w-full p-2 btn bg-transparent text-white'/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
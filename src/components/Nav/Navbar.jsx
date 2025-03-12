import React from 'react';
import { Link, NavLink } from 'react-router-dom';
// import "./Navbar.css"


const Navbar = () => {

    return (
        <div className='bg-blue-950 border px-5 py-2'>

            <div className="navbar container mx-auto text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a href='#home' className="hover:text-gray-400">Home</a></li>
                            <li><a href='#about' className="hover:text-gray-400">About Me</a></li>
                            <li><a href='#skill' className="hover:text-gray-400">Skill</a></li>
                            <li><a href='#projects' className="hover:text-gray-400">Projects</a></li>
                            <li><a href='#contact' className="hover:text-gray-400">Contact</a></li>
                        </ul>
                    </div>
                    <p className="text-xl font-bold uppercase">Sujoy</p>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a href='#home' className="hover:text-gray-400">Home</a></li>
                        <li><a href='#about' className="hover:text-gray-400">About Me</a></li>
                        <li><a href='#skill' className="hover:text-gray-400">Skill</a></li>
                        <li><a href='#projects' className="hover:text-gray-400">Projects</a></li>
                        <li><a href='#contact' className="hover:text-gray-400">Contact</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">Resume</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
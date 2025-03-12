import React from 'react';
import Navbar from '../components/Nav/Navbar';
import './MainLayout.css'
import { Outlet } from 'react-router-dom';

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
                    <Outlet></Outlet>
                </section>
            </main>
        </div>
    );
};

export default MainLayout;
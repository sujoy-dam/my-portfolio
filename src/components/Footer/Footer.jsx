import React from 'react';

const Footer = () => {
    return (
        <footer className="footer bg-blue-950 text-white flex justify-center py-10 items-center p-4">
            <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </footer>
    );
};

export default Footer;
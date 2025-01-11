import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            {/* Navbar */}
            <div className="navbar">
                <div className="logo">MWarren93</div>
                <div className="hamburger" onClick={toggleMenu}> ☰ </div>
            </div>
            <div className={`fullscreen-menu ${menuOpen ? 'open' : ''}`}>
                <div className="menu-links">
                    <Link to="/" onClick={toggleMenu} className={({ isActive }) => (isActive ? 'active' : '')}> Home</Link>
                    <Link to="/about" onClick={toggleMenu} className={({ isActive }) => (isActive ? 'active' : '')}> About Me</Link>
                    <Link to="/resume" onClick={toggleMenu} className={({ isActive }) => (isActive ? 'active' : '')}>Resume</Link>
                    <Link to="/portfolio" onClick={toggleMenu} className={({ isActive }) => (isActive ? 'active' : '')}> Portfolio</Link>
                </div>


                {/* Social Media Links */}
                <div class="social-links">

                    <a href="https:www.linkedin.com/in/mark-warren93" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" class="social-icon" />
                    </a>


                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" class="social-icon" />
                    </a>
                </div>
            </div>
        </>
    );
};

export default Navbar;

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
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
                    <NavLink to="/" end onClick={toggleMenu} className={({ isActive }) => (isActive ? 'active' : '')}> Home</NavLink>
                    <NavLink to="/about" onClick={toggleMenu} className={({ isActive }) => (isActive ? 'active' : '')}> About Me</NavLink>
                    <NavLink to="/resume" onClick={toggleMenu} className={({ isActive }) => (isActive ? 'active' : '')}>Resume</NavLink>
                    <NavLink to="/portfolio" onClick={toggleMenu} className={({ isActive }) => (isActive ? 'active' : '')}> Portfolio</NavLink>
                </div>


                {/* Social Media Links */}
                <div className="social-links">

                    <a href="https://www.linkedin.com/in/mark-warren93" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="social-icon" />
                    </a>


                    <a href="https://github.com/Warren-93" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="social-icon" />
                    </a>
                </div>
            </div>
        </>
    );
};

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedText from '../components/AnimatedText/AnimatedTex';
import './css/Home.css'

const Home = () => {
    return (
        <div className="home-container">
            <AnimatedText />
            <div className="home-buttons">
                <Link to="/portfolio" className="btn btn-primary">Portfolio</Link>
                <Link to="/about" className="btn btn-secondary">About Me</Link>
                <Link to="/resume" className="btn btn-outline-light">Resume</Link>
            </div>
        </div>
    );
};

export default Home;

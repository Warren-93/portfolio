import React from 'react';
import AnimatedText from '../components/AnimatedText/AnimatedTex';
import './css/Home.css'

const Home = () => {
    return (
        <div className="home-container">
            <AnimatedText />
            <div className="home-buttons">
                <a href="/portfolio" className="btn btn-primary">Portfolio</a>
                <a href="/about" className="btn btn-secondary">About Me</a>
                <a href="/resume" className="btn btn-outline-light">Resume</a>
            </div>
        </div>
    );
};

export default Home;

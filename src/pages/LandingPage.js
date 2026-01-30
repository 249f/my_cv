import React from 'react';
import './LandingPage.css';
import Navbar from '../components/Navbar/Navbar';

const LandingPage = () => {
    return (

        <div className="landing-page">
            <Navbar />
            {/*hero section*/}
            <div className="hero">
                <h1>Welcome to My Portfolio</h1>
                <p>A collection of my work and experiences</p>
            </div>
            {/*/about section*/}
            <div className='about'>
                <p>
                    hello im ali
                </p>
            </div>

        </div>

    );


};
export default LandingPage;
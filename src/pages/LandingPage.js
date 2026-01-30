import React from 'react';
import './LandingPage.css';
import Navbar from '../components/Navbar/Navbar';
import MyPicture from '../assets/images/myPicture.jpg';

const LandingPage = () => {
    return (

        <div className="landing-page">
            <Navbar />
            {/*hero section*/}
            <div className="hero">

                <img src={MyPicture} alt="ali" />
                <div className="hero-text">
                    <h1>ALi Abdellatif</h1>
                    <p>Software Engineering Student with a real world hands-on experience</p>

                    <div className='buttons-holder'>
                        <div className="hero-buttons">
                            <button>See Projects</button>
                            <button>More Info</button>
                        </div>
                    </div>



                </div>



            </div>
            {/*/about section*/}
            <div className='about'>
                <p>
                    hello im ali
                </p>
            </div>

        </div >

    );


};
export default LandingPage;
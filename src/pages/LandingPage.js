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
            {/*Projects section*/}
            <div className='projects'>
                <div className='projects-title'>
                    <h1> Hands-on Experience </h1>
                    <p> learned many things from publishing my projects to prudoction </p>
                </div>

                {/* projects cards */}
                <div className='project-cards-holder'>

                    <a href='https://amanak-sd.com'>
                        <h1> ERB System </h1>
                        <p>
                            built a fully functional warehouses management System from A to Z using React.js as the front-end and Appwrite Cloud platform as the back-end, the main foucas was on the performance and the user experience, as long it's hard to build a stable System working in such unstable internet connection as we have in sudan, so optimized queries and Smart caching is what i focused on, ensuring a secure scalable System

                        </p>

                    </a>

                </div>







            </div>

        </div >

    );


};
export default LandingPage;
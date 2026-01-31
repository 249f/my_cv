import React from 'react';
import './LandingPage.css';
import Navbar from '../components/Navbar/Navbar';
import MyPicture from '../assets/images/myPicture.jpg';
import { CursorIcon, Building } from '@phosphor-icons/react';


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
                    <p> learned many things from publishing my projects to production </p>
                </div>

                {/* projects cards */}
                <div className='project-cards-holder'>

                    <a href='https://amanak-sd.com' className='amanak-card'>
                        <div className='icon-holder'>
                            <Building size={50} />
                        </div>

                        <h1> ERP System </h1>
                        <p>
                            built a fully functional warehouses management System from A to Z using React.js as the front-end and Appwrite Cloud platform as the back-end, the main foucas was on the performance and the user experience, as long it's hard to build a stable System working in such unstable internet connection as we have in sudan, so optimized queries and Smart caching is what i focused on, ensuring a secure scalable System.

                        </p>

                    </a>

                    <a href='https://design-by-drop.vercel.app' className='dbd-card'>
                        <div className='icon-holder'>
                            <CursorIcon size={50} />
                        </div>
                        <h1> Design By Drop </h1>
                        <p>
                            built a free open source tool to help HTML CSS beginners to create simple designs without writing code, simple yet effective tool uses shapes and other HTML elements to create designs, allowing users to change colors, sizes, positions, and other properties of the elements, and export the code to use in their projects, with the ability to download a ready to use HTML file with all the styles and structure.
                        </p>

                    </a>

                    <a href='https://google.com' className='d3-card'>
                        <h1> Coming Soon </h1>
                        <p>

                        </p>

                    </a>

                    <a href='https://google.com' className='d4-card'>
                        <h1> Coming Soon </h1>
                        <p>

                        </p>

                    </a>

                </div>







            </div>

        </div >

    );


};
export default LandingPage;
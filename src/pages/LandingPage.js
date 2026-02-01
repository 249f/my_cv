import React from 'react';
import './LandingPage.css';
import Navbar from '../components/Navbar/Navbar';
import MyPicture from '../assets/images/myPicture.jpg';
import { CursorIcon, Building } from '@phosphor-icons/react';

const skills = ["HTML", "CSS", "JS", "React", "Node", "Python", "Java", "SQL", "Git", "GitHub"];


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
                    <p> learned many things from publishing projects to production </p>
                </div>

                {/* projects cards */}
                <div className='project-cards-holder'>

                    <a href='https://amanak-sd.com' className='amanak-card'>
                        <div className='icon-holder'>
                            <Building size={50} />
                        </div>

                        <h1> Warehouse Management Ecosystem </h1>
                        <p>
                            Developed an end-to-end Warehouse Management and Sales Ecosystem designed for reliability in regions with unstable network infrastructure. The system was architected to handle complex inventory movements while maintaining 100% data integrity during connection drops.
                        </p>
                        <p>
                            <ul>
                                <li> <strong> Role-Based Access Control : </strong> multi-tiered authorization system defining specific permissions for Admins, Warehouse Managers, and Sales Staff. to ensure data security and operational accountability.</li>
                                <li> <strong> Reliability : </strong> Implemented Atomic Transactions to prevent partial data entries or ghost stock issues, ensures that if a connection fails mid transaction the data remains consistent.</li>
                                <li> <strong> Optimized Performance : </strong> Utilized smart caching and lightweight query structures to minimize bandwidth consumption, delivering smooth user experience even on unstable networks.</li>
                                <li> <strong> Bulk Operations : </strong> Developed a specialized sales module capable of processing large scale updates, such as Global Percentage based Price Adjustments, efficiently and reliably.</li>
                            </ul>
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
                        <h1> Under Development </h1>
                        <p>

                        </p>

                    </a>

                    <a href='https://google.com' className='d4-card'>
                        <h1> Under Development </h1>
                        <p>

                        </p>

                    </a>

                </div>







            </div>


            {/* skills section */}
            <div className='skills'>
                <div className='skills-title'>
                    <h1>Skills</h1>
                    <p></p>
                </div>


                <div className='skills-content'>

                    <div className="skills-marquee-container">
                        <div className="skills-marquee-track">

                            {/* Group 1 */}
                            <div className="skills-text-holder">
                                {skills.map((skill, index) => (
                                    <h1 key={`g1-${index}`} className="skill-text">{skill}</h1>
                                ))}
                            </div>

                            {/* Group 2 (The Loop Closer) */}
                            <div className="skills-text-holder">
                                {skills.map((skill, index) => (
                                    <h1 key={`g2-${index}`} className="skill-text">{skill}</h1>
                                ))}
                            </div>

                        </div>
                    </div>


                </div>
            </div>




        </div >

    );


};
export default LandingPage;
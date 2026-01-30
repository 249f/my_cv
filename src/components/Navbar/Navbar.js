import React from 'react';
import './Navbar.css';
import MyLogo from '../../assets/images/MyLogo.png'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className='logo-holder'>
                <img src={MyLogo} alt="logo" />
            </div>

        </div>
    );
};

export default Navbar;
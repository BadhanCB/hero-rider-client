import React from 'react';
import logo from "../../../assets/logo/car-sharing.png"
import IconButton from '../IconButton/IconButton';
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi";
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div>
                <img src={logo} alt="Brand Logo" />
                <h3>Hero Rider</h3>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et illo a nobis quas libero optio officia id sit. Officia, ullam.</p>
            <div className='socal-icon-container'>
                <IconButton color='white' border='gray'><FiFacebook /></IconButton>
                <IconButton color='white' border='gray'><FiTwitter /></IconButton>
                <IconButton color='white' border='gray'><FiInstagram /></IconButton>
                <IconButton color='white' border='gray'><FiYoutube /></IconButton>
            </div>
            <p>© {new Date().getFullYear()} ALL RIGHTS RESERVED.</p>
        </footer>
    );
};

export default Footer;
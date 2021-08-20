import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="copyRight">
            <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
        </div>
    );
};

export default Footer;
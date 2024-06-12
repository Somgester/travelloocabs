import React from 'react';

const Footer = () => {
    return (
        <footer style={{backgroundColor: '#f8f9fa', padding: '10px', textAlign: 'center'}}>
            <p>Copyright © {new Date().getFullYear()} Travello Cabs</p>
        </footer>
    );
}

export default Footer;
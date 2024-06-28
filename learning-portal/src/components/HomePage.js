import React from 'react';
import { Link } from 'react-router-dom';
import frontendImage from '../assets/frontend.png';

function HomePage() {
    return (
        <div style={containerStyle}>
            <div style={columnStyle}>
                <h1 style={headingStyle}>Welcome to the Learning Portal</h1>
                <img src={frontendImage} alt="Frontend" style={imageStyle} />
            </div>

            <div style={columnStyle}>
                <div style={sectionStyle}>
                    <h2 style={headingStyle}>Frontend Technologies</h2>
                    <p style={paraStyle}>Explore various frontend technologies used to build interactive user interfaces.</p>
                    <Link to="/frontend">
                        <button style={buttonStyle}>Explore Frontend</button>
                    </Link>
                </div>

                <div style={sectionStyle}>
                    <h2 style={headingStyle}>Backend Technologies</h2>
                    <p style={paraStyle}>Discover backend technologies that power the server-side of web applications.</p>
                    <Link to="/backend">
                        <button style={buttonStyle}>Explore Backend</button>
                    </Link>
                </div>

                <div style={sectionStyle}>
                    <h2 style={headingStyle}>Database Technologies</h2>
                    <p style={paraStyle}>Learn about database technologies used to store and manage data in applications.</p>
                    <Link to="/database">
                        <button style={buttonStyle}>Explore Databases</button>
                    </Link>
                </div>

                <div style={sectionStyle}>
                    <h2 style={headingStyle}>MERN Fullstack Technologies</h2>
                    <p style={paraStyle}>Learn about MERN Fullstack technologies used to store and manage data in applications.</p>
                    <Link to="/mernFullstack">
                        <button style={buttonStyle}>Explore MERN Fullstack</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '2000px',
    margin: '10px auto',
    padding: '90px',
    backgroundColor: '#f4f4f4',
    borderRadius: '10px',
    border: '2px solid black'
};

const columnStyle = {
    flex: '1',
    padding: '20px',
};

const headingStyle = {
    fontSize: '1.5rem',
    color: 'blue',
    marginBottom: '20px',
    marginTop: '20px',
};

const paraStyle = {
    color: 'black',
};

const imageStyle = {
    width: '90%',
    marginBottom: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const buttonStyle = {
    color: '#fff',
    background: 'linear-gradient(to right, #ff7e5f, #feb47b)',
    border: 'none',
    padding: '12px 24px',
    cursor: 'pointer',
    borderRadius: '5px',
};

const sectionStyle = {
    marginBottom: '20px',
};

export default HomePage;

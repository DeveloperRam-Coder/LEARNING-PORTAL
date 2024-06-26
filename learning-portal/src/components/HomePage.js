import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>Welcome to the Learning Portal</h1>

            <div style={sectionStyle}>
                <h2>Frontend Technologies</h2>
                <p>Explore various frontend technologies used to build interactive user interfaces.</p>
                <Link to="/frontend">
                    <button style={buttonStyle}>Explore Frontend</button>
                </Link>
            </div>

            <div style={sectionStyle}>
                <h2>Backend Technologies</h2>
                <p>Discover backend technologies that power the server-side of web applications.</p>
                <Link to="/backend">
                    <button style={buttonStyle}>Explore Backend</button>
                </Link>
            </div>

            <div style={sectionStyle}>
                <h2>Database Technologies</h2>
                <p>Learn about database technologies used to store and manage data in applications.</p>
                <Link to="/database">
                    <button style={buttonStyle}>Explore Databases</button>
                </Link>
            </div>
        </div>
    );
}

const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
};

const headingStyle = {
    textAlign: 'center',
    fontSize: '2.5rem',
    marginBottom: '30px',
};

const sectionStyle = {
    textAlign: 'center',
    marginBottom: '40px',
};

const buttonStyle = {
    color: 'white',
    background: 'linear-gradient(to right, #4CAF50, #2E8B57)',
    border: 'none',
    padding: '12px 24px',
    margin: '10px',
    cursor: 'pointer',
    borderRadius: '5px',
    outline: 'none',
    transition: 'background 0.3s ease',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    width: '200px',
    fontSize: '1rem',
    ':hover': {
        background: 'linear-gradient(to right, #2E8B57, #4CAF50)',
    },
};

export default HomePage;

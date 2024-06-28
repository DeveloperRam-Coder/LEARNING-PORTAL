import React, { useState } from 'react';

function Database() {
    const [selectedTech, setSelectedTech] = useState(null);

    const technologies = [
        { name: 'MongoDB', color: '#FF6347', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg' },
        { name: 'MySQL', color: '#20B2AA', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-plain-wordmark.svg' },
        { name: 'PostgreSQL', color: '#1E90FF', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain-wordmark.svg' },
        { name: 'SQLite', color: '#00CED1', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original-wordmark.svg' },
        { name: 'Redis', color: '#FF1493', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-plain-wordmark.svg' },
        { name: 'Firebase', color: '#9400D3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg' },
    ];

    const handleButtonClick = (tech) => {
        setSelectedTech(tech);
    };

    return (
        <div style={containerStyle}>
            <div style={headerStyle}>
                <div style={titleStyle}>Database Technologies</div>
                <p style={descriptionStyle}>Explore various frontend technologies used in modern web development.</p>

            </div>
            <div style={contentContainerStyle}>
                <div style={buttonContainerStyle}>
                    {technologies.map((tech) => (
                        <button
                            key={tech.name}
                            style={{ ...buttonStyle, backgroundColor: tech.color }}
                            onClick={() => handleButtonClick(tech.name)}
                        >
                            <img src={tech.icon} alt={tech.name} style={iconStyle} />
                            {tech.name}
                        </button>
                    ))}
                </div>
                <div style={contentSectionStyle}>
                    {selectedTech ? (
                        <div>
                            <h2>{selectedTech}</h2>
                            <p>Details about {selectedTech}...</p>
                        </div>
                    ) : (
                        <p>Select a technology to see the details.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

const containerStyle = {
    padding: '20px',
};

const headerStyle = {
    marginBottom: '20px',
};

const titleStyle = {
    fontSize: '2rem',
    marginBottom: '10px',
};

const contentContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
};

const buttonContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: '#f0f0f0',
    padding: '20px',
    marginRight: '20px',
};

const buttonStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    boxShadow: '0 0 20px rgba(255, 255, 255, 0.7)',
    color: 'white',
    border: '2px solid white',
    padding: '10px 20px',
    cursor: 'pointer',
    borderRadius: '5px',
    outline: 'none',
    transition: 'background 0.3s ease, border 0.3s ease, transform 0.2s ease',
    marginBottom: '10px',
    width: '200px',
    height: '50px',
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
};

const iconStyle = {
    marginRight: '10px',
    width: '30px',
    height: '30px'
};

const descriptionStyle = {
    fontSize: '1rem',
    color: 'gray',
};
const contentSectionStyle = {
    flex: 1,
    backgroundColor: '#e0e0e0',
    padding: '20px',
    borderRadius: '5px',
};

export default Database;

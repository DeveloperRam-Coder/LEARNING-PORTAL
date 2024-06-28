import React, { useState } from 'react';

function Backend() {
    const [selectedTech, setSelectedTech] = useState(null);

    const technologies = [
        { name: 'Node.js', color: 'blue', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg' },
        { name: 'Express', color: 'green', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg' },
        { name: 'Python', color: 'red', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
        { name: 'Django', color: 'purple', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg' },
        { name: 'Ruby on Rails', color: 'orange', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-original-wordmark.svg' },
        { name: 'Java', color: 'teal', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
        { name: 'Spring', color: 'cyan', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg' },
        { name: 'ASP.NET', color: 'magenta', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original-wordmark.svg' },
        { name: 'PHP', color: 'gold', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
        { name: 'Laravel', color: 'darkgreen', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg' },
        { name: 'Flask', color: 'indigo', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg' },
        { name: 'Go', color: 'pink', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg' },
        { name: 'Kotlin', color: 'lightgreen', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original-wordmark.svg' },
    ];

    const handleButtonClick = (tech) => {
        setSelectedTech(tech);
    };

    return (
        <div style={containerStyle}>
            <div style={headerStyle}>
                <div style={titleStyle}>Backend Technologies</div>
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

const descriptionStyle = {
    fontSize: '1rem',
    color: 'gray',
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
    // background: 'linear-gradient(to right, #00c6ff, #0072ff)',
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

const contentSectionStyle = {
    flex: 1,
    backgroundColor: '#e0e0e0',
    padding: '20px',
    borderRadius: '5px',
};

export default Backend;

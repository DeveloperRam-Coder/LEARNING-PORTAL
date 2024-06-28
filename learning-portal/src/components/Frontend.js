import React, { useState } from 'react';

function Frontend() {
    const [selectedTech, setSelectedTech] = useState(null);

    const technologies = [
        { name: 'HTML', color: 'blue', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
        { name: 'CSS', color: 'green', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
        { name: 'JavaScript', color: 'red', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
        { name: 'TypeScript', color: 'brown', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
        { name: 'React', color: 'purple', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
        { name: 'Angular', color: 'orange', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg' },
        { name: 'Vue.js', color: 'teal', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg' },
        { name: 'Sass', color: 'cyan', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg' },
        { name: 'Bootstrap', color: 'magenta', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg' },
        { name: 'jQuery', color: 'gold', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg' },
        { name: 'Tailwind CSS', color: 'pink', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
        { name: 'Next.js', color: 'lightblue', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
        { name: 'Redux', color: 'darkorange', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg' },
    ];

    const handleButtonClick = (tech) => {
        setSelectedTech(tech);
    };

    return (
        <div style={containerStyle}>
            <div style={headerStyle}>
                <div style={titleStyle}>Frontend Technologies</div>
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

const descriptionStyle = {
    fontSize: '1rem',
    color: 'gray',
};

const contentContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
};

const buttonContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: '#f0f0f0', // Add background color for checking
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
    width: '200px', // Set a fixed width
    height: '50px', // Set a fixed height
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
};

const iconStyle = {
    marginRight: '10px',
    width: '30px',  // Set the desired width
    height: '30px'  // Set the desired height
};

const contentSectionStyle = {
    flex: 1,
    backgroundColor: '#e0e0e0', // Background color for content section
    padding: '20px',
    borderRadius: '5px',
};

export default Frontend;

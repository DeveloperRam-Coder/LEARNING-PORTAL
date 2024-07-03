import React, { useState } from 'react';

const FrontendInterviewPage = () => {
    const [selectedTech, setSelectedTech] = useState(null);

    const technologies = [
        { name: 'HTML', color: 'blue', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg', questions: [
            { question: 'What is the purpose of the `alt` attribute in images?', answer: 'The `alt` attribute provides alternative text for an image if it cannot be displayed.' },
            { question: 'Explain the difference between `<div>` and `<span>`.', answer: '`<div>` is a block-level element, while `<span>` is an inline element in HTML.' },
            // Add more HTML questions
        ] },
        { name: 'CSS', color: 'green', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg', questions: [
            { question: 'Describe the `box-sizing` property in CSS.', answer: 'The `box-sizing` property defines how the total width and height of an element are calculated.' },
            { question: 'Explain the difference between `margin` and `padding`.', answer: '`margin` is the space outside the border of an element, while `padding` is the space inside the border.' },
            // Add more CSS questions
        ] },
        { name: 'JavaScript', color: 'red', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', questions: [
            { question: 'What are closures in JavaScript?', answer: 'Closures are functions that have access to variables from their outer scope even after the scope has closed.' },
            { question: 'Explain the concept of prototypal inheritance.', answer: 'Prototypal inheritance in JavaScript allows objects to inherit properties and methods from another object.' },
            // Add more JavaScript questions
        ] },
        // Add more technologies with their respective questions
    ];

    const handleButtonClick = (techName) => {
        setSelectedTech(techName);
    };

    return (
        <div style={containerStyle}>
            <div style={headerStyle}>
                <div style={titleStyle}>Frontend Interview Questions</div>
                <p style={descriptionStyle}>Explore interview questions for various frontend technologies.</p>
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
                    {selectedTech && (
                        <div>
                            <h2>{selectedTech} Interview Questions</h2>
                            {technologies.find(tech => tech.name === selectedTech)?.questions.map((question, index) => (
                                <div key={index} style={questionStyle}>
                                    <h3>{question.question}</h3>
                                    <p>{question.answer}</p>
                                </div>
                            ))}
                        </div>
                    )}
                    {!selectedTech && (
                        <p>Select a technology to see interview questions.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

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

const questionStyle = {
    marginBottom: '20px',
};

export default FrontendInterviewPage;

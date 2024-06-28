import React, { useState } from 'react';

const MernFullstack = () => {
  const [selectedTech, setSelectedTech] = useState(null);

  const technologies = [
    { name: 'HTML', color: 'blue', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg', description: 'HTML is the standard markup language for creating web pages.' },
    { name: 'CSS', color: 'green', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg', description: 'CSS is a style sheet language used for describing the presentation of a document written in HTML.' },
    { name: 'JavaScript', color: 'red', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', description: 'JavaScript is a programming language that conforms to the ECMAScript specification.' },
    { name: 'React', color: 'purple', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', description: 'React is a JavaScript library for building user interfaces.' },
    { name: 'Redux', color: 'yellow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg', description: 'Redux is a predictable state container for JavaScript apps, often used with React for state management.' },
    { name: 'Sass', color: 'cyan', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg', description: 'Sass is a preprocessor scripting language that is interpreted or compiled into CSS.' },
    { name: 'Bootstrap', color: 'magenta', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg', description: 'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.' },
    { name: 'Node.js', color: 'blue', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg', description: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine.' },
    { name: 'Express', color: 'green', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg', description: 'Express is a minimal and flexible Node.js web application framework.' },
    { name: 'MongoDB', color: 'darkgreen', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg', description: 'MongoDB is a source-available cross-platform document-oriented database program.' },
    { name: 'Mongoose', color: 'brown', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg', description: 'Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js.' },
    { name: 'Webpack', color: 'orange', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webpack/webpack-original.svg', description: 'Webpack is a static module bundler for modern JavaScript applications.' },
    { name: 'Babel', color: 'yellow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/babel/babel-original.svg', description: 'Babel is a JavaScript compiler that converts ECMAScript 2015+ code into a backwards compatible version of JavaScript.' },
    { name: 'Jest', color: 'pink', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg', description: 'Jest is a delightful JavaScript testing framework with a focus on simplicity.' },
    { name: 'Mocha', color: 'brown', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mocha/mocha-plain.svg', description: 'Mocha is a JavaScript test framework running on Node.js, making asynchronous testing simple.' },
    { name: 'Nginx', color: 'darkblue', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg', description: 'Nginx is a high-performance HTTP server and reverse proxy, as well as an IMAP/POP3 proxy server.' },
    { name: 'Docker', color: 'lightblue', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg', description: 'Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.' },
    { name: 'Git', color: 'orange', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg', description: 'Git is a distributed version control system designed to handle everything from small to very large projects with speed and efficiency.' },
    { name: 'GitHub', color: 'black', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg', description: 'GitHub is a platform for version control and collaboration. It lets you and others work together on projects from anywhere.' }
  ];

  const handleButtonClick = (tech) => {
    setSelectedTech(tech);
  };

  return (
    <div style={containerStyle}>
      <div style={titleStyle}>MERN Fullstack Roadmap</div>
      <div style={contentContainerStyle}>
                <div style={buttonContainerStyle}>
          {technologies.map((tech, index) => (
            <button
              key={index}
              style={{ ...buttonStyle, backgroundColor: tech.color }}
              onClick={() => handleButtonClick(tech)}
            >
              <img src={tech.icon} alt={tech.name} style={iconStyle} />
              {tech.name}
            </button>
          ))}
        </div>
        <div style={sidebarStyle}>
          {selectedTech ? (
            <div>
              <h2>{selectedTech.name}</h2>
              <p>{selectedTech.description}</p>
            </div>
          ) : (
            <p>Select a technology to see the details.</p>
          )}
        </div>
      </div>
    </div>
  );
};

const containerStyle = {
  padding: '20px',
  fontFamily: 'Arial, sans-serif'
};

const titleStyle = {
  fontSize: '2rem',
  marginBottom: '20px',
  textAlign: 'center'
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
  backgroundColor: '#f0f0f0', // Add background color for checking
  padding: '20px',
  marginRight: '20px',
};
const buttonStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  border: '2px solid white',
  padding: '10px 20px',
  cursor: 'pointer',
  borderRadius: '5px',
  outline: 'none',
  transition: 'background 0.3s ease, border 0.3s ease',
  margin: '10px',
  width: '150px',
  height: '50px',
  filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
};

const iconStyle = {
  marginRight: '10px',
  width: '30px',
  height: '30px'
};

const sidebarStyle = {
  flex: 1,
  padding: '20px',
  backgroundColor: '#f0f0f0',
  borderRadius: '5px',
  marginLeft: '20px'
};

export default MernFullstack;

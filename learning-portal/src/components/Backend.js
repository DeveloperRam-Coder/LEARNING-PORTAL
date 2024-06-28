import React from 'react';

function Backend() {
    return (
        <div>
            <div style={titleStyle}>Backend Technologies</div>

            <button style={{ ...buttonStyle, hoverStyle, backgroundColor: 'blue' }}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" />
                Node.js</button>
            <button style={{ ...buttonStyle, hoverStyle, backgroundColor: 'green' }}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" />
                Express</button>
            <button style={{ ...buttonStyle, hoverStyle, backgroundColor: 'red' }}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
                Python</button>
            <button style={{ ...buttonStyle, hoverStyle, backgroundColor: 'purple' }}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" />
                Django</button>
            <button style={{ ...buttonStyle, hoverStyle, backgroundColor: 'orange' }}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-original-wordmark.svg" />
                Ruby on Rails</button>
            <button style={{ ...buttonStyle, hoverStyle, backgroundColor: 'teal' }}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" />
                Java</button>
            <button style={{ ...buttonStyle, hoverStyle, backgroundColor: 'cyan' }}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" />
                Spring</button>
            <button style={{ ...buttonStyle, hoverStyle, hoverStyle, backgroundColor: 'magenta' }}>

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original-wordmark.svg" />
                ASP.NET</button>
            <button style={{ ...buttonStyle, backgroundColor: 'gold' }}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" />
                PHP</button>
            <button style={{ ...buttonStyle, hoverStyle, backgroundColor: 'darkgreen' }}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" />
                Laravel</button>
            <button style={{ ...buttonStyle, hoverStyle, backgroundColor: 'indigo' }}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" />
                Flask</button>
            <button style={{ ...buttonStyle, hoverStyle, backgroundColor: 'pink' }}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg" />
                Go</button>
            <button style={{ ...buttonStyle, hoverStyle, backgroundColor: 'lightgreen' }}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original-wordmark.svg" />
                Kotlin</button>
        </div>
    );
}

const buttonStyle = {
    boxShadow: '0 0 20px rgba(255, 255, 255, 0.7)',
    color: 'white',
    background: 'linear-gradient(to right, #00c6ff, #0072ff)',
    border: '2px solid white',
    padding: '10px 20px',
    cursor: 'pointer',
    borderRadius: '5px',
    outline: 'none',
    transition: 'background 0.3s ease, border 0.3s ease',
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
    width: '10%',
};

const hoverStyle = {
    filter: 'brightness(85%)',
    boxShadow: '0 0 20px rgba(255, 255, 255, 0.7)', // Grow shadow on hover

};


const titleStyle = {
    gridColumn: '1 / -1', // Title spans all columns
    fontSize: '1.5rem',
    marginBottom: '2rem',
    // border: '2px solid white',
};

export default Backend;

import React from 'react';

function Frontend() {
    return (
        <div >
            <div style={titleStyle}>Frontend Technologies</div>
            <button style={{ ...buttonStyle, backgroundColor: 'blue' }}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                HTML</button>
            <button style={{ ...buttonStyle, backgroundColor: 'green' }}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
                CSS</button>
            <button style={{ ...buttonStyle, backgroundColor: 'red' }}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                JavaScript</button>
            <button style={{ ...buttonStyle, backgroundColor: 'brown' }}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
                TypeScript</button>

            <button style={{ ...buttonStyle, backgroundColor: 'purple' }}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                React</button>
            <button style={{ ...buttonStyle, backgroundColor: 'orange' }}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" />
                Angular</button>
            <button style={{ ...buttonStyle, backgroundColor: 'teal' }}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" />
                Vue.js</button>
            {/* Additional buttons */}
            <button style={{ ...buttonStyle, backgroundColor: 'cyan' }}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" />
                Sass</button>
            <button style={{ ...buttonStyle, backgroundColor: 'magenta' }}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" />
                Bootstrap</button>
            <button style={{ ...buttonStyle, backgroundColor: 'gold' }}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg" />
                jQuery</button>
            <button style={{ ...buttonStyle, backgroundColor: 'pink' }}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
                Tailwind CSS</button>

            <button style={{ ...buttonStyle, backgroundColor: 'lightblue' }}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" />
                Next.js</button>
            <button style={{ ...buttonStyle, backgroundColor: 'darkorange' }}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" />
                Redux</button>
        </div>
    );
}
const titleStyle = {
    gridColumn: '1 / -1', // Title spans all columns
    fontSize: '1.5rem',
    marginBottom: '2rem',
    // border: '2px solid white',
};
const buttonStyle = {
    boxShadow: '0 0 20px rgba(255, 255, 255, 0.7)', // Grow shadow on hover

    color: 'white',
    background: 'linear-gradient(to right, #00c6ff, #0072ff)',
    border: '2px solid white',
    padding: '10px 20px',
    cursor: 'pointer',
    borderRadius: '5px',
    outline: 'none',
    transition: 'background 0.3s ease, border 0.3s ease, transform 0.2s ease', // Added transform for animation
    width: '10%', // Full width within grid item
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
};


export default Frontend;

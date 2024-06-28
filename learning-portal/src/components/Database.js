import React from 'react';

function Database() {

    const titleStyle = {
        fontSize: '1.5rem',
        marginBottom: '2rem',
    };

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


    return (
        <div>
            <div style={titleStyle}>Database Technologies</div>

            <button style={{ ...buttonStyle, backgroundColor: '#FF6347' }}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg" />
                MongoDB</button>
            <button style={{ ...buttonStyle, backgroundColor: '#20B2AA' }}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-plain-wordmark.svg" />
                MySQL</button>
            <button style={{ ...buttonStyle, backgroundColor: '#1E90FF' }}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain-wordmark.svg" />
                PostgreSQL</button>
            <button style={{ ...buttonStyle, backgroundColor: '#00CED1' }}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original-wordmark.svg" />
                SQLite</button>
            <button style={{ ...buttonStyle, backgroundColor: '#FF1493' }}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-plain-wordmark.svg" />
                Redis</button>
            <button style={{ ...buttonStyle, backgroundColor: '#9400D3' }}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" />
                Firebase</button>
        </div>
    );
}

export default Database;

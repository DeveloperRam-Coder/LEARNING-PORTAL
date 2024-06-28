import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import Frontend from './components/Frontend';
import Backend from './components/Backend';
import Database from './components/Database';
import MernFullstack from './components/MernFullstack.js';
import logo from './study.png'; // Import your logo image file

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: 'white', color: 'black', minHeight: '100vh', padding: '20px' }}>
        <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
          <div style={{
            padding: '10px 20px',
            border: '2px solid black',
             display: 'flex',
              alignItems: 'center',
              width: '100%',
          }}>
            <img src={logo} alt="Logo" style={{ height: '50px', marginRight: '10px' }} />
            <Link to="/" style={{ margin: '10px', color: 'black', textDecoration: 'none' }}>Home</Link>
            <Link to="/frontend" style={{ margin: '10px', color: 'black', textDecoration: 'none' }}>Frontend</Link>
            <Link to="/backend" style={{ margin: '10px', color: 'black', textDecoration: 'none' }}>Backend</Link>
            <Link to="/database" style={{ margin: '10px', color: 'black', textDecoration: 'none' }}>Database</Link>
            <Link to="/mernFullstack" style={{ margin: '10px', color: 'black', textDecoration: 'none' }}>MernFullstack</Link>
          </div>
          {/* You can add additional elements or icons here */}
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/frontend" element={<Frontend />} />
          <Route path="/backend" element={<Backend />} />
          <Route path="/database" element={<Database />} />
          <Route path="/mernFullstack" element={<MernFullstack />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

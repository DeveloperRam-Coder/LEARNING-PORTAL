import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import Frontend from './components/Frontend';
import Backend from './components/Backend';
import Database from './components/Database';

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', padding: '20px' }}>
        <nav style={{ marginBottom: '20px' }}>
          <Link to="/" style={{ margin: '10px', color: 'white', textDecoration: 'none' }}>Home</Link>
          <Link to="/frontend" style={{ margin: '10px', color: 'white', textDecoration: 'none' }}>Frontend</Link>
          <Link to="/backend" style={{ margin: '10px', color: 'white', textDecoration: 'none' }}>Backend</Link>
          <Link to="/database" style={{ margin: '10px', color: 'white', textDecoration: 'none' }}>Database</Link>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/frontend" element={<Frontend />} />
          <Route path="/backend" element={<Backend />} />
          <Route path="/database" element={<Database />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

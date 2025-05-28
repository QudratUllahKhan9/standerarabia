import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import VerificationComp from './Verification/VerificationComp';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import MenuGride from './components/MenuGride';


function App() {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav> */}

        <Routes>
          <Route path="/Verification" element={<VerificationComp/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
          <Route path="/MenuGride" element={<MenuGride />} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import VerificationComp from './Verification/VerificationComp';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import MenuGride from './components/MenuGride';
import Services from './Services/Services';
import About from './About/About';
import Accreditations from './Accreditations/Accreditations';
import Feedback from './Feedback/Feedback';


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
          <Route path="/Services" element={<Services />} />
          <Route path="/About" element={<About />} />
          <Route path="/Accreditations" element={<Accreditations />} />
          <Route path="/Feedback" element={<Feedback />} />





        </Routes>
      </div>
    </Router>
  );
}

export default App;

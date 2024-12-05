import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Parallel from './Pages/Parallel';
import Podcast from './Pages/Podcast';
import About from './Pages/About';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <Nav />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/parallel" element={<Parallel />} />
            <Route path="/podcast" element={<Podcast />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;

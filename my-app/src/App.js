import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Slider from './components/Slider';
import News from './components/News';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import './App.css';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Header />
      {location.pathname === '/' && <Slider />}
      <div className="content">
        <Routes>
          <Route path="/" element={<News />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
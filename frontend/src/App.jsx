import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import FoodMenu from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
  const [isHome, setIsHome] = React.useState(true);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<FoodMenu />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;

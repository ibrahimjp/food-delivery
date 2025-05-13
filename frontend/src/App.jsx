import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

const App = () => {
  const url = "https://jamilafood.onrender.com";

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/shop" element={<Shop url={url} />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact-us" element={<Contact />} />
    </Routes>
  );
};

export default App;

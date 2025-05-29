import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import LoginPopUp from './components/LoginPopUp/LoginPopUp';
import MyOrders from './pages/MyOrders/MyOrders'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'

const App = () => {
  // const url = "http://localhost:4000";
  const url = "https://jamilafood.onrender.com";
  const phoneNumber = "+918690120453"; 
  return (
    <Routes>
      <Route path="/" element={<Home phoneNumber={phoneNumber} />} />
      <Route path="/login" element={<LoginPopUp url={url} />} />
      <Route path='/cart' element={<Cart url={url} />} />
      <Route path='/order' element={<PlaceOrder url={url} />} />
      <Route path='/myorders' element={<MyOrders url={url} />} />
      <Route path="/about" element={<About phoneNumber={phoneNumber} />} />
      <Route path="/shop" element={<Shop url={url} phoneNumber={phoneNumber} />} />
      <Route path="/blog" element={<Blog />} phoneNumber={phoneNumber} />
      <Route path="/contact-us" element={<Contact phoneNumber={phoneNumber} />} />
    </Routes>
  );
};

export default App;

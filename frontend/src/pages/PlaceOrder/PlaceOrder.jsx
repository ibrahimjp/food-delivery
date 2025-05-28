import React, { useEffect, useState } from 'react'
import './PlaceOrder.css'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { toast } from 'react-hot-toast'

const PlaceOrder = () => {
  const {getTotalCartAmount, token, food_list, cartItems, url} = useContext(StoreContext)
  const navigate = useNavigate();

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: ""
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }))
  }

  const onPlaceOrder = async (event) => {
    event.preventDefault();

    if (getTotalCartAmount() === 0) {
        toast.error('Your cart is empty');
        return;
    }

    // Validate required fields
    if (!data.email || !data.phone || !data.street) {
        toast.error('Please fill in all required fields');
        return;
    }

    const orderItems = food_list.map(item => ({
        foodId: item._id,
        name: item.name,
        quantity: cartItems[item._id],
        price: item.price
    })).filter(item => item.quantity > 0);

    try {
        // Format the order message for WhatsApp
        const phoneNumber = "+918690120453";
        const orderMessage = `*New Order Received!* 🎉\n\n` +
            `*Customer Details:*\n` +
            `📧 Email: ${data.email}\n` +
            `📱 Phone: ${data.phone}\n` +
            `📍 Address: ${data.street}, ${data.city}, ${data.state} ${data.zipcode}, ${data.country}\n\n` +
            `*Order Items:*\n` +
            orderItems.map(item => 
                `• ${item.name}\n` +
                `  Quantity: ${item.quantity}\n` +
                `  Price: ₹${item.price}\n` +
                `  Subtotal: ₹${item.price * item.quantity}\n`
            ).join('\n') +
            `\n*Order Summary:*\n` +
            `💰 Subtotal: ₹${getTotalCartAmount()}\n` +
            `🚚 Delivery Fee: ₹20\n` +
            `💵 Total Amount: ₹${getTotalCartAmount() + 20}\n` +
            `🕒 Order Time: ${new Date().toLocaleString()}`;

        // Encode the message for WhatsApp URL
        const encodedMessage = encodeURIComponent(orderMessage);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        // Show success toast
        toast.success('Your order message has been sent to Jamila!', {
            duration: 4000,
            position: 'top-center',
        });

        // Open WhatsApp in a new tab
        window.open(whatsappUrl, '_blank');

        // Redirect to home after a delay
        setTimeout(() => {
            navigate('/');
        }, 2000);

    } catch (error) {
        toast.error('Something went wrong. Please try again.', {
            duration: 4000,
            position: 'top-center',
        });
    }
  };

  useEffect(() => {
    if (!token) {
        localStorage.setItem('returnTo', '/place-order');
        navigate('/login');
    }
    else if (getTotalCartAmount() === 0) {
        navigate('/cart');
    }
  }, [token])

  return (
    <>
      <Header />
      <div className="place-order-container">
        <div className="container">
          <form onSubmit={onPlaceOrder} className='place-order'>
            <div className="place-order-left">
              <h2 className="title">Delivery Information</h2>
              <div className="form-group">
                <div className="multi-fields">
                  <div className="input-group">
                    <input 
                      required 
                      name='firstName' 
                      onChange={onChangeHandler} 
                      value={data.firstName} 
                      type="text" 
                      placeholder='First Name'
                      className="form-input" 
                    />
                  </div>
                  <div className="input-group">
                    <input 
                      required 
                      name='lastName' 
                      onChange={onChangeHandler} 
                      value={data.lastName} 
                      type="text" 
                      placeholder='Last Name'
                      className="form-input" 
                    />
                  </div>
                </div>
                <div className="input-group">
                  <input 
                    className='form-input emaill' 
                    required 
                    name='email' 
                    onChange={onChangeHandler} 
                    value={data.email} 
                    type="email" 
                    placeholder='Email address' 
                  />
                </div>
                <div className="input-group">
                  <input 
                    className='form-input streett' 
                    required 
                    name='street' 
                    onChange={onChangeHandler} 
                    value={data.street} 
                    type="text" 
                    placeholder='Street' 
                  />
                </div>
                <div className="multi-fields">
                  <div className="input-group">
                    <input 
                      required 
                      name='city' 
                      onChange={onChangeHandler} 
                      value={data.city} 
                      type="text" 
                      placeholder='City'
                      className="form-input" 
                    />
                  </div>
                  <div className="input-group">
                    <input 
                      required 
                      name='state' 
                      onChange={onChangeHandler} 
                      value={data.state} 
                      type="text" 
                      placeholder='State'
                      className="form-input" 
                    />
                  </div>
                </div>
                <div className="multi-fields">
                  <div className="input-group">
                    <input 
                      required 
                      name='zipcode' 
                      onChange={onChangeHandler} 
                      value={data.zipcode} 
                      type="text" 
                      placeholder='Zip code'
                      className="form-input" 
                    />
                  </div>
                  <div className="input-group">
                    <input 
                      required 
                      name='country' 
                      onChange={onChangeHandler} 
                      value={data.country} 
                      type="text" 
                      placeholder='Country'
                      className="form-input" 
                    />
                  </div>
                </div>
                <div className="input-group">
                  <input 
                    className='form-input phonee' 
                    required 
                    name='phone' 
                    onChange={onChangeHandler} 
                    value={data.phone} 
                    type="text" 
                    placeholder='Phone' 
                  />
                </div>
              </div>
            </div>
            <div className="place-order-right">
              <div className="cart-total">
                <h2>Cart Totals</h2>
                <div className="cart-total-details">
                  <div className="cart-total-item">
                    <p>Subtotal</p>
                    <p>₹{getTotalCartAmount()}</p>
                  </div>
                  <hr />
                  <div className="cart-total-item">
                    <p>Delivery Fee</p>
                    <p>₹{getTotalCartAmount() === 0 ? 0 : 20}</p>
                  </div>
                  <hr />
                  <div className="cart-total-item total">
                    <b>Total</b>
                    <b>₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 20}</b>
                  </div>
                </div>
                <button type="submit" className="proceed-btn">Order Now</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default PlaceOrder
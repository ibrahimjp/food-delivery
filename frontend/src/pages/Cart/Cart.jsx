import React, { useContext, useEffect } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext.jsx'; // Adjust path if needed
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { toast } from 'react-toastify';

const Cart = () => {
    const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
    const navigate = useNavigate();

    const handleCheckout = () => {
        const isLoggedIn = localStorage.getItem('token') !== null;
        if (!isLoggedIn) {
            localStorage.setItem('returnTo', '/cart');
            toast.error('You must be logged in to order. Redirecting to login page...');
            navigate('/login');
        } else {
            navigate('/order');
        }
    };

    // Check if cart is empty by checking if there are any items with quantity > 0
    const isCartEmpty = !cartItems || !Object.values(cartItems).some(quantity => quantity > 0);

    return (
      <>
      <Header/>
      {isCartEmpty ? (
        <div className='cart-empty'>
            <div className="empty-cart-content">
                <div className="empty-cart-icon">🛒</div>
                <h2>Your Cart is Empty</h2>
                <p>Looks like you haven't added any delicious items to your cart yet!</p>
                <div className="empty-cart-suggestions">
                    <p>Why not try our:</p>
                    <ul>
                        <li>🍕 Signature Pizzas</li>
                        <li>🍔 Gourmet Burgers</li>
                        <li>🍜 Special Noodles</li>
                    </ul>
                </div>
                <button onClick={() => navigate('/shop')} className="order-now-btn">
                    Order Now
                </button>
            </div>
        </div>
      ) : (
          <div className='cart'>
            <div className="cart-items">
                <div className="cart-items-title">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr />
                {food_list.map((item, index) => {
                    if (cartItems[item._id] > 0) {
                        return (
                            <div key={index}>
                                <div className="cart-items-title cart-items-item">
                                    <img src={item.image} alt="" />
                                    <p>{item.name}</p>
                                    <p>₹{item.price}</p>
                                    <p>{cartItems[item._id]}</p>
                                    <p>₹{item.price * cartItems[item._id]}</p>
                                    <p onClick={() => removeFromCart(item._id)} className='cross'>x</p>
                                </div>
                                <hr />
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
            <div className="cart-bottom">
                <div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>₹{getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Delivery Fee</p>
                            <p>₹{getTotalCartAmount() === 0 ? 0 : 20}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <b>Total</b>
                            <b>₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 20}</b>
                        </div>
                    </div>
                    <button onClick={handleCheckout}>PROCEED TO CHECKOUT</button>
                </div>
            </div>
        </div>
        )}
            <Footer/>
            </>
    );
};

export default Cart;
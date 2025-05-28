import React, { useEffect, useState, useContext } from 'react'; // Added useContext
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from "axios";
import Preloader from '../components/Preloader';
import { toast } from 'react-toastify';
import './Shop.css';
import { StoreContext } from '../../src/context/StoreContext.jsx'; // Import StoreContext

const Shop = ({ url, phoneNumber }) => {
    const navigate = useNavigate();
    const [selectedItemId, setSelectedItemId] = useState(null);
    const [list, setList] = useState([]); // This will be your food_list
    const [activeFilter, setActiveFilter] = useState('All');
    const [loading, setLoading] = useState(true);

    // Get cartItems, addToCart, and removeFromCart from StoreContext
    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

    // The 'token' should also ideally come from StoreContext if used globally for auth,
    // but for now, we'll keep fetching it locally if your context doesn't provide it yet.
    // If your StoreContext handles token, remove this line and destructure 'token' from useContext.
    const token = localStorage.getItem("token");

    // Removed local cartItems useState and useEffect for localStorage as this is now handled by StoreContext.

    // Original addToCart and removeFromCart are removed from here.
    // The context's functions will handle both local state update AND API calls.

    const fetchFood = async () => {
        try {
            const response = await axios.get(`${url}/api/food/list`);
            if (response.data.success) {
                setList(response.data.data);
            } else {
                toast.error("Error fetching food data");
            }
        } catch (error) {
            toast.error("Error fetching food data");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchFood();
    }, [url]);

    const filters = [
        "All", "Sandwich", "Fries", "Chinese",
        "Burger", "Pizza", "Rolls", "Desserts",
        "Garlic Bread", "Cup Cakes", "Cookies", "Pasta",
        "Street Food", "Parathas"
    ];

    return (
        <div>
            <Header />

            {loading ? (
                <Preloader />
            ) : (
                <section className="section food-menu" id="food-menu">
                    <div className="container">
                        <p className="section-subtitle">Popular Dishes</p>
                        <h2 className="h2 section-title">
                            Our Delicious <span className="span">Foods</span>
                        </h2>
                        <p className="section-text">
                            Food is any substance consumed to provide nutritional support for an organism.
                        </p>

                        <ul className="fiter-list">
                            {filters.map((filter) => (
                                <li key={filter}>
                                    <button
                                        className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                                        onClick={() => setActiveFilter(filter)}
                                    >
                                        {filter}
                                    </button>
                                </li>
                            ))}
                        </ul>

                        <ul className="food-menu-list">
                            {list // Using 'list' as it's the state where you store fetched food data
                                .filter((item) => activeFilter === 'All' || item.category === activeFilter)
                                .map((item) => (
                                    <li key={item._id}>
                                        <div className="food-menu-card">
                                            <div className="card-banner">
                                                <img
                                                    src={`${item.image}`}
                                                    loading="lazy"
                                                    alt={item.name}
                                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                />
                                                {item.discount !== 0 && (
                                                    <div className="badge">
                                                        -{item.discount}%
                                                    </div>
                                                )}
                                                {/* Use context's addToCart/removeFromCart */}
                                                {!cartItems[item._id]
                                                    ? <img className='add' onClick={() => addToCart(item._id)} src="/images/add_icon_white.png" alt="" />
                                                    : <div className='food-item-counter'>
                                                        <img onClick={() => removeFromCart(item._id)} src="/images/remove_icon_red.png" alt='' />
                                                        <p className='cartitemsp'>{cartItems[item._id]}</p>
                                                        <img onClick={() => addToCart(item._id)} src="/images/add_icon_green.png" alt='' />
                                                    </div>
                                                }
                                                <button
                                                    onClick={() =>
                                                        setSelectedItemId(selectedItemId === item._id ? null : item._id)
                                                    }
                                                    className="btn food-menu-btn"
                                                >
                                                    Order Now
                                                </button>

                                                {selectedItemId === item._id && (
                                                    <div className="order-options">
                                                        <a
                                                            href={`tel:${phoneNumber}`}
                                                            className="order-link"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            📞 Call Us
                                                        </a>
                                                        <a
                                                            href={`https://wa.me/${phoneNumber}`}
                                                            className="order-link"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            💬 WhatsApp
                                                        </a>
                                                    </div>
                                                )}
                                            </div>

                                            <div className="wrapper">
                                                <p className="category">{item.category}</p>
                                                <div className="rating-wrapper">
                                                    {[...Array(5)].map((_, i) => (
                                                        <ion-icon key={i} name="star"></ion-icon>
                                                    ))}
                                                </div>
                                            </div>

                                            <h3 className="h3 card-title">{item.name}</h3>

                                            <div className="price-wrapper">
                                                <p className="price-text">Price:</p>
                                                <data className="price">₹{item.price.toFixed(2)}</data>
                                                {item.originalPrice && (
                                                    <del className="del">₹{item.originalPrice.toFixed(2)}</del>
                                                )}
                                            </div>
                                            <div className='cart-button'>
                                                <button onClick={() => navigate('/cart')} className='cart-button-text'>Go To Cart</button>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                        </ul>
                    </div>
                </section>
            )}

            <Footer />
        </div>
    );
};

export default Shop;
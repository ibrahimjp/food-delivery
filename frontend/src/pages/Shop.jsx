import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from "axios";
import Preloader from '../components/Preloader';
import { toast } from 'react-toastify';
import './Shop.css';
const Shop = ({ url, phoneNumber }) => {
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [list, setList] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [loading, setLoading] = useState(true);

  const fetchFood = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error("Error fetching data");
      }
    } catch (error) {
      toast.error("Error fetching data");
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
     "Garlic Bread","Cup Cakes","Cookies","Pasta",
     "Street Food","Parathas"
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
              {list
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

import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from "axios";
import Preloader from '../components/Preloader';
import { toast } from 'react-toastify';
const Shop = ({ url }) => {
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
      console.error("Error fetching data:", error);
      toast.error("Error fetching data");
    } finally {
      setLoading(false); // Ensure loading is false regardless of success or failure
    }
  };

  const removeFood = async (foodId) => {
    try {
      setLoading(true);
      const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
      if (response.data.success) {
        toast.success(response.data.message);
        fetchFood(); // Re-fetch data after removal
      } else {
        toast.error("Error removing item");
      }
    } catch (error) {
      console.error("Error removing item:", error);
      toast.error("Error removing item");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFood();
  }, [url]); // Include `url` in the dependency array

  const filters = [
    "All",
    "Sandwich",
    "Fries",
    "Chinese",
    "Burger",
    "Pizza",
    "Rolls",
    "Desserts",
    "Garlic Bread",
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
                  <li key={item.id}>
                    <div className="food-menu-card">
                      <div className="card-banner">
                        <img
                          src={`${url}/images/${item.image}`}
                          loading="lazy"
                          alt={item.title}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                        
                          <div className="badge">
                            -{item.discount}%
                          </div>
                       

                        <button className="btn food-menu-btn">Order Now</button>
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

import { useState } from 'react'

const FoodMenu = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  const menuItems = [
    {
      id: 1,
      category: 'Chicken',
      title: 'Fried Chicken Unlimited',
      price: 49.00,
      originalPrice: 69.00,
      discount: 15,
      image: 'food-menu-1.png'
    },
    // Add other menu items here
  ]

  const filters = ['All', 'Pizza', 'Burger', 'Drinks', 'Sandwich']

  return (
    <section className="section food-menu" id="food-menu">
      <div className="container">
        <p className="section-subtitle">Popular Dishes</p>
        <h2 className="h2 section-title">Our Delicious <span className="span">Foods</span></h2>
        <p className="section-text">Food is any substance consumed to provide nutritional support for an organism.</p>

        <ul className="fiter-list">
          {filters.map(filter => (
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
          {menuItems.filter(item => activeFilter === 'All' || item.category === activeFilter).map(item => (
            <li key={item.id}>
              <div className="food-menu-card">
                <div className="card-banner">
                  <img 
                    src={`./images/${item.image}`} 
                    width="300" height="300" loading="lazy" 
                    alt={item.title} 
                    className="w-100" 
                  />
                  {/* {item.discount && <div className="badge">-{item.discount}%</div>} */}
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
                  <data className="price">${item.price.toFixed(2)}</data>
                  {/* <del className="del">${item.originalPrice.toFixed(2)}</del> */}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default FoodMenu
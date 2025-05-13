import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import axios from "axios"
const Shop = ({url}) => {
  const [list,setList] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All')
  const fecthFood = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    console.log(response.data);
    if (response.data.success){
      setList(response.data.data)
    }
    else
    {
      toast.error("Error")
    }
  }

  const removeFood = async(foodId) => {
    const response = await axios.post(`${url}/api/food/remove`,{id:foodId});
    await fetchList();
    if (response.data.success){
      toast.success(response.data.message)
    }
    else{
      toast.error("Error")
    }
  }


  useEffect(()=>{
    fecthFood();
  },[])
  const filters = [
  "Sandwich",
  "Fries",
  "Chinese",
  "Burger",
  "Pizza",
  "Rolls",
  "Desserts",
  "Garlic Bread"]
  return (
    <div>
      <Header/>

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
          {list.filter(item => activeFilter === 'All' || item.category === activeFilter).map(item => (
            <li key={item.id}>
              <div className="food-menu-card">
                <div className="card-banner">
                  <img 
                   src={`${url}/images/`+item.image}
                    width="300" height="300" loading="lazy" 
                    alt={item.title} 
                    className="w-100" y
                  />
                  {item.discount && <div className="badge">-{item.discount}%</div>}
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

                <h3 className="h3 card-title">{item.title}</h3>

                <div className="price-wrapper">
                  <p className="price-text">Price:</p>
                  <data className="price">${item.price.toFixed(2)}</data>
                  <del className="del">${item.originalPrice.toFixed(2)}</del>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
      {/* <div className='list add flex-col'>
      <p>All Foods List</p>
    <div className="list-table">
      <div className="list-table-format title">
        <b>Image</b>
        <b>Name</b>
        <b>Category</b>
        <b>Price</b>
        <b>Action</b>
      </div>
      {list.map((item,index)=>{
        return (
          <div key={index} className='list-table-format'>
            <img src={`${url}/images/`+item.image} alt="" />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>${item.price}</p>
            <p onClick={()=>removeFood(item._id)} className='cursor'>X</p>
          </div>
        )
      })}
    </div>
    </div> */}
      <Footer/>
    </div>
  )
}

export default Shop
import React, { useState, useEffect } from 'react';
import './Edit.css';
import { assets } from '../../assets/assets';
import axios from "axios";
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

const Edit = ({ url }) => {
  const { id } = useParams(); // Get the ID from the route
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    name: "",
    originalPrice: "",
    discount: "",
    description: "",
    price: "",
    category: "Sandwich",
  });

  // Fetch food item data by ID
  const fetchFoodItem = async () => {
    try {
      const response = await axios.get(`${url}/api/food/edit/${id}`);
      console.log(response.data);
      if (response.data.success) {
        const foodData = response.data.data;
        setData({
          name: foodData.name,
          originalPrice: foodData.originalPrice,
          discount: foodData.discount,
          description: foodData.description,
          price: foodData.price,
          category: foodData.category,
        });
        setImage(foodData.image);
        setLoading(false);
      } else {
        toast.error("Food item not found!");
      }
    } catch (error) {
      console.error("Error fetching food item:", error);
      toast.error("Failed to fetch food item data.");
    }
  };

  useEffect(() => {
    fetchFoodItem();
  }, [id]);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("originalPrice", Number(data.originalPrice));
    formData.append("discount", Number(data.discount));
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    if (image) formData.append("image", image);

    try {
      const response = await axios.put(`${url}/api/food/edit/${id}`, formData);
      if (response.data.success) {
        toast.success("Food item updated successfully!");
      } else {
        toast.error("Failed to update food item.");
      }
    } catch (error) {
      console.error("Error updating food item:", error);
      toast.error("Error updating food item.");
    }
    window.location.href = "/list";
  };

  return (
    <div className='add'>
      <form className='flex-col' onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              className='image'
              src={
                image instanceof File ?
                  URL.createObjectURL(image) :
                  (image ? `${url}/images/${image}` : assets.placeholderImage) // Add a placeholder
              }
              alt={data.name || "No Image"}
            />
          </label>

          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
          />
        </div>

        <div className="add-product-name flex-col">
          <p>Product Name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name='name'
            placeholder='Type here'
            required
          />
        </div>

        <div className="add-product-originalPrice flex-col">
          <p>Product Fake Price</p>
          <input
            onChange={onChangeHandler}
            value={data.originalPrice}
            type="number"
            name='originalPrice'
            placeholder='Type here'
            required
          />
        </div>

        <div className="add-product-discount flex-col">
          <p>Product Discount</p>
          <input
            onChange={onChangeHandler}
            value={data.discount}
            type="number"
            name='discount'
            placeholder='Type here'
            required
          />
        </div>

        <div className="add-product-description flex-col">
          <p>Product Description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            name="description"
            rows="6"
            placeholder='Write content here'
            required
          ></textarea>
        </div>

        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product Category</p>
            <select
              className='selectt'
              onChange={onChangeHandler}
              name="category"
              value={data.category}
            >
              <option value="Sandwich">Sandwich</option>
              <option value="Fries">Fries</option>
              <option value="Chinese">Chinese</option>
              <option value="Burger">Burger</option>
              <option value="Pizza">Pizza</option>
              <option value="Rolls">Rolls</option>
              <option value="Desserts">Desserts</option>
              <option value="Garlic Bread">Garlic Bread</option>
            </select>
          </div>

          <div className="add-price flex-col">
            <p>Product Price</p>
            <input
              className='inputclasa'
              onChange={onChangeHandler}
              value={data.price}
              type="number"
              name='price'
              placeholder='$20'
              required
            />
          </div>
        </div>

        <button type='submit' className='add-btn'>Update</button>
      </form>
    </div>
  );
};

export default Edit;

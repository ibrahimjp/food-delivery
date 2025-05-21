import React, { useState, useEffect } from 'react';
import './Edit.css';
import { assets } from '../../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

const Edit = ({ url }) => {
  const { id } = useParams();
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [data, setData] = useState({
    name: '',
    originalPrice: '',
    discount: '',
    description: '',
    price: '',
    category: 'Sandwich',
    image: ''
  });

  const fetchFoodItem = async () => {
    try {
      const response = await axios.get(`${url}/api/food/edit/${id}`);
      if (response.data.success) {
        setData(response.data.data);
        setImagePreview(response.data.data.image);
      } else {
        toast.error('Food item not found!');
      }
    } catch (error) {
      console.error('Error fetching food item:', error);
      toast.error('Failed to fetch food item data.');
    }
  };

  useEffect(() => {
    fetchFoodItem();
  }, [id]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    let imageUrl = data.image;

    try {
      if (image) {
        const imgForm = new FormData();
        imgForm.append('file', image);
        imgForm.append('upload_preset', 'ibrahim');
        imgForm.append('cloud_name', 'dekm2rnt9');

        const res = await fetch('https://api.cloudinary.com/v1_1/dekm2rnt9/image/upload', {
          method: 'POST',
          body: imgForm,
        });

        const imgData = await res.json();
        imageUrl = imgData.url;
      }

      const payload = {
        ...data,
        image: imageUrl,
      };

      const response = await axios.put(`${url}/api/food/edit/${id}`, payload);

      if (response.data.success) {
        toast.success('Food item updated successfully!');
      } else {
        toast.error('Failed to update food item.');
      }
    } catch (err) {
      console.error('Error updating food item:', err);
      toast.error('Error updating food item.');
    }
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
                image
                  ? URL.createObjectURL(image)
                  : imagePreview || assets.upload_area
              }
              alt="Preview"
            />
          </label>
          <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" hidden />
        </div>

        <div className="add-product-name flex-col">
          <p>Product Name</p>
          <input onChange={onChangeHandler} value={data.name} type="text" name="name" required />
        </div>

        <div className="add-product-originalPrice flex-col">
          <p>Product Fake Price</p>
          <input onChange={onChangeHandler} value={data.originalPrice} type="number" name="originalPrice" required />
        </div>

        <div className="add-product-discount flex-col">
          <p>Product Discount</p>
          <input onChange={onChangeHandler} value={data.discount} type="number" name="discount" required />
        </div>

        <div className="add-product-description flex-col">
          <p>Product Description</p>
          <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" required></textarea>
        </div>

        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product Category</p>
            <select className='selectt' onChange={onChangeHandler} name="category" value={data.category}>
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
            <input className='inputclasa' onChange={onChangeHandler} value={data.price} type="number" name="price" required />
          </div>
        </div>

        <button type='submit' className='add-btn'>Update</button>
      </form>
    </div>
  );
};

export default Edit;

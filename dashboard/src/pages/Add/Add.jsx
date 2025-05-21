import React, { useState } from 'react';
import './Add.css';
import { assets } from '../../assets/assets';
import axios from "axios";
import { toast } from 'react-toastify';

const Add = ({ url }) => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    originalPrice: "",
    discount: "",
    description: "",
    price: "",
    category: "Salad"
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(prev => ({ ...prev, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (!image) {
      alert("Please upload an image");
      return;
    }

    try {
      // Upload to Cloudinary
      const imgForm = new FormData();
      imgForm.append("file", image);
      imgForm.append("upload_preset", "ibrahim");
      imgForm.append("cloud_name", "dekm2rnt9");

      const res = await fetch("https://api.cloudinary.com/v1_1/dekm2rnt9/image/upload", {
        method: "POST",
        body: imgForm
      });

      const imgData = await res.json();
      console.log("Cloudinary Upload:", imgData);

      // Prepare JSON payload
      const payload = {
        ...data,
        image: imgData.url
      };

      const response = await axios.post(`${url}/api/food/add`, payload);

      if (response.data.success) {
        setData({
          name: "",
          originalPrice: "",
          discount: "",
          description: "",
          price: "",
          category: "Salad"
        });
        setImage(false);
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }

    } catch (err) {
      console.error("Error uploading image or adding food:", err);
      toast.error("Something went wrong.");
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
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=""
            />
          </label>
          <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" hidden required />
        </div>

        <div className="add-product-name flex-col">
          <p>Product Name</p>
          <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type here' required />
        </div>

        <div className="add-product-originalPrice flex-col">
          <p>Product Fake Price</p>
          <input onChange={onChangeHandler} value={data.originalPrice} type="number" name='originalPrice' placeholder='Type here' required />
        </div>

        <div className="add-product-discount flex-col">
          <p>Product Discount (!important Insert positive value)</p>
          <input onChange={onChangeHandler} value={data.discount} type="number" name='discount' placeholder='Type here' required />
        </div>

        <div className="add-product-description flex-col">
          <p>Product Description</p>
          <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder='Write content here' required></textarea>
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
            <input className='inputclasa' onChange={onChangeHandler} value={data.price} type="number" name='price' placeholder='$20' required />
          </div>
        </div>

        <button type='submit' className='add-btn'>ADD</button>
      </form>
    </div>
  );
};

export default Add;

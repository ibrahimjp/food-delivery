import React, { useContext, useEffect, useState } from 'react'
import './MyOrders.css'
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import Header from '../../components/Header';
import Footer from '../../components/Footer';


const MyOrders = ({url}) => {
    const {token} = useContext(StoreContext);
    const [data,setData] = useState([]);

    const fetchOrders = async () => {
        const response = await axios.post(url+"/api/order/userorders",{},{headers:{token}});
        setData(response.data.data);
    }

    useEffect(()=>{
        if (token) {
            fetchOrders();
        }
    },[token])

    return (
        <>
            <Header />
            <div className='my-orders'>
                <div className="container">
                    <h2 className='myordersp'>My Orders</h2>
                    {data.length === 0 ? (
                        <div className="no-orders">
                            <img src="/images/parcel-icon.png" alt="No Orders" />
                            <p>You haven't placed any orders yet.</p>
                        </div>
                    ) : (
                        <div className="orders-list">
                            {data.map((order,index)=>{
                                return (
                                    <div key={index} className='my-orders-order'>
                                        <img src="/images/parcel-icon.png" alt="" />
                                        <div className="order-details">
                                            <p className="order-items">{order.items.map((item,index)=>{
                                                if (index === order.items.length-1) {
                                                    return item.name+" x "+item.quantity
                                                }
                                                else{
                                                    return item.name+" x "+item.quantity+", "
                                                }
                                            })}</p>
                                            <p className="order-amount">₹{order.amount}.00</p>
                                            <p className="order-items-count">Items: {order.items.length}</p>
                                        </div>
                                        <div className="order-status">
                                            <span className={`status-dot ${order.status.toLowerCase().replace(' ', '-')}`}></span>
                                            <b>{order.status}</b>
                                        </div>
                                        <button onClick={fetchOrders} className="track-order-btn">Track Order</button>
                                    </div>
                                )
                            })}
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default MyOrders
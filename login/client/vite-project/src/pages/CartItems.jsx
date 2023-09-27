import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import '../pages/cart.css'
import Footer from '../components/Footer'


const CartItems = () => {
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:8000/cart/get-cart')
      .then(response => {
        setCartItems(response.data);
        calculateSubtotal(response.data); // Calculate initial subtotal
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    calculateSubtotal(cartItems); // Calculate initial subtotal
  }, [cartItems]); // Watch for changes in cartItems

  const calculateSubtotal = (items) => {
    const newSubtotal = items.reduce((total, item) => total + item.total, 0);
    setSubtotal(newSubtotal);
  }
  const handleUpdateTotal = (updatedTotal) => {
    setSubtotal(prevSubtotal => prevSubtotal + updatedTotal);
  }

  const handleDelete = (itemId) => {
    setCartItems(prevItems => prevItems.filter(item => item._id !== itemId));
  }

  return (
    <div className="">
      <div>
        <NavBar />
      </div>

      <h2 className='mycart'> MY CART</h2>


      <div className='col-md-2 '>
        <div className='subT'>
          <h2 style={{ fontSize: '35px' }}>SubTotal:</h2>
          <h2 className='subtotal'> {subtotal}/-</h2>

        </div>
        <Link to={`/payment?subtotal=${subtotal}`}>
          <button className="continue">Confirm</button>
        </Link>
      </div>

       <div className='items'>
      <ul>
        {cartItems.map(item => (
          <CartItem key={item._id} item={item} onDelete={handleDelete} onUpdateTotal={handleUpdateTotal} />
        ))}
      </ul>
      </div>

    
    </div>

  );
};

export default CartItems;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

function GetProduct() {
  const [product, setProduct] = useState([]);
  
  useEffect(() => {
    axios.get('/stall/getProduct') 
    .then((result) => {       
        const dataWithIds = result.data;
        setProduct(dataWithIds);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`/stall/deleteProduct/${id}`) // Use the correct route URL
        .then(res => {
            console.log(res);
            window.location.reload();
        })
        .catch(err => console.log(err));
}

  return (
    <div className='d-flex vh-100 justify-content-center align-items-center'>
  <div className='w-100 bg-white rounded p-3'>
    <div className='table-responsive'>
      <table className='table table-striped table-bordered'>
        <thead className='thead-dark'>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {product.map(product => {
            return <tr key={product._id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.description}</td>
              <td>
                            
              <Link to={`/update/${product._id}`} className="btn btn-success">UPDATE</Link>

                <button className='btn btn-danger btn-sm' 
                  onClick={(e) => handleDelete(product._id)}>DELETE
                </button>
              </td>
            </tr>
          })
        }
        </tbody>
      </table>
    </div>
  </div>
</div>

  );
}

export default GetProduct;

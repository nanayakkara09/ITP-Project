import React, { useContext, useState, useEffect } from 'react';
import { StallContext } from "../../contex/stallContext";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function StallOwnerDashboard() {
    const {stall } = useContext(StallContext);
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState({ name: '', price: '', image: '' });

    useEffect(() => {
      // Fetch the products from the backend API when the component mounts
      fetch('/stall/getAllProducts')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => setProducts(data))
        .catch((error) => console.error('Error fetching products:', error));
    }, []);
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setProduct({ ...product, [name]: value });
    };
  
    const handleFileChange = (event) => {
      setProduct({ ...product, image: event.target.files[0] });
    };
    
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const formData = new FormData();
        formData.append('name', product.name);
        formData.append('price', product.price);
        formData.append('description', product.description);
        formData.append('image', product.image);
  
        const response = await fetch('http://localhost:8000/stall/createProduct', {
          method: 'POST',
          body: formData,
        });
  
        if (response.ok) {
          // Product added successfully, refresh the product list
          window.location.reload();
        } else {
          console.error('Failed to add product');
        }
      } catch (error) {
        console.error('Error adding product:', error);
      }
    };

  return (
    <div className="container">
      <h1 className="my-4">Admin Page</h1>
      {!!stall && (<h2>Hi {stall.fName}!</h2>)}

      <div className="admin-product-form-container">
        <form onSubmit={handleSubmit}>
          <h3>Add a New Product</h3>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Enter product name"
              name="name"
              value={product.name}
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="number"
              placeholder="Enter product price"
              name="price"
              value={product.price}
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              placeholder="Enter product Description"
              name="description"
              value={product.description}
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="file"
              accept="image/png, image/jpeg, image/jpg"
              name="image"
              onChange={handleFileChange}
              className="form-control"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add Product
          </button>
        </form>
      </div>

      <div className="product-display">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Product Image</th>
              <th>Product Name</th>
              <th>Product Price</th>
              <th>Product Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>
                  <img
                    src={`/api/products/${product.image}`}
                    alt={product.name}
                    height="100"
                  />
                </td>
                <td>{product.name}</td>                
                <td>${product.price}/-</td>
                <td>{product.description}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteProduct(product._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

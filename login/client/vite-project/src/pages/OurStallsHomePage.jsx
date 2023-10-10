import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './OurStallsHomePage.css';

function OurStallsHomePage() {
    const [searchTerm, setSearchTerm] = useState('');
  
    // Replace this with your actual stall data
    const stalls = [
      { id: 1, name: 'Pizza Mart', description: 'Welcome to Pizza Mart, where every slice is a masterpiece Indulge in a symphony of flavors with our handcrafted pizzas,made from the freshest ingredients.Savor perfection in every bite at Pizza Mart', 
            image: '../stallImages/pizza mart.png' },

      { id: 2, name: 'හෙළ බොජුන්', description: 'ආයුබෝවන්! හෙළ බොජුන් වෙත ඔබව සාදරයෙන් පිළිගනිමු', 
            image: '../stallImages/' },

      { id: 3, name: 'Sweet Serenity', description: 'Sweet Serenity is a charming and delightful sweet shop that offers a haven for those with a penchant for confectionery delights. Nestled in the heart of a cozy neighborhood, this boutique-style shop is a haven for anyone seeking a moment of sugary escape.', 
            image: '../stallImages' },

      { id: 4, name: 'Asiano', description: 'Asian cuisine is local, authentic, and traditional. It is rich in flavor and taste from the herbs and spices used in the preparations. Asian cuisine features multicultural dishes from diverse cultures and origins from southeast Asia, Europe, America, and around the globe',
            image: '../stallImages' },
    ];
  
    const filteredStalls = stalls.filter((stall) =>
      stall.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
      <div className="wrapper">
        <div className="container mt-8 transparent-container">
          <h2 className="header">Welcome to the STREET BITEZ</h2>
          <p className="sub-header">Discover delicious food stalls.</p>
  
          {/* Search Bar */}
          <div className="search-bar mt-4">
            <input
              type="text"
              placeholder="Search for a stall..."
              className="form-control"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          </div>
  
          {/* Available Food Stalls Section */}
          <div className="mt-5">
            <h3 className="stalls-heading">Available Food Stalls</h3>
            <br/>
            <br/>
            <br/>
            
            <div className="row">
              {filteredStalls.map((stall) => (
                <div key={stall.id} className="col-md-3 mb-4">
                  <div className="card">
                    <img
                      src={stall.image}
                      className="card-img-top"
                      alt={stall.name}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{stall.name}</h5>
                      <p className="card-text">{stall.description}</p>
                      <Link to={`/shop/${stall.id}`} className="btn btn-primary">
                        View Stall
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        
      </div>
    );
}

export default OurStallsHomePage;

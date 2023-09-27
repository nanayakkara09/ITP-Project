import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, InputGroup } from 'react-bootstrap';
import ReactStars from 'react-rating-stars-component';
import { useParams } from 'react-router-dom';

const SriLankanFoodStall = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { shopId } = useParams();
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const stall = {
    name: 'හෙළ  බොජුන් ',
    description: 'Experience the flavors of Sri Lanka!',
    logo: '../../images/sri-lankan-logo.png', // Update the logo path
    rating: 4.7, // Update the rating
    foodItems: [
      // Add your Sri Lankan food items here
      { name: 'Rice and Curry-Veg', category: 'Main Course', rating: 4.5, price: 400, image: '../../images/rice-and-curry.jpg' },
      { name: 'Rice and Curry- Fish', category: 'Main Course', rating: 4.5, price: 430, image: '../../images/rice-and-curry.jpg' },
      { name: 'Rice and Curry- Egg', category: 'Main Course', rating: 4.5, price: 420, image: '../../images/rice-and-curry.jpg' },
      { name: 'Rice and Curry- Chicken', category: 'Main Course', rating: 4.3, price: 450, image: '../../images/rice-and-curry.jpg' },
      { name: 'Hoppers', category: 'Breakfast', rating: 4.3, price: 20, image: '../../images/hoppers.jpg' },
      { name: 'රොටී ', category: 'Breakfast', rating: 3.2, price: 150, image: '../../images/hoppers.jpg' },
      { name: 'Kurakkan Rottee', category: 'Breakfast', rating: 3.2, price: 150, image: '../../images/hoppers.jpg' },
      { name: 'Pittu', category: 'Breakfast', rating: 4.4, price: 200, image: '../../images/hoppers.jpg' },
      { name: ' Chicken Kottu', category: 'Kottu', rating: 4.6, price: 700, image: '../../images/kottu-roti.jpg' },
      { name: ' Cheese Kottu', category: 'Kottu', rating: 5.2, price: 1200, image: '../../images/kottu-roti.jpg' },
      { name: ' Egg Kottu', category: 'Kottu', rating: 4, price: 600, image: '../../images/kottu-roti.jpg' },
      { name: 'ඉඳි ආප්ප ', category: 'Breakfast', rating: 5, price: 250, image: '../../images/rice-and-curry.jpg' },
      { name: ' Milk Rice', category: 'Breakfast', rating: 4.6, price: 50, image: '../../images/kottu-roti.jpg' },
      { name: 'Fried Rice', category: 'Popular', rating: 4.5, price: 550, image: '../../images/rice-and-curry.jpg' },
      { name: 'Chicken Biriyani', category: 'Popular', rating: 5, price: 800, image: '../../images/rice-and-curry.jpg' },
      { name: ' Those', category: 'Others', rating: 4.6, price: 200, image: '../../images/kottu-roti.jpg' },
      
    ],
  };

  // Get unique categories from foodItems
  const categories = [...new Set(stall.foodItems.map((item) => item.category))];

  const filteredFoodItems = stall.foodItems.filter((item) => {
    return (
      (selectedCategory === 'All' || item.category === selectedCategory) &&
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <Container>
      <Row className="mt-4">
        <Col xs={12} md={3}>
          <Card>
            <Card.Img variant="top" src={stall.logo} alt={`${stall.name} Logo`} />
            <Card.Body>
              <Card.Title>{stall.name}</Card.Title>
              <Card.Text>
                {stall.description}
                <ReactStars
                  count={5}
                  value={stall.rating}
                  size={24}
                  edit={false}
                  isHalf={true}
                />
              </Card.Text>
            </Card.Body>
          </Card>
          <div className="mt-3">
            <h5>Categories</h5>
            <ul>
              <li
                className={selectedCategory === 'All' ? 'active-category' : ''}
                onClick={() => setSelectedCategory('All')}
              >
                All
              </li>
              {categories.map((category, index) => (
                <li
                  key={index}
                  className={selectedCategory === category ? 'active-category' : ''}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
        </Col>
        <Col xs={12} md={9}>
          <Row>
            <Col xs={12} lg={12}>
              <Form.Group>
                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder="Search Food Items"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </InputGroup>
              </Form.Group>
            </Col>
          </Row>
          <br />
          <br />

          <Row>
            {filteredFoodItems.map((item, index) => (
              <Col xs={12} md={6} lg={4} key={index}>
                <Card className="mb-3">
                  <Card.Img variant="top" src={item.image} alt={item.name} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                      <div>
                        <ReactStars
                          count={5}
                          value={item.rating}
                          size={16}
                          edit={false}
                          isHalf={true}
                        />
                      </div>
                    </Card.Text>
                    <p>Price: {item.price} LKR</p>
                    <button onClick={() => addToCart(item)}>Add to Cart</button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default SriLankanFoodStall;

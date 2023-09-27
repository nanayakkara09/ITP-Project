import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, InputGroup } from 'react-bootstrap';
import ReactStars from 'react-rating-stars-component';
import { useParams } from 'react-router-dom';

const PizzaMart = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { shopId } = useParams();
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  // Sample stall data (replace with your actual data)
  const stall = {
    name: 'PIZZA MART',
    description: 'Delicious pizza and more!',
    logo: '../stallImages/pizza mart.png',
    rating: 4.5,
    foodItems: [
      { name: 'Vegitable and Cheese Pizza', category: 'Veg Pizza', rating: 4, price: 890, image:'../stallImages/pexels-vincent-rivaud-2147491.jpg' },
      { name: 'Olive mized veg Pizza', category: 'Veg Pizza', rating: 4, price: 890, image:'../stallImages/pexels-photo-5175567.jpeg' },
      { name: 'Ultimate veg Pizza', category: 'Veg Pizza', rating: 4.5, price: 850, image:'../stallImages/pexels-kristina-paukshtite-1146760.jpg' },
      { name: 'Vegitable and Cheese Pizza', category: 'Veg Pizza', rating: 4, price: 890, image:'../stallImages/pexels-photo-5175567.jpeg' },
      { name: 'Vegitable and Cheese Pizza', category: 'Veg Pizza', rating: 4, price: 850, image:'../../images/pexels-kristina-paukshtite-1146760.jpg' },
      { name: 'Grilled chicken with peparoni', category: 'Non-veg Pizza', rating: 4.5, price: 1000, image:'../../images/pexels-kristina-paukshtite-1146760.jpg' },
      { name: 'Devilled chicken', category: 'Non-veg Pizza', rating: 4.5, price: 1000, image:'../../images/pexels-kristina-paukshtite-1146760.jpg' },
      { name: 'Beef pizza', category: 'Non-veg Pizza', rating: 4.5, price: 1300, image:'../../images/pexels-kristina-paukshtite-1146760.jpg' },
      { name: 'Chocolate Lava Cake', category: 'Desserts', rating: 5, price: 520, image:'../stallImages/pexels-photo-10480244.jpeg' },
      { name: 'Sprite', category: 'Beverages', rating: 4, price: 300, image:''},
      
      // Add more food items with different categories
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
          <br/>
          <br/>
          
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

export default PizzaMart;

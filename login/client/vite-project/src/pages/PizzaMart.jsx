import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, InputGroup } from 'react-bootstrap';
import ReactStars from 'react-rating-stars-component';
import { useParams } from 'react-router-dom';
import './PizzaMart.css';

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
    logo: '/stallImages/pizza mart.png',
    rating: 4.5,

    foodItems: [
      { name: 'Vegitable and Mushroom Pizza', category: 'Veg Pizza', rating: 4, price: 890, image:'/stallImages/veg&cheesePizza.jpeg' },
      { name: 'Olive mized veg Pizza', category: 'Veg Pizza', rating: 4, price: 890, image:'/stallImages/olive mized veg.jpeg' },
      { name: 'Ultimate veg Pizza', category: 'Veg Pizza', rating: 4.5, price: 850, image:'/stallImages/unlveg.jpeg' },
      { name: 'Vegitable and Cheese Pizza', category: 'Veg Pizza', rating: 4, price: 890, image:'/stallImages/vegi.jpeg' },
      { name: 'Cheese Pizza', category: 'Veg Pizza', rating: 4, price: 850, image:'/stallImages/cheese.jpeg' },
      { name: 'Grilled chicken with peparoni', category: 'Non-veg Pizza', rating: 4.5, price: 1000, image:'/stallImages/pep.jpeg' },
      { name: 'Devilled chicken', category: 'Non-veg Pizza', rating: 4.5, price: 1000, image:'/stallImages/dev.jpeg' },
      { name: 'Beef pizza', category: 'Non-veg Pizza', rating: 4.5, price: 1300, image:'/stallImages/beef.jpeg' },
      { name: 'Chocolate Lava Cake', category: 'Desserts', rating: 5, price: 520, image:'/stallImages/choclava.jpg' },
      { name: 'Sprite', category: 'Beverages', rating: 4, price: 300, image:'/stallImages/sprite.jpeg'},
      
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
        
       <Card className="mb-7 card-logo">
        {/* Remove the Card.Img component */}
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
      <Card className="mb-4"> {/* Increase mb (margin-bottom) to add more spacing */}
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
        </Card.Body>
        <Card.Footer>
          <button onClick={() => addToCart(item)}>Add to Cart</button>
        </Card.Footer>
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
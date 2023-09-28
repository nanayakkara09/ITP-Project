import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, InputGroup } from 'react-bootstrap';
import ReactStars from 'react-rating-stars-component';
import { useParams } from 'react-router-dom';

const Asiano = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { shopId } = useParams();
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const stall = {
    name: 'Asiano',
    description: 'Explore the flavors of Asia!',
    logo: '../../images/asiano-logo.png', // Update the logo path
    rating: 4.5, // Update the rating
    foodItems: [
      // Add your Asian food items here
      { name: 'Sushi', category: 'Japanese', rating: 4.8, price: 1200, image: '../../images/sushi.jpg' },
      { name: 'Sashimi', category: 'Japanese', rating: 2.8, price: 1500, image: '../../images/sushi.jpg' },
      { name: 'Oden', category: 'Japanese', rating: 2.5, price: 1200, image: '../../images/sushi.jpg' },
      { name: 'Miso Soup', category: 'Japanese', rating: 4.8, price: 1000, image: '../../images/sushi.jpg' },
      { name: 'Pad Thai', category: 'Thai', rating: 4.6, price: 850, image: '../../images/pad-thai.jpg' },
      { name: 'Som tam', category: 'Thai', rating: 3.2, price: 1000, image: '../../images/pad-thai.jpg' },
      { name: 'Thai fried rice', category: 'Thai', rating: 5, price: 1250, image: '../../images/pad-thai.jpg' },
      { name: 'Chinese Noodles', category: 'Chinese', rating: 4.7, price: 700, image: '../../images/dim-sum.jpg' },
      { name: 'Mapo Tofu', category: 'Chinese', rating: 3.2, price: 800, image: '../../images/dim-sum.jpg' },
      { name: 'Wonton Soup', category: 'Chinese', rating: 6, price: 1800, image: '../../images/dim-sum.jpg' },
      { name: 'Rameon', category: 'Korean', rating: 6.4, price: 750, image: '../../images/dim-sum.jpg' },
      { name: 'Bibimbap', category: 'Korean', rating: 3, price: 2300, image: '../../images/dim-sum.jpg' },
      { name: 'Jabche', category: 'Korean', rating: 5.8, price: 1900, image: '../../images/dim-sum.jpg' },
      { name: 'Kimchi', category: 'Korean', rating: 6, price: 2500, image: '../../images/dim-sum.jpg' },
      { name: 'Dim Sum', category: 'Korean', rating: 3.5, price: 1300, image: '../../images/dim-sum.jpg' },
      { name: 'Rice Cakes', category: 'Korean', rating: 4.7, price: 1200, image: '../../images/dim-sum.jpg' },
      { name: 'Dumplings', category: 'Chinese', rating: 5.0, price: 950, image: '../../images/dim-sum.jpg' },
      { name: 'Butter Chicken', category: 'Indian', rating: 6.2, price: 600, image: '../../images/dim-sum.jpg' },
      { name: 'Naan Rottee', category: 'Indian', rating: 4.2, price: 200, image: '../../images/dim-sum.jpg' },
      { name: 'Parata', category: 'Indian', rating: 3.8, price: 150, image: '../../images/dim-sum.jpg' },
      { name: 'Matar Paneer', category: 'Indian', rating: 5.2, price: 600, image: '../../images/dim-sum.jpg' },
      { name: 'Masala Chai', category: 'Indian', rating: 8.1, price: 230, image: '../../images/dim-sum.jpg' },
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

export default Asiano;

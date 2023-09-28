import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, InputGroup } from 'react-bootstrap';
import ReactStars from 'react-rating-stars-component';
import { useParams } from 'react-router-dom';


const SweetSerenity = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { shopId } = useParams();
  const [cart, setCart] = useState([]);
  
  const addToCart = (item) => {
    setCart([...cart, item]);
  };
  

  const stall = {
    name: 'Sweet Serenity',
    description: 'Indulge in sweetness!',
    logo: '../../images/sweet-serenity-logo.png',
    rating: 5,
    foodItems: [
      
      { name: 'Chocolate Donut', category: 'Desserts', rating: 5, price: 150, image: '../../images/chocolate-donut.jpg' },
      { name: 'Hot Chocolate',  category: 'Drinks', rating: 4, price: 200, image: '../../images/hot-chocolate.jpg' },
      { name: 'Vanilla Cupcake', category: 'Cakes', rating: 4.5, price: 250, image: '../../images/vanilla-cupcake.jpg' },
      { name: 'Milkshake(Chocolate/Vanilla/Strawberry)', category: 'Drinks', rating: 4.5, price: 500, image: '../../images/vanilla-cupcake.jpg' },
      { name: 'Sweet Latte', category: 'Drinks', rating: 4.5, price: 400, image: '../../images/vanilla-cupcake.jpg' },
      { name: 'Waffles', category: 'Desserts', rating: 2.5, price: 1700, image: '../../images/vanilla-cupcake.jpg' },
      { name: 'Chocolate Muffin', category: 'Desserts', rating: 3.1, price: 990, image: '../../images/vanilla-cupcake.jpg' },
      { name: 'Red Velvet Cake', category: 'Cakes', rating: 4.5, price: 1200, image: '../../images/vanilla-cupcake.jpg' },
      { name: 'Pink Layer Cake', category: 'Cakes', rating: 5.1, price: 1500, image: '../../images/vanilla-cupcake.jpg' },
      { name: 'Cheese Cake', category: 'Cakes', rating: 5.5, price: 1890, image: '../../images/vanilla-cupcake.jpg' },
      { name: 'Chocolate Ice cream', category: 'Ice Cream', rating: 4.2, price: 200, image: '../../images/vanilla-cupcake.jpg' },
      { name: 'Caramel Pudding', category: 'Desserts', rating: 5.1, price: 300, image: '../../images/vanilla-cupcake.jpg' },
      { name: 'Ice Coffee', category: 'Drinks', rating: 7.0, price: 200, image: '../../images/vanilla-cupcake.jpg' },
      { name: 'Falooda', category: 'Drinks', rating: 3.1, price: 180, image: '../../images/vanilla-cupcake.jpg' },
      { name: 'Choclate Eclairs', category: 'Desserts', rating: 4.7, price: 130, image: '../../images/vanilla-cupcake.jpg' },
      { name: 'Cool Milo', category: 'Drinks', rating: 5.0, price: 300, image: '../../images/vanilla-cupcake.jpg' },
    ]
        
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

export default SweetSerenity;

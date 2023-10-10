import React, { useState , useEffect } from 'react';
import { Container, Row, Col, Card, Form, InputGroup, Button } from 'react-bootstrap';
import ReactStars from 'react-rating-stars-component';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const SweetSerenity = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { shopId } = useParams();
  const [cart, setCart] = useState([]);
  const [itemQuantities, setItemQuantities] = useState(1);
  
  const handleQuantityChange = (item, action) => {
    const updatedQuantities = { ...itemQuantities };

    const index = stall.foodItems.findIndex(i => i.name === item.name);

    if (action === 'increase') {
      updatedQuantities[index] = (updatedQuantities[index] || 0) + 1;
    } else if (action === 'decrease' && updatedQuantities[index] > 1) {
      updatedQuantities[index] -= 1;
    }

    setItemQuantities(updatedQuantities);
    localStorage.setItem('itemQuantities', JSON.stringify(updatedQuantities));

    
  };



  const loadItemQuantities = () => {
    const storedQuantities = JSON.parse(localStorage.getItem('itemQuantities'));
    return storedQuantities || {};
  };

  useEffect(() => {
    setItemQuantities(loadItemQuantities());
  }, []);


  const calculateTotalPrice = (item, quantity) => {
    return  item.price * quantity;
  };
  


  const addToCart = (item) => {
    const { name, price, image } = item;
    const quantity = itemQuantities[filteredFoodItems.indexOf(item)] || 1;
  
    axios.post('http://localhost:8000/order/add-to-cart', { name, quantity, price, image })
    .then((response) => {
      alert(response.data.message);
    })
    .catch((error) => {
      console.error(error);
      alert('Error adding item to cart');
    });
  
  };
  

  const stall = {
    name: 'Sweet Serenity',
    description: 'Indulge in sweetness!',
    logo: '/stallImages/Grey Brown Beige Minimalist Photo Collage Business Facebook Cover.png',
    rating: 5,
    foodItems: [
      
      { name: 'Chocolate Donut', category: 'Desserts', rating: 5, price: 150, image: '/stallImages/donut.jpeg' },
      { name: 'Hot Chocolate',  category: 'Drinks', rating: 4, price: 200, image: '/stallImages/hc.jpeg' },
      { name: 'Vanilla Cupcake', category: 'Cakes', rating: 4.5, price: 250, image: '/stallImages/cupcake.jpeg' },
      { name: 'Milkshake(Chocolate/Vanilla/Strawberry)', category: 'Drinks', rating: 4.5, price: 500, image: '/stallImages/milk.jpeg' },
      { name: 'Sweet Latte', category: 'Drinks', rating: 4.5, price: 400, image: '/stallImages/latte.jpeg' },
      { name: 'Waffles', category: 'Desserts', rating: 2.5, price: 1700, image: '/stallImages/waf.jpeg' },
      { name: 'Chocolate Muffin', category: 'Desserts', rating: 3.1, price: 990, image: '/stallImages/muf.jpeg' },
      { name: 'Red Velvet Cake', category: 'Cakes', rating: 4.5, price: 1200, image: '/stallImages/rv.jpeg' },
      { name: 'Pink Layer Cake', category: 'Cakes', rating: 5.1, price: 1500, image: '/stallImages/pink.jpeg' },
      { name: 'Cheese Cake', category: 'Cakes', rating: 5.5, price: 1890, image: '/stallImages/cheesecake.jpeg' },
      { name: 'Chocolate Ice cream', category: 'Ice Cream', rating: 4.2, price: 200, image: '/stallImages/ice.jpeg' },
      { name: 'Caramel Pudding', category: 'Desserts', rating: 5.1, price: 300, image: '/stallImages/pudding.jpeg' },
      { name: 'Ice Coffee', category: 'Drinks', rating: 7.0, price: 200, image: '/stallImages/icec.jpeg' },
      { name: 'Falooda', category: 'Drinks', rating: 3.1, price: 180, image: '/stallImages/falooda.jpg' },
      { name: 'Choclate Eclairs', category: 'Desserts', rating: 4.7, price: 130, image: '/stallImages/ec.jpeg' },
      { name: 'Cool Milo', category: 'Drinks', rating: 5.0, price: 300, image: '/stallImages/milo.jpg' },
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
        <Col xs={12} className="mb-4">
          <img
            src={stall.logo}
            alt={`${stall.name} Logo`}
            className="img-fluid"
          />
        </Col>
          <Col xs={12} md={3}>
            
              
              
                <Card.Title>{stall.name}</Card.Title>
                
                  {stall.description}
                  <ReactStars
                    count={5}
                    value={stall.rating}
                    size={24}
                    edit={false}
                    isHalf={true}
                  />
                
              
            
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
                <Card className="mb-3 custom-card">
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

export default SweetSerenity;

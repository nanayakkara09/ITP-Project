import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './Home.css';
import foodImage1 from '../images/res.jpeg';
import foodImage2 from '../images/event.jpg';
import foodImage3 from '../images/menu.jpg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slideImage1 from '../images/bg1.jpg';
import slideImage2 from '../images/bg2.jpeg';
import slideImage3 from '../images/bg3.jpg';
import slideImage4 from '../images/bg4.jpg';

export default function Home() {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="home-container">
      <div className="bg-image"></div>
      <div className="content">
        <br></br>
        <br></br>
        <h1>Welcome to Street Bitz</h1>
        <h5>Explore a wide range of delicious food options.</h5>
        <br></br>
        <div className="frame-container">
          <div className="frame">
            <h4>Our Restaurants</h4>
            <img src={foodImage1} alt="Food 1" />
            <p>
              "Experience culinary excellence at Our Restaurants. Enjoy a diverse menu of mouthwatering dishes prepared with the finest ingredients, served in a warm and inviting ambiance. Discover the perfect blend of flavors and exceptional service at Our Restaurants."
            </p>
            <Link to="/login">
              <button>See More..</button>
            </Link>
          </div>
          <div className="frame">
            <h4>Book Your Event</h4>
            <img src={foodImage2} alt="Food 2" />
            <p>
              "Host your special event with us at Book Your Event. Create unforgettable memories in our stunning venue, tailored to your unique occasion. Our team will ensure every detail is taken care of, leaving you free to enjoy your celebration. Book Your Event and make it an unforgettable experience."
            </p>
            <Link to="/login">
              <button>Book Now</button>
            </Link>
          </div>
          <div className="frame">
            <h4>See Menu</h4>
            <img src={foodImage3} alt="Food 3" />
            <p>
              "Explore our mouthwatering menu at See Menu. Indulge in a variety of delicious dishes, crafted with passion and finest ingredients. From savory appetizers to delectable desserts, our menu offers a culinary delight for every palate. Visit See Menu and satisfy your cravings today."
            </p>
            <Link to="/login">
              <button>See Menu..</button>
            </Link>
          </div>
        </div>
        <h2>Take a Quick Look</h2>
        <div className="slideshow-container">
          <Slider {...settings}>
            <div className="slide">
              <img src={slideImage1} alt="Slide 1" />
            </div>
            <div className="slide">
              <img src={slideImage2} alt="Slide 2" />
            </div>
            <div className="slide">
              <img src={slideImage3} alt="Slide 3" />
            </div>
            <div className="slide">
              <img src={slideImage4} alt="Slide 4" />
            </div>
          </Slider>
        </div>
      </div>
      <hr></hr>
      <footer className="footer">
  <div className="container">
    <div className="contact-section">
      <h4>Contact Us</h4>
      <p>Phone: 123-456-7890</p>
      <p>Email: info@foodstore.com</p>
    </div>
    
    <div className="social-section">
    </div>
    <hr></hr>
    <p className="text-center">All rights reserved &copy; </p>
  </div>
</footer>
    </div>
  );
}
import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../contex/userContex';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './Dashbord.css'; // Import custom CSS file for styling
import NavBar from '../components/NavBar';
import foodImage1 from '../images/res.jpeg';
import foodImage2 from '../images/event.jpg';
import foodImage3 from '../images/menu.jpg';
import feedbackIcon from '../images/sup.png';
import Footer from "../components/Footer";

export default function Dashbord() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      axios.get('/profile').then(({ data }) => {
        setUser(data);
      });
    }
  }, [user, setUser]);

  const handleLogout = async () => {
    try {
      await axios.post('/logout');
      setUser(null);
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };
  const navigateToFeedback = () => {
    navigate('/feedbacks'); 
  };

  return (
    <div  className="home-container">
    
      <NavBar />
     
      <div className="bg-image"></div>
      <div className="contents">
        <h1>Welcome to StreetBitez</h1>
        <br></br>
        {!!user && <h2>Hi {user.name}!</h2>}
        <br></br>

        {/* Three boxes similar to the Home component */}
        <div className="frame-container">
          <div className="frame">
            <h4>Our Restaurants</h4>
            <img src={foodImage1} alt="Food 1" />
            <p>
              "Experience culinary excellence at Our Restaurants. Enjoy a diverse menu of mouthwatering dishes prepared with the finest ingredients, served in a warm and inviting ambiance. Discover the perfect blend of flavors and exceptional service at Our Restaurants."
            </p>
            <Link to="">
              <button>See More..</button>
            </Link>
          </div>
          <div className="frame">
            <h4>Book Your Event</h4>
            <img src={foodImage2} alt="Food 2" />
            <p>
              "Host your special event with us at Book Your Event. Create unforgettable memories in our stunning venue, tailored to your unique occasion. Our team will ensure every detail is taken care of, leaving you free to enjoy your celebration. Book Your Event and make it an unforgettable experience."
            </p>
            <Link to="">
              <button>Book Now</button>
            </Link>
          </div>
          <div className="frame">
            <h4>See Menu</h4>
            <img src={foodImage3} alt="Food 3" />
            <p>
              "Explore our mouthwatering menu at See Menu. Indulge in a variety of delicious dishes, crafted with passion and finest ingredients. From savory appetizers to delectable desserts, our menu offers a culinary delight for every palate. Visit See Menu and satisfy your cravings today."
            </p>
            <Link to="">
              <button>See Menu..</button>
            </Link>
          </div>
        </div>
        <hr></hr>
              <Footer/>
      </div>
      <div className="feedback-button" onClick={navigateToFeedback}>
          <img src={feedbackIcon} alt="Feedback" />
       
      </div>

    </div>
  );
}

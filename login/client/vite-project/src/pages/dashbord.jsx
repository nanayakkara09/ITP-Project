import { useContext, useEffect } from "react";
import { UserContext } from "../../contex/userContex";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './Dashbord.css'; // Import custom CSS file for styling

export default function Dashbord() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      axios.get("/profile").then(({ data }) => {
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

  return (
    <div>
      <div className="bg-image"></div>
      <div className='content'>
        <h1>Welcome to Food Store</h1>
        <br></br>
        {!!user && <h2>Hi {user.name}!</h2>}
        <br></br>
        <div className="feedback-link">
          <Link to="/feedbacks">
            <button >
              <img src="path/to/feedback-icon.png" alt="Feedback" />
            </button>
          </Link>
        </div>
      </div>
      <footer className="footers">
        <div className="container">
          <hr></hr>
          <p className="text-center">All rights reserved &copy; </p>
        </div>
      </footer>
    </div>
  );
}

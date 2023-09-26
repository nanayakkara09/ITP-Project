import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavBar from '../components/adminNavBar';

export default function SeesupportPage() {
  const [supportList, SetsupportList] = useState([]);
  const [filteredSupportList, setFilteredSupportList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchSupportList = async () => {
      try {
        const { data } = await axios.get('/all-support');
        SetsupportList(data);
        setFilteredSupportList(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchSupportList();
  }, []);

  const handleSearch = () => {
    const filteredSupport = supportList.filter((support) =>
      support.userName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredSupportList(filteredSupport);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div>
      <AdminNavBar />
      <div className="see-support-container">
        <h1>Support</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        {isLoading ? (
          <p>Loading feedback data...</p>
        ) : filteredSupportList.length > 0 ? (
          <table>
            <thead>
              <tr>
               
                <th>User Name</th>
                <th>Support message</th>
                <th>Date and Time</th>
              </tr>
            </thead>
            <tbody>
              {filteredSupportList.map((support) => (
                <tr key={support._id}>
                 
                  <td>{support.userName}</td>
                  <td>{support.supportText}</td>
                  <td>{support.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No Support data available.</p>
        )}
      </div>
      <button className="print-button" onClick={handlePrint}>
        Print Table
      </button>
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';

const TpoDashboard = () => {
  const [tpoInfo, setTpoInfo] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTpoInfo = async () => {
      try {
        const token = localStorage.getItem('token'); // Assuming the token is stored in localStorage

        if (!token) {
          throw new Error('No token found');
        }

        const response = await axios.get('http://localhost:3000/api/tpo/info', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setTpoInfo(response.data.tpo);
      } catch (error) {
        console.error('Error fetching TPO info:', error);
        setError('Failed to fetch TPO information');
      }
    };

    fetchTpoInfo();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!tpoInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="tpo-dashboard-container">
      <h2>TPO Dashboard</h2>
      <div>
        <p><strong>TPO ID:</strong> {tpoInfo.tpoId}</p>
        <p><strong>Name:</strong> {tpoInfo.name}</p>
        <p><strong>Email:</strong> {tpoInfo.email}</p>
        <p><strong>Phone:</strong> {tpoInfo.phone}</p>
      </div>
    </div>
  );
};

export default TpoDashboard;

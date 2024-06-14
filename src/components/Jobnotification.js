
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import axios from 'axios';

import '../App.css';

const socket = io('http://localhost:3000');

const Jobnotification = () => {
  const [notifications, setNotifications] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');
  const [roleFilter, setRoleFilter] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    socket.on('connect', () => {
      console.log("Socket connected:", socket.connected);
    });

    socket.on('disconnect', () => {
      console.log("Socket disconnected:", socket.connected);
    });

    socket.on('error', (err) => {
      console.error("Socket error:", err.message);
      setError(err.message);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:3000/api/searchJobs?searchTerm=${searchTerm}&location=${location}`);
      if (response.data.error) {
        throw new Error(response.data.error);
      }
      const mappedData = response.data.results.map((result) => ({
        id: result.id,
        title: result.title,
        company: result.company.display_name,
        location: result.location.display_name,
        description: result.description,
        type: result.category.label, // Assuming this is the type property
        posted_date: result.created, // Assuming this is the posted_date property
        applyLink: result.redirect_url,
      }));
      setNotifications(mappedData);
      setError(null);
    } catch (error) {
      console.error('Error fetching job listings:', error.message);
      setError(error.message);
    }
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleRoleFilterChange = (e) => {
    setRoleFilter(e.target.value);
  };

  return (
    <div className="notification-container">
      <h1>Job Notifications</h1>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search jobs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <select value={type} onChange={handleTypeChange}>
          <option value="">All Types</option>
          <option value="full_time">Full-time</option>
          <option value="part_time">Part-time</option>
          <option value="contract">Contract</option>
          <option value="freelance">Freelance</option>
          <option value="internship">Internship</option>
        </select>
        <select value={roleFilter} onChange={handleRoleFilterChange}>
          <option value="">All Roles</option>
          <option value="freshers">Freshers</option>
          <option value="experienced">Experienced</option>
          <option value="intern">Intern</option>
        </select>
        <button type="submit">Search</button>
      </form>
      {notifications.length === 0 && <p>No job found</p>}
      <ul className="notification-list">
        {Array.isArray(notifications) &&
          notifications.map((notification, index) => (
            <li key={index} className="notification-item">
              <h2>{notification.title}</h2>
              <p><strong>Company:</strong> {notification.company}</p>
              <p><strong>Location:</strong> {notification.location}</p>
              <p><strong>Description:</strong> {notification.description}</p>
              <p><strong>Type:</strong> {notification.type}</p>
              <p><strong>Posted on:</strong> {new Date(notification.posted_date).toLocaleDateString()}</p>
              <a href={notification.applyLink} target="_blank" rel="noopener noreferrer">Apply</a>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Jobnotification;

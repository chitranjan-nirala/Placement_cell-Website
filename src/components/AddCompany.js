// AddCompany.js
import React, { useState } from 'react';
import axios from 'axios';

const AddCompany = ({ onCompanyAdded }) => {
  const [companyName, setCompanyName] = useState('');
  const [companyDescription, setCompanyDescription] = useState('');
  const [companyType, setCompanyType] = useState(''); // 'ongoing' or 'upcoming'
  const [error, setError] = useState('');

  const handleAddCompany = async (e) => {
    e.preventDefault();
    const newCompany = {
      name: companyName,
      description: companyDescription,
      type: companyType
    };

    try {
      const token = localStorage.getItem('token'); // Assuming the token is stored in localStorage

      if (!token) {
        throw new Error('No token found');
      }

      const response = await axios.post('http://localhost:3000/api/tpo/addCompany', newCompany, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      onCompanyAdded(response.data.company); // Notify parent component of the new company

      // Reset company fields after adding
      setCompanyName('');
      setCompanyDescription('');
      setCompanyType('');
    } catch (error) {
      console.error('Error adding company:', error);
      setError('Failed to add company');
    }
  };

  return (
    <div className="add-company-form">
      <h3>Add Company</h3>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleAddCompany}>
        <div className="form-group">
          <label>Company Name</label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            value={companyDescription}
            onChange={(e) => setCompanyDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label>Type</label>
          <select
            value={companyType}
            onChange={(e) => setCompanyType(e.target.value)}
            required
          >
            <option value="">Select Type</option>
            <option value="ongoing">Ongoing</option>
            <option value="upcoming">Upcoming</option>
          </select>
        </div>
        <button className="btn btn-primary" type="submit">Add Company</button>
      </form>
    </div>
  );
};

export default AddCompany;

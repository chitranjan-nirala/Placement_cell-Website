import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

const StudentRegister = () => {
  const [studentId, setStudentId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    // Basic form validation
    if (!studentId || !name || !email || !phone || !password || !confirmPassword) {
      alert('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      setPasswordsMatch(false);
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/api/student/register', {  // Update port here
        studentId,
        name,
        email,
        phone,
        password,
      });

      if (response.status === 201) {
        navigate('/student-login');
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert('Student already registered');
      } else {
        console.log('Registration error:', error);
      }
    }
  };

  return (
    <div className="student-registration-container">
      <div className="student-registration-content">
        <h2>Student Registration</h2>
        <form onSubmit={handleRegister}>
          <div>
            <label>Student ID</label>
            <input
              type="text"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Phone</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setPasswordsMatch(e.target.value === password);
              }}
              required
            />
            {!passwordsMatch && <p>Passwords do not match</p>}
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default StudentRegister;




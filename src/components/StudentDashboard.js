// StudentDashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';

const StudentDashboard = () => {
  const [studentInfo, setStudentInfo] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchStudentInfo = async () => {
      try {
        const token = localStorage.getItem('token'); // Assuming the token is stored in localStorage

        if (!token) {
          throw new Error('No token found');
        }

        const response = await axios.get('http://localhost:3000/api/student/info', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setStudentInfo(response.data.student);
      } catch (error) {
        console.error('Error fetching student info:', error);
        setError('Failed to fetch student information');
      }
    };

    fetchStudentInfo();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!studentInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="student-dashboard-container">
      <h2>Student Dashboard</h2>
      <div>
        <p><strong>Student ID:</strong> {studentInfo.studentId}</p>
        <p><strong>Name:</strong> {studentInfo.name}</p>
        <p><strong>Email:</strong> {studentInfo.email}</p>
        <p><strong>Phone:</strong> {studentInfo.phone}</p>
      </div>
    </div>
  );
};

export default StudentDashboard;



// **************************************after aading another button 
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import userprofile from '../assets/vector-users-icon.jpg';
import '../App.css';
import EditProfile from './EditProfile'; // Import EditProfile component

const StudentDashboard = () => {
  const [studentInfo, setStudentInfo] = useState(null);
  const [error, setError] = useState('');
  const [upcomingCompanies, setUpcomingCompanies] = useState([]);
  const [ongoingCompanies, setOngoingCompanies] = useState([]);
  const [editMode, setEditMode] = useState(false); // To toggle edit mode
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudentInfo = async () => {
      try {
        const token = localStorage.getItem('token');
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

  const fetchCompanyList = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No token found');
      }
      const response = await axios.get('http://localhost:3000/api/tpo/companies', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const { ongoing, upcoming } = response.data;

      // Separate companies into upcoming and ongoing
      const upcomingCompanies = upcoming.filter(company => company.type === 'upcoming');
      const ongoingCompanies = ongoing.filter(company => company.type === 'ongoing');

      setUpcomingCompanies(upcomingCompanies);
      setOngoingCompanies(ongoingCompanies);
    } catch (error) {
      console.error('Error fetching company list:', error);
      setError('Failed to fetch company list');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const handleEditProfile = () => {
    setEditMode(true);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
  };

  const handleProfileUpdate = (updatedStudentInfo) => {
    setStudentInfo(updatedStudentInfo);
    setEditMode(false);
  };

  const handleApplyOffCampusJobs = () => {
    // Redirect to job notification page
    navigate('/jobnotification');
  };

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!studentInfo) {
    return <div className="loading-message">Loading...</div>;
  }

  return (
    <div className="student-dashboard-container">
      <h2 className="dashboard-heading">Student Dashboard</h2>
      <div className="dashboard-content">
        {editMode ? (
          <EditProfile
            studentInfo={studentInfo}
            onProfileUpdate={handleProfileUpdate}
            onCancel={handleCancelEdit}
          />
        ) : (
          <div className="profile-section">
            <div className="profile-picture">
              <img src={userprofile} alt="Profile" className="profile-image" />
            </div>
            <div className="profile-details">
              <p className="detail-item"><strong>Name:</strong> {studentInfo.name}</p>
              <p className="detail-item"><strong>Student ID:</strong> {studentInfo.studentId}</p>
              <p className="detail-item"><strong>College:</strong> {studentInfo.graduationCollege}</p>
              <p className="detail-item"><strong>Branch:</strong> {studentInfo.stream}</p>
              <p className="detail-item"><strong>10th Percentage:</strong> {studentInfo.tenthPercentage}</p>
              <p className="detail-item"><strong>12th Percentage:</strong> {studentInfo.twelfthPercentage}</p>
              <p className="detail-item"><strong>Graduation CGPA:</strong> {studentInfo.graduationCGPA}</p>
              <p className="detail-item"><strong>Sixth Semester CGPA:</strong> {studentInfo.sixthSemesterCGPA}</p>
              {studentInfo.resume && (
                <p className="detail-item">
                  <strong>Resume:</strong> <a href={`/${studentInfo.resume}`} target="_blank" rel="noopener noreferrer">Download</a>
                </p>
              )}
              <button className="edit-profile-button" onClick={handleEditProfile}>Edit Profile</button>
            </div>
          </div>
        )}

        <div className="actions-section">
          <button className="action-button" onClick={fetchCompanyList}>View Companies</button>
          <button className="action-button" onClick={handleApplyOffCampusJobs}>Apply Off-campus Jobs</button>
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
      </div>

      {/* Render upcoming companies */}
      {upcomingCompanies.length > 0 && (
        <div className="company-list-container">
          <h3>Upcoming Companies</h3>
          <ul className="company-list">
            {upcomingCompanies.map(company => (
              <li key={company._id}>
                {company.name} - {company.description}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Render ongoing companies */}
      {ongoingCompanies.length > 0 && (
        <div className="company-list-container">
          <h3>Ongoing Companies</h3>
          <ul className="company-list">
            {ongoingCompanies.map(company => (
              <li key={company._id}>
                {company.name} - {company.description}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default StudentDashboard;

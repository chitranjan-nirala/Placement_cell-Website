import React, { useState } from 'react';
import axios from 'axios';

const EditProfile = ({ studentInfo, onProfileUpdate, onCancel }) => {
  const [formData, setFormData] = useState({
    name: studentInfo.name || '',
    email: studentInfo.email || '',
    phone: studentInfo.phone || '',
    twelfthPercentage: studentInfo.twelfthPercentage || '',
    tenthPercentage: studentInfo.tenthPercentage || '',
    tenthSchool: studentInfo.tenthSchool || '',
    twelfthCollege: studentInfo.twelfthCollege || '',
    graduationCollege: studentInfo.graduationCollege || '',
    graduationCGPA: studentInfo.graduationCGPA || '',
    sixthSemesterCGPA: studentInfo.sixthSemesterCGPA || '',
    skills: studentInfo.skills ? studentInfo.skills.join(', ') : '',
  });
  const [resumeFile, setResumeFile] = useState(null);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setResumeFile(e.target.files[0]);
  };

  const handleSaveProfile = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No token found');
      }

      // If resumeFile is not null, upload it
      if (resumeFile) {
        const resumeFormData = new FormData();
        resumeFormData.append('resume', resumeFile);

        await axios.post('http://localhost:3000/api/student/upload-resume', resumeFormData, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        });

        console.log('Resume uploaded successfully');
      }

      const response = await axios.put('http://localhost:3000/api/student/update', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log('Profile updated successfully:', response.data);
      onProfileUpdate(response.data.student); // Pass the updated student info to the parent component
    } catch (error) {
      console.error('Error updating profile:', error.response.data); // Log the server's response data
      setError('Failed to update profile. Please try again.');
    }
  };

  return (
    <div>
      <h2>Edit Profile</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Phone:
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          12th Percentage:
          <input
            type="text"
            name="twelfthPercentage"
            value={formData.twelfthPercentage}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          10th Percentage:
          <input
            type="text"
            name="tenthPercentage"
            value={formData.tenthPercentage}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          10th School:
          <input
            type="text"
            name="tenthSchool"
            value={formData.tenthSchool}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          12th College:
          <input
            type="text"
            name="twelfthCollege"
            value={formData.twelfthCollege}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Graduation College:
          <input
            type="text"
            name="graduationCollege"
            value={formData.graduationCollege}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Graduation CGPA:
          <input
            type="text"
            name="graduationCGPA"
            value={formData.graduationCGPA}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Current Semester SGPA:
          <input
            type="text"
            name="sixthSemesterCGPA"
            value={formData.sixthSemesterCGPA}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Skills:
          <input
            type="text"
            name="skills"
            value={formData.skills}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label >
          
          Resume:
          <input
          id='cv'
            type="file"
            name="resume"
            onChange={handleFileChange}
          />
        </label>
        <br />
        <button className='save' type="button" onClick={handleSaveProfile}>Save</button>
        <button className='cancel' type="button" onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default EditProfile;

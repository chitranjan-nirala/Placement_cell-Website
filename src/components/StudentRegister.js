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
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [tenthPercentage, setTenthPercentage] = useState('');
  const [tenthSchool, setTenthSchool] = useState('');
  const [twelfthPercentage, setTwelfthPercentage] = useState('');
  const [twelfthCollege, setTwelfthCollege] = useState('');
  const [graduationCollege, setGraduationCollege] = useState('');
  const [graduationCGPA, setGraduationCGPA] = useState('');
  const [stream, setStream] = useState('');
  const [sixthSemesterCGPA, setSixthSemesterCGPA] = useState('');
  const [isAdmin, ] = useState('');
  const [placementStatus, setPlacementStatus] = useState('');
  const [companyPlaced, setCompanyPlaced] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (
      !studentId ||
      !name ||
      !email ||
      !phone ||
      !password ||
      !confirmPassword ||
      !gender ||
      !dob ||
      !tenthPercentage ||
      !twelfthPercentage ||
      !stream
    ) {
      alert('Please fill in all required fields');
      return;
    }

    if (password !== confirmPassword) {
      setPasswordsMatch(false);
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/api/student/register', {
        studentId,
        name,
        email,
        phone,
        password,
        gender,
        dob,
        tenthPercentage,
        tenthSchool,
        twelfthPercentage,
        twelfthCollege,
        graduationCollege,
        graduationCGPA,
        stream,
        sixthSemesterCGPA,
        isAdmin,
        placementStatus,
        companyPlaced
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
<div className="container">
  <h2 className="text-center mt-3">Student Registration</h2>
  <form className="row g-3 needs-validation" onSubmit={handleRegister} noValidate>
    {/* First Column */}
    <div className="col-md-6">
      <label htmlFor="studentId" className="form-label">Student ID</label>
      <input
        type="text"
        className="form-control"
        id="studentId"
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
        required
      />

      <label htmlFor="name" className="form-label">Name</label>
      <input
        type="text"
        className="form-control"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <label htmlFor="email" className="form-label">Email</label>
      <input
        type="email"
        className="form-control"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label htmlFor="phone" className="form-label">Phone</label>
      <input
        type="tel"
        className="form-control"
        id="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
    </div>

    {/* Second Column */}
    <div className="col-md-6">
      <label htmlFor="password" className="form-label">Password</label>
      <input
        type="password"
        className="form-control"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
      <input
        type="password"
        className="form-control"
        id="confirmPassword"
        value={confirmPassword}
        onChange={(e) => {
          setConfirmPassword(e.target.value);
          setPasswordsMatch(e.target.value === password);
        }}
        required
      />
      {!passwordsMatch && <p className="error-message">Passwords do not match</p>}

      <label htmlFor="dob" className="form-label">Date of Birth</label>
      <input
        type="date"
        className="form-control"
        id="dob"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
        required
      />

      <label htmlFor="gender" className="form-label">Gender</label>
      <select
        className="form-select"
        id="gender"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        required
      >
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
    </div>

    {/* Additional Fields in First Column */}
    <div className="col-md-6">
      <label htmlFor="tenthPercentage" className="form-label">10th Percentage</label>
      <input
        type="number"
        className="form-control"
        id="tenthPercentage"
        value={tenthPercentage}
        onChange={(e) => setTenthPercentage(e.target.value)}
        required
      />

      <label htmlFor="tenthSchool" className="form-label">10th School</label>
      <input
        type="text"
        className="form-control"
        id="tenthSchool"
        value={tenthSchool}
        onChange={(e) => setTenthSchool(e.target.value)}
      />
    </div>

    {/* Additional Fields in Second Column */}
    <div className="col-md-6">
      <label htmlFor="twelfthPercentage" className="form-label">12th/Diploma Percentage</label>
      <input
        type="number"
        className="form-control"
        id="twelfthPercentage"
        value={twelfthPercentage}
        onChange={(e) => setTwelfthPercentage(e.target.value)}
        required
      />
      <label htmlFor="twelfthCollege" className="form-label">12th/Diploma College</label>
      <input
        type="text"
        className="form-control"
        id="twelfthCollege"
        value={twelfthCollege}
        onChange={(e) => setTwelfthCollege(e.target.value)}
      />
    </div>

    {/* Additional Fields in First Column */}
    <div className="col-md-6">
      <label htmlFor="graduationCollege" className="form-label">Graduation College</label>
      <input
        type="text"
        className="form-control"
        id="graduationCollege"
        value={graduationCollege}
        onChange={(e) => setGraduationCollege(e.target.value)}
      />
    </div>

    {/* Additional Fields in Second Column */}
    <div className="col-md-6">
      <label htmlFor="graduationCGPA" className="form-label">Graduation CGPA</label>
      <input
        type="number"
        className="form-control"
        id="graduationCGPA"
        value={graduationCGPA}
        onChange={(e) => setGraduationCGPA(e.target.value)}
      />
    </div>

    {/* Additional Fields in First Column */}
    <div className="col-md-6">
      <label htmlFor="stream" className="form-label">Stream</label>
      <select
        className="form-select"
        id="stream"
        
        value={stream}
        onChange={(e) => setStream(e.target.value)}
        required
      >
        <option value="">Select Stream</option>
        <option value="Engineering">CSE</option>
        <option value="Science">ECE</option>
        <option value="Commerce">Civil</option>
        <option value="Arts">IT</option>
      </select>
    </div>

    {/* Additional Fields in Second Column */}
    <div className="col-md-6">
      <label htmlFor="sixthSemesterCGPA" className="form-label">Current Semester SGPA</label>
      <input
        type="number"
        className="form-control"
        id="sixthSemesterCGPA"
        value={sixthSemesterCGPA}
        onChange={(e) => setSixthSemesterCGPA(e.target.value)}
      />
    </div>

    {/* Additional Fields in Second Column */}
    <div className="col-md-6">
      <label htmlFor="placementStatus" className="form-label">Placement Status</label>
      <select
        className="form-select"
        id="placementStatus"
        value={placementStatus}
        onChange={(e) => setPlacementStatus(e.target.value)}
      >
        <option value="">Select Status</option>
        <option value="Placed">Placed</option>
        <option value="Not Placed">Not Placed</option>
      </select>
    </div>
    {/* <div className="col-md-6">
           <label htmlFor="isAdmin" className="form-label">Admin Role</label>
          <select
            className="form-select"
            id="isAdmin"
            value={isAdmin}
            onChange={(e) => setIsAdmin(e.target.value)}
            required
          >
            <option value="">Select Role</option>
            <option value="true">Admin</option>
            <option value="false">Not Admin</option>
          </select>
        </div> */}

    {/* Additional Fields in First Column */}
    <div className="col-md-6">
      <label htmlFor="companyPlaced" className="form-label">Company Placed</label>
      <input
        type="text"
        className="form-control"
        id="companyPlaced"
        value={companyPlaced}
        onChange={(e) => setCompanyPlaced(e.target.value)}
      />
    </div>

    {/* Terms and Conditions */}
    <div className="col-12">
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="invalidCheck"
          required
        />
        <label className="form-check-label" htmlFor="invalidCheck">
          Agree to terms and conditions
        </label>
        </div>
      </div>
      {/* Submit Button */}
      <div className="col-12 form-footer">
      <button className="btn btn-primary" type="submit">Register</button>
    </div>
    </form>
  </div>

  );
};

export default StudentRegister;

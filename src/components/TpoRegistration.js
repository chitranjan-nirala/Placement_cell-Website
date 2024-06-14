// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const TpoRegistration = () => {
//   const [tpoId, setTpoId] = useState('');
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [passwordsMatch, setPasswordsMatch] = useState(true);
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleRegister = async (e) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       setPasswordsMatch(false);
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:3000/api/tpo/register', {
//         tpoId,
//         name,
//         email,
//         phone,
//         password,
//       });

//       if (response.status === 201) {
//         navigate('/tpo-login');
//       }
//     } catch (err) {
//       setError('Registration failed. Please try again.');
//       console.error('Registration error:', err);
//     }
//   };

//   return (
//     <div className="registration-container">
//       <div className="registration-content">
//         <h2>TPO Registration</h2>
//         {error && <p style={{ color: 'red' }}>{error}</p>}
//         <form onSubmit={handleRegister}>
//           <div className="form-group">
//             <label>TPO ID</label>
//             <input
//               type="text"
//               value={tpoId}
//               onChange={(e) => setTpoId(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Name</label>
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Phone</label>
//             <input
//               type="tel"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Confirm Password</label>
//             <input
//               type="password"
//               value={confirmPassword}
//               onChange={(e) => {
//                 setConfirmPassword(e.target.value);
//                 setPasswordsMatch(e.target.value === password);
//               }}
//               required
//             />
//             {!passwordsMatch && <p style={{ color: 'red' }}>Passwords do not match</p>}
//           </div>
//           <button type="submit" className="registration-button">Register</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default TpoRegistration;




// TpoRegister.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const TpoRegistration = () => {
  const [tpoId, setTpoId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [securityKey, setSecurityKey] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    // Validate password matching
    if (password !== confirmPassword) {
      setPasswordsMatch(false);
      return;
    }

    try {
      // Send registration request to server
      const response = await axios.post('http://localhost:3000/api/tpo/register', {
        tpoId,
        name,
        email,
        phone,
        password,
        securityKey,
      });

      // Handle successful registration
      if (response.status === 201) {
        navigate('/tpo-login'); // Redirect to TPO login page
      }
    } catch (err) {
      // Handle registration failure
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError('Registration failed. Please try again.');
      }
      console.error('Registration error:', err);
    }
  };

  return (
    <div className="registration-container">
      <div className="registration-content">
        <h2>TPO Registration</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label>TPO ID</label>
            <input
              type="text"
              value={tpoId}
              onChange={(e) => setTpoId(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
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
            {!passwordsMatch && <p style={{ color: 'red' }}>Passwords do not match</p>}
          </div>
          <div className="form-group">
            <label>Security Key</label>
            <input
              type="password"
              value={securityKey}
              onChange={(e) => setSecurityKey(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="registration-button">Register</button>
        </form>
      </div>
    </div>
  );
};

export default TpoRegistration;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../App.css'; 

// const TpoLogin = () => {
//   const [tpoId, setTpoId] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Implement login logic here

//     // On successful login
//     navigate('/tpo-dashboard');
//   };

//   return (
//     <div className="login-container">
//       <div className="login-content">
//         <h2>TPO Login</h2>
//         <form onSubmit={handleLogin}>
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
//             <label>Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit" className="login-button">Login</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default TpoLogin;



import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const TpoLogin = () => {
  const [tpoId, setTpoId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // State to store login error
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/tpo/login', {
        tpoId,
        password,
      });

      if (response.status === 200) {
        // Extract token from response
        const token = response.data.token;
        
        // Store token in local storage
        localStorage.setItem('token', token);

        // Redirect to TPO dashboard or perform other actions after successful login
        navigate('/tpo-dashboard');
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError('Invalid TPO ID or password');
      } else {
        setError('Login failed. Please try again later.'); // Generic error message for other errors
        console.error('Login error:', error);
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <h2>TPO Login</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
        <form onSubmit={handleLogin}>
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
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <p>
          Don't have an account? <Link to="/tpo-register">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default TpoLogin;

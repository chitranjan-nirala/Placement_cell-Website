// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import '../App.css';

// const TpoDashboard = () => {
//   const [tpoInfo, setTpoInfo] = useState(null);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchTpoInfo = async () => {
//       try {
//         const token = localStorage.getItem('token'); // Assuming the token is stored in localStorage

//         if (!token) {
//           throw new Error('No token found');
//         }

//         const response = await axios.get('http://localhost:3000/api/tpo/info', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         setTpoInfo(response.data.tpo);
//       } catch (error) {
//         console.error('Error fetching TPO info:', error);
//         setError('Failed to fetch TPO information');
//       }
//     };

//     fetchTpoInfo();
//   }, []);

//   if (error) {
//     return <div>{error}</div>;
//   }

//   if (!tpoInfo) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="tpo-dashboard-container">
//       <h2>TPO Dashboard</h2>
//       <div>
//         <p><strong>TPO ID:</strong> {tpoInfo.tpoId}</p>
//         <p><strong>Name:</strong> {tpoInfo.name}</p>
//         <p><strong>Email:</strong> {tpoInfo.email}</p>
//         <p><strong>Phone:</strong> {tpoInfo.phone}</p>
//       </div>
//     </div>
//   );
// };

// export default TpoDashboard;



// // TpoDashboard.js
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import '../App.css';

// const TpoDashboard = () => {
//   const [tpoInfo, setTpoInfo] = useState(null);
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchTpoInfo = async () => {
//       try {
//         const token = localStorage.getItem('token'); // Assuming the token is stored in localStorage

//         if (!token) {
//           throw new Error('No token found');
//         }

//         const response = await axios.get('http://localhost:3000/api/tpo/info', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         setTpoInfo(response.data.tpo);
//       } catch (error) {
//         console.error('Error fetching TPO info:', error);
//         setError('Failed to fetch TPO information');
//       }
//     };

//     fetchTpoInfo();
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('token'); // Remove token from localStorage
//     navigate('/'); // Redirect to the home page
//   };



//   if (error) {
//     return <div>{error}</div>;
//   }

//   if (!tpoInfo) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="tpo-dashboard-container">
//       <h2>TPO Dashboard</h2>
//       <div>
//         <p><strong>TPO ID:</strong> {tpoInfo.tpoId}</p>
//         <p><strong>Name:</strong> {tpoInfo.name}</p>
//         <p><strong>Email:</strong> {tpoInfo.email}</p>
//       </div>
//       <button onClick={handleLogout}>Logout</button>
//     </div>
//   );
// };

// export default TpoDashboard;
// **************************************************************add other feature 13-06 -2024***********************
// // TpoDashboard.js
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import '../App.css';
// import CompanyList from './CompanyList';
// import AddCompany from './AddCompany';

// const TpoDashboard = () => {
//   const [tpoInfo, setTpoInfo] = useState(null);
//   const [error, setError] = useState('');
//   const [companyList, setCompanyList] = useState({
//     ongoing: [],
//     upcoming: []
//   });
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchTpoInfo = async () => {
//       try {
//         const token = localStorage.getItem('token'); // Assuming the token is stored in localStorage

//         if (!token) {
//           throw new Error('No token found');
//         }

//         const response = await axios.get('http://localhost:3000/api/tpo/info', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         setTpoInfo(response.data.tpo);
//         fetchCompanyLists(token); // Fetch initial company lists
//       } catch (error) {
//         console.error('Error fetching TPO info:', error);
//         setError('Failed to fetch TPO information');
//       }
//     };

//     fetchTpoInfo();
//   }, []);

//   const fetchCompanyLists = async (token) => {
//     try {
//       const response = await axios.get('http://localhost:3000/api/tpo/companies', {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       const { ongoing, upcoming } = response.data;

//       setCompanyList({
//         ongoing: ongoing || [],
//         upcoming: upcoming || [],
//       });
//     } catch (error) {
//       console.error('Error fetching company lists:', error);
//       setError('Failed to fetch company information');
//     }
//   };

//   const handleCompanyAdded = (newCompany) => {
//     if (newCompany.type === 'ongoing') {
//       setCompanyList((prevList) => ({
//         ...prevList,
//         ongoing: [...prevList.ongoing, newCompany]
//       }));
//     } else if (newCompany.type === 'upcoming') {
//       setCompanyList((prevList) => ({
//         ...prevList,
//         upcoming: [...prevList.upcoming, newCompany]
//       }));
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('token'); // Remove token from localStorage
//     navigate('/'); // Redirect to the home page
//   };

//   if (error) {
//     return <div>{error}</div>;
//   }

//   if (!tpoInfo) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="tpo-dashboard-container">
//       <h2>TPO Dashboard</h2>
//       <div>
//         <p><strong>TPO ID:</strong> {tpoInfo.tpoId}</p>
//         <p><strong>Name:</strong> {tpoInfo.name}</p>
//         <p><strong>Email:</strong> {tpoInfo.email}</p>
//       </div>

//       {/* Add Company Component */}
//       <AddCompany onCompanyAdded={handleCompanyAdded} />

//       {/* Company Lists */}
//       <div className="company-list">
//         <CompanyList companies={companyList.ongoing} title="Ongoing Companies" />
//         <CompanyList companies={companyList.upcoming} title="Upcoming Companies" />
//       </div>

//       <button onClick={handleLogout}>Logout</button>
//     </div>
//   );
// };

// export default TpoDashboard;
// ***************************************************after adding student lists 
// components/TpoDashboard.js

// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import CompanyList from './CompanyList';
// import AddCompany from './AddCompany';

// const TpoDashboard = () => {
//   const [tpoInfo, setTpoInfo] = useState(null);
//   const [error, setError] = useState('');
//   const [companyList, setCompanyList] = useState({
//     ongoing: [],
//     upcoming: []
//   });
//   const [studentList, setStudentList] = useState([]);
//   const [showStudentList, setShowStudentList] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchTpoInfo = async () => {
//       try {
//         const token = localStorage.getItem('token');

//         if (!token) {
//           throw new Error('No token found');
//         }

//         const response = await axios.get('http://localhost:3000/api/tpo/info', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         setTpoInfo(response.data.tpo);
//         fetchCompanyLists(token);
//       } catch (error) {
//         console.error('Error fetching TPO info:', error);
//         setError('Failed to fetch TPO information');
//       }
//     };

//     fetchTpoInfo();
//   }, []);

//   const fetchCompanyLists = async (token) => {
//     try {
//       const response = await axios.get('http://localhost:3000/api/tpo/companies', {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       const { ongoing, upcoming } = response.data;

//       setCompanyList({
//         ongoing: ongoing || [],
//         upcoming: upcoming || [],
//       });
//     } catch (error) {
//       console.error('Error fetching company lists:', error);
//       setError('Failed to fetch company information');
//     }
//   };

//   const fetchStudentList = async (token) => {
//     try {
//       const response = await axios.get('http://localhost:3000/api/tpo/students', {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       setStudentList(response.data.students);
//       setShowStudentList(true);
//     } catch (error) {
//       console.error('Error fetching student list:', error);
//       setError('Failed to fetch student information');
//     }
//   };

//   const handleCompanyAdded = (newCompany) => {
//     if (newCompany.type === 'ongoing') {
//       setCompanyList((prevList) => ({
//         ...prevList,
//         ongoing: [...prevList.ongoing, newCompany]
//       }));
//     } else if (newCompany.type === 'upcoming') {
//       setCompanyList((prevList) => ({
//         ...prevList,
//         upcoming: [...prevList.upcoming, newCompany]
//       }));
//     }
//   };

//   const handleViewStudentList = () => {
//     const token = localStorage.getItem('token');
//     fetchStudentList(token);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     navigate('/');
//   };

//   if (error) {
//     return <div>{error}</div>;
//   }

//   if (!tpoInfo) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="tpo-dashboard-container">
//       <h2>TPO Dashboard</h2>
//       <div className="tpo-details">
//         <div className="tpo-detail-item">
//           <strong>TPO ID:</strong> {tpoInfo.tpoId}
//         </div>
//         <div className="tpo-detail-item">
//           <strong>Name:</strong> {tpoInfo.name}
//         </div>
//         <div className="tpo-detail-item">
//           <strong>Email:</strong> {tpoInfo.email}
//         </div>
//       </div>

//       {/* Add Company Component */}
//       <AddCompany onCompanyAdded={handleCompanyAdded} />

//       {/* Company Lists in Two Columns */}
//       <div className="company-list-container">
//         <div className="company-list-column">
//           <h3>Ongoing Companies</h3>
//           <CompanyList companies={companyList.ongoing} />
//         </div>
//         <div className="company-list-column">
//           <h3>Upcoming Companies</h3>
//           <CompanyList companies={companyList.upcoming} />
//         </div>
//       </div>

//       {/* View Student List Button */}
//       <div className="button-container">
//         <button onClick={handleViewStudentList}>View Student Lists</button>
//       </div>

//       {/* Student List */}
//       {showStudentList && (
//         <div className="student-list">
//           <h3>Registered Students</h3>
//           <table>
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Stream</th>
//                 <th>Graduation CGPA</th>
//                 <th>Placement Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {studentList.map((student) => (
//                 <tr key={student._id}>
//                   <td>{student.name}</td>
//                   <td>{student.email}</td>
//                   <td>{student.stream}</td>
//                   <td>{student.graduationCGPA}</td>
//                   <td>{student.placementStatus}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {/* Logout Button */}
//       <div className="button-container">
//         <button className="logout-button" onClick={handleLogout}>Logout</button>
//       </div>
//     </div>
//   );
// };

// export default TpoDashboard;
// ****************************************************aadding the placed student list ********************************
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import CompanyList from './CompanyList';
import AddCompany from './AddCompany';

const TpoDashboard = () => {
  const [tpoInfo, setTpoInfo] = useState(null);
  const [error, setError] = useState('');
  const [companyList, setCompanyList] = useState({
    ongoing: [],
    upcoming: []
  });
  const [studentList, setStudentList] = useState([]);
  const [placedStudentList, setPlacedStudentList] = useState([]);
  const [showStudentList, setShowStudentList] = useState(false);
  const [showPlacedStudentList, setShowPlacedStudentList] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTpoInfo = async () => {
      try {
        const token = localStorage.getItem('token');

        if (!token) {
          throw new Error('No token found');
        }

        const response = await axios.get('http://localhost:3000/api/tpo/info', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setTpoInfo(response.data.tpo);
        fetchCompanyLists(token);
      } catch (error) {
        console.error('Error fetching TPO info:', error);
        setError('Failed to fetch TPO information');
      }
    };

    fetchTpoInfo();
  }, []);

  const fetchCompanyLists = async (token) => {
    try {
      const response = await axios.get('http://localhost:3000/api/tpo/companies', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const { ongoing, upcoming } = response.data;

      setCompanyList({
        ongoing: ongoing || [],
        upcoming: upcoming || [],
      });
    } catch (error) {
      console.error('Error fetching company lists:', error);
      setError('Failed to fetch company information');
    }
  };

  const fetchStudentList = async (token) => {
    try {
      const response = await axios.get('http://localhost:3000/api/tpo/students', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setStudentList(response.data.students);
      setShowStudentList(true);
      setShowPlacedStudentList(false);
    } catch (error) {
      console.error('Error fetching student list:', error);
      setError('Failed to fetch student information');
    }
  };

  const fetchPlacedStudentList = async (token) => {
    try {
      const response = await axios.get('http://localhost:3000/api/tpo/students/placed', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setPlacedStudentList(response.data.students);
      setShowStudentList(false);
      setShowPlacedStudentList(true);
    } catch (error) {
      console.error('Error fetching placed student list:', error);
      setError('Failed to fetch placed student information');
    }
  };

  const handleCompanyAdded = (newCompany) => {
    if (newCompany.type === 'ongoing') {
      setCompanyList((prevList) => ({
        ...prevList,
        ongoing: [...prevList.ongoing, newCompany]
      }));
    } else if (newCompany.type === 'upcoming') {
      setCompanyList((prevList) => ({
        ...prevList,
        upcoming: [...prevList.upcoming, newCompany]
      }));
    }
  };

  const handleViewStudentList = () => {
    const token = localStorage.getItem('token');
    fetchStudentList(token);
  };

  const handleViewPlacedStudentList = () => {
    const token = localStorage.getItem('token');
    fetchPlacedStudentList(token);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  if (error) {
    return <div>{error}</div>;
  }

  if (!tpoInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="tpo-dashboard-container">
      <h2>TPO Dashboard</h2>
      <div className="tpo-details">
        <div className="tpo-detail-item">
          <strong>TPO ID:</strong> {tpoInfo.tpoId}
        </div>
        <div className="tpo-detail-item">
          <strong>Name:</strong> {tpoInfo.name}
        </div>
        <div className="tpo-detail-item">
          <strong>Email:</strong> {tpoInfo.email}
        </div>
      </div>

      {/* Add Company Component */}
      <AddCompany onCompanyAdded={handleCompanyAdded} />

      {/* Company Lists in Two Columns */}
      <div className="company-list-container">
        <div className="company-list-column">
          <h3>Ongoing Companies</h3>
          <CompanyList companies={companyList.ongoing} />
        </div>
        <div className="company-list-column">
          <h3>Upcoming Companies</h3>
          <CompanyList companies={companyList.upcoming} />
        </div>
      </div>

      {/* View Student List Buttons */}
      <div className="button-container">
        <button onClick={handleViewStudentList}>View Student Lists</button>
        <button onClick={handleViewPlacedStudentList}>View Placed Students</button>
      </div>

      {/* Student List */}
      {showStudentList && (
        <div className="student-list">
          <h3>Registered Students</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Stream</th>
                <th>Graduation CGPA</th>
                <th>Placement Status</th>
                <th>Resume</th>
              </tr>
            </thead>
            <tbody>
              {studentList.map((student) => (
                <tr key={student._id}>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.stream}</td>
                  <td>{student.graduationCGPA}</td>
                  <td>{student.placementStatus}</td>
                  <td>{student.resume}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Placed Student List */}
      {showPlacedStudentList && (
        <div className="student-list">
          <h3>Placed Students</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Stream</th>
              </tr>
            </thead>
            <tbody>
              {placedStudentList.map((student) => (
                <tr key={student._id}>
                  <td>{student.name}</td>
                  <td>{student.stream}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Logout Button */}
      <div className="button-container">
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default TpoDashboard;

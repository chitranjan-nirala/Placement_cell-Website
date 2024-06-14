// // CompanyList.js
// import React from 'react';

// const CompanyList = ({ companies, title }) => {
//   return (
//     <div>
//       <h3>{title}</h3>
//       <ul>
//         {companies.map((company, index) => (
//           <li key={index}>
//             <strong>{company.name}</strong>
//             <p>{company.description}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CompanyList;



// components/CompanyList.js

import React from 'react';

const CompanyList = ({ companies }) => {
  return (
    <ul className="company-list">
      {companies.map(company => (
        <li key={company._id}>
          {company.name} - {company.description}
        </li>
      ))}
    </ul>
  );
};

export default CompanyList;

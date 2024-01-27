// StudentPage.js

import React, { Component } from "react";

class Student extends Component {
  render() {
    return (
      <div>
        {/* Background Image Section */}
        <div className="student-container">
          <div className="overlay">
            <h1>UPCOMING RECRUITMENTS</h1>
          </div>
        </div>

        {/* Job Notifications Section */}
        <div className="job-notifications-section">
          <div className="overlay">
            <h3>Job Notifications</h3>
            <ul>
              <li>
               Jaro Education: Software Engineer position -{" "}
                <a href="/assets/Jaro Education - Job Description.pdf" target="_blank" rel="noopener noreferrer">
                  View Details
                </a>
              </li>
              <li>
                Expressbees: Data Analyst Internship -{" "}
                <a href="/path/to/job-details" target="_blank" rel="noopener noreferrer">
                  View Details
                </a>
              </li>
              {/* Add more job notifications as needed */}
            </ul>
          </div>
        </div>

        {/* Downloadable Content Section */}
        <div className="downloadable-content-section">
          <div className="overlay">
            <h3>Downloadable Content</h3>
            <p>Download important documents and resources:</p>
            <ul>
              <li>
                <a href="/path/to/document-1.pdf" download>
                  Document 1
                </a>
              </li>
              <li>
                <a href="/path/to/document-2.pdf" download>
                  Document 2
                </a>
              </li>
              {/* Add more downloadable content as needed */}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Student;

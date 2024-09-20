# Placement Cell Website

### Demo Video

[Click here to watch the video](https://github.com/chitranjan-nirala/Placement_cell-Website/blob/main/Recording%202024-09-21%20025350.mp4)

## Table of Contents
1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
5. [Usage](#usage)
6. [API Endpoints](#api-endpoints)
7. [Real-Time Features](#real-time-features)
8. [Contributing](#contributing)
9. [License](#license)
10. [Contact](#contact)

## Project Overview

The Placement Cell Website is a comprehensive platform designed to streamline the process of job applications and notifications for students. It provides real-time job postings, search functionality, and filters to help students find relevant job opportunities.

## Features

- User authentication (login and signup) using JWT tokens
- Real-time job postings using Socket.io
- Search and filter job listings by location, type, and role
- Apply for jobs directly from the platform
- Admin panel for managing job listings and user accounts
- Responsive design for mobile and desktop

## Technologies Used

- **Frontend**: React.js, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Real-Time Communication**: Socket.io
- **API**: Adzuna API for job listings
- **Authentication**: JWT (JSON Web Token)

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running
- Adzuna API credentials (app ID and app key)
- A secret key for JWT token generation

### Installation

1. **Clone the repository:**

```sh
git clone https://github.com/yourusername/placement-cell-website.git
cd placement-cell-website


2.Install backend dependencies:
cd backend
npm install
]3.Install frontend dependencies:
cd ../frontend
npm install

4.Set up environment variables:
Create a .env file in the backend directory with the following variables:

PORT=3000
MONGODB_URI=your_mongodb_connection_string
ADZUNA_APP_ID=your_adzuna_app_id
ADZUNA_APP_KEY=your_adzuna_app_key
JWT_SECRET_KEY=your_jwt_secret_key

5.Usage
Start the backend server:
cd backend
npm start

6.Start the frontend server:
cd ../frontend
npm start
The backend server should now be running on http://localhost:3000 and the frontend server on http://localhost:3001.

7.API Endpoints
  User Authentication
  POST /api/signup - Register a new user
  POST /api/login - Authenticate a user and receive a JWT token
  GET /api/profile - Get user profile (requires JWT token)

# Job Listings
GET /api/searchJobs?searchTerm={term}&location={location} - Search for job listings based on term and location

# Real-Time Features
The job notification page updates in real-time with new job postings using Socket.io. 
When a new job is added or an existing job is updated, all connected clients receive the latest job listings instantly.

# Contributing
Contributions are welcome! Please follow these steps to contribute:

# Fork the repository
Create a new branch (git checkout -b feature/your-feature)
Commit your changes (git commit -am 'Add some feature')
Push to the branch (git push origin feature/your-feature)
Create a new Pull Request

# License
This project is licensed under the MIT License.

# Contact
For any questions or feedback, please reach out to:

Your Email: chitranjan993483@gmail.com
GitHub: chitranjan-nirala

### Screenshots



// ****************************************************************after adding functionality for file uploading and edit profile 
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import axios from 'axios'; 
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import connectDB from './db.js';
import Student from './models/Student.js';
import TPO from './models/TPO.js';
import Company from './models/Company.js';
import tpoRoutes from './routes/tpoRoutes.js';
// import tpoRoutes from './routes/studentRoutes.js';
import http from 'http';
import { Server as SocketIO } from 'socket.io';
import multer from 'multer';
import path from 'path';


dotenv.config();

const app = express();
const port = 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Uploads directory
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}${path.extname(file.originalname)}`;
    cb(null, `${file.fieldname}-${uniqueSuffix}`);
  },
});

const upload = multer({ storage: storage });

// Endpoint to upload resume
app.post('/api/student/upload-resume', upload.single('resume'), async (req, res) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'Authorization token missing' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded || !decoded.studentId) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    const studentId = decoded.studentId;

    // Find the student by studentId
    let student = await Student.findOne({ studentId });
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    // Update the resume path in the student record
    student.resume = req.file.path;
    await student.save();

    res.status(200).json({ message: 'Resume uploaded successfully', path: req.file.path });
  } catch (err) {
    console.error('Error uploading resume:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

app.put('/api/student/update', async (req, res) => {
  const {
    name,
    email,
    phone,
    twelfthPercentage,
    tenthPercentage,
    tenthSchool,
    twelfthCollege,
    graduationCollege,
    graduationCGPA,
    sixthSemesterCGPA,
    skills,
  } = req.body;

  try {
    // Verify JWT and get student ID
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'Authorization token missing' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded || !decoded.studentId) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    const studentId = decoded.studentId;

    // Find the student by studentId
    let student = await Student.findOne({ studentId });
    if (!student) {
      return res.status(404).json({ message: 'Student not found', studentId });
    }

    // Update fields
    student.name = name;
    student.email = email;
    student.phone = phone;
    student.twelfthPercentage = twelfthPercentage;
    student.tenthPercentage = tenthPercentage;
    student.tenthSchool = tenthSchool;
    student.twelfthCollege = twelfthCollege;
    student.graduationCollege = graduationCollege;
    student.graduationCGPA = graduationCGPA;
    student.sixthSemesterCGPA = sixthSemesterCGPA;

    // Update skills (assuming 'skills' is an array of strings)
    if (skills && skills.length > 0) {
      student.skills = skills.split(',').map(skill => skill.trim()); // Split string into array of skills
    }

    // Save updated student profile
    await student.save();

    // Send back updated student info
    res.status(200).json({ student });
  } catch (err) {
    console.error('Error updating student profile:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Routes setup (import and use your student routes)
import studentRoutes from './routes/studentRoutes.js';
app.use('/api/student', studentRoutes);


// Routes
app.use('/api/tpo', tpoRoutes);

// TPO login
app.post('/api/tpo/login', async (req, res) => {
  const { tpoId, password } = req.body;
  try {
    const tpo = await TPO.findOne({ tpoId });

    if (!tpo) {
      return res.status(401).json({ message: 'Invalid TPO ID or password' });
    }

    const isMatch = await bcrypt.compare(password, tpo.password);

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid TPO ID or password' });
    }

    const token = jwt.sign({ tpoId: tpo.tpoId }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ message: 'Login successful', token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// TPO registration
app.post('/api/tpo/register', async (req, res) => {
  const { tpoId, name, email, password, securityKey } = req.body;

  try {
    if (securityKey !== process.env.TPO_REGISTRATION_KEY) {
      return res.status(403).json({ message: 'Invalid security key' });
    }

    const existingTPO = await TPO.findOne({ tpoId });
    if (existingTPO) {
      return res.status(403).json({ message: 'TPO already registered' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const tpo = new TPO({
      tpoId,
      name,
      email,
      password: hashedPassword,
      role: 'TPO',
    });

    await tpo.save();
    res.status(201).json({ message: 'TPO registration successful' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Endpoint to fetch TPO information
app.get('/api/tpo/info', async (req, res) => {
  try {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'No token, authorization denied' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const tpoId = decoded.tpoId;

    const tpo = await TPO.findOne({ tpoId });
    if (tpo) {
      res.status(200).json({ tpo });
    } else {
      res.status(404).json({ message: 'TPO not found' });
    }
  } catch (error) {
    console.error('Error fetching TPO information:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Student login
app.post('/api/student/login', async (req, res) => {
  const { studentId, password } = req.body;
  try {
    const student = await Student.findOne({ studentId });

    if (!student) {
      return res.status(401).json({ message: 'Invalid student ID or password' });
    }

    const isMatch = await bcrypt.compare(password, student.password);

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid student ID or password' });
    }

    const token = jwt.sign({ studentId: student.studentId }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ message: 'Login successful', token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Student registration
app.post('/api/student/register', async (req, res) => {
  const {
    studentId,
    name,
    email,
    phone,
    password,
    twelfthPercentage,
    tenthPercentage,
    tenthSchool,
    twelfthCollege,
    graduationCollege,
    graduationCGPA,
    stream,
    sixthSemesterCGPA,
    isAdmin,
    placementStatus,
    companyPlaced
  } = req.body;

  try {
    let student = await Student.findOne({ studentId });

    if (student) {
      return res.status(400).json({ message: 'Student already registered' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    student = new Student({
      studentId,
      name,
      email,
      phone,
      password: hashedPassword,
      twelfthPercentage,
      tenthPercentage,
      tenthSchool,
      twelfthCollege,
      graduationCollege,
      graduationCGPA,
      stream,
      sixthSemesterCGPA,
      isAdmin,
      placementStatus,
      companyPlaced
    });

    await student.save();
    res.status(201).json({ message: 'Registration successful' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Endpoint to fetch student information
app.get('/api/student/info', async (req, res) => {
  try {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'No token, authorization denied' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const studentId = decoded.studentId;

    const student = await Student.findOne({ studentId });
    if (student) {
      res.status(200).json({ student });
    } else {
      res.status(404).json({ message: 'Student not found' });
    }
  } catch (error) {
    console.error('Error fetching student information:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Endpoint to add a new company
app.post('/api/tpo/companies', async (req, res) => {
  const { name, description, category } = req.body;

  try {
    const newCompany = new Company({
      name,
      description,
      category,
    });

    await newCompany.save();
    res.status(201).json({ message: 'Company added successfully' });
  } catch (error) {
    console.error('Error adding company:', error);
    res.status(500).json({ message: 'Failed to add company' });
  }
});

// Endpoint to fetch all companies
app.get('/api/tpo/companies', async (req, res) => {
  try {
    const companies = await Company.find();
    res.json({ companies });
  } catch (error) {
    console.error('Error fetching companies:', error);
    res.status(500).json({ error: 'Failed to fetch companies' });
  }
});
app.get('/api/student/companies', async (req, res) => {
  try {
    const companies = await Company.find();

    const ongoingCompanies = companies.filter(company => company.category === 'Ongoing');
    const upcomingCompanies = companies.filter(company => company.category === 'Upcoming');

    res.status(200).json({ ongoingCompanies, upcomingCompanies });
  } catch (error) {
    console.error('Error fetching companies:', error);
    res.status(500).json({ message: 'Failed to fetch companies' });
  }
});

// Fetch all students
app.get('/api/tpo/students', async (req, res) => {
  try {
    const students = await Student.find();
    res.json({ students });
  } catch (error) {
    console.error('Error fetching students:', error);
    res.status(500).json({ error: 'Failed to fetch students' });
  }
});


const server = http.createServer(app);
const io = new SocketIO(server, {
  cors: {
    origin: '*',
  },
});

// Endpoint to fetch job listings based on search query
app.get('/api/searchJobs', async (req, res) => {
  try {
    const { searchTerm, location } = req.query;
    const app_id = 'e06f67c9'; // Your Adzuna API ID
    const app_key = '7cc1c7900128fa3ded4f07e52dea7f8e'; // Your Adzuna API Key
    const response = await axios.get(`https://api.adzuna.com/v1/api/jobs/in/search/1?app_id=${app_id}&app_key=${app_key}&results_per_page=10&what=${searchTerm}&where=${location}`);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching job listings:', error.message);
    res.status(500).json({ error: 'Server error' });
  }
});

// Socket.io connection handling
io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});


// Server listening
server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

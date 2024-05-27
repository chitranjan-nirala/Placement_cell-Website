import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import connectDB from './db.js';
import Student from './models/Student.js';
import TPO from './models/TPO.js'; // Import the TPO model
import http from 'http';
import { Server as SocketIO } from 'socket.io';

dotenv.config();

const app = express();
const port =3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());
app.use(cors());

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
  const { tpoId, name, email, phone, password } = req.body;
  try {
    let tpo = await TPO.findOne({ tpoId });

    if (tpo) {
      return res.status(400).json({ message: 'TPO already registered' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    tpo = new TPO({
      tpoId,
      name,
      email,
      phone,
      password: hashedPassword,
    });

    await tpo.save();
    res.status(201).json({ message: 'Registration successful' });
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
  const { studentId, name, email, phone, password } = req.body;
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


// Create HTTP server
const server = http.createServer(app);
// Initialize Socket.IO
const io = new SocketIO(server, {
  cors: {
    origin: '*',
  },
});

io.on('connection', (socket) => {
  console.log('New client connected');

  // Handle job notification event
  socket.on('jobNotification', (notification) => {
    console.log('Received job notification:', notification);
    // Broadcast the job notification to all clients
    io.emit('jobNotification', notification);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

// Server listening
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});


//************************************that code was before making changes for tpo *************************************************************
import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import TPO from '../models/TPO.js';
import Company from '../models/Company.js';
import auth from '../middleware/auth.js';

dotenv.config();

const router = express.Router();

// TPO registration
router.post('/register', async (req, res) => {
  const { tpoId, name, email, password, securityKey } = req.body;
  console.log('Received TPO registration request:', req.body);

  try {
    // Check security key
    if (securityKey !== process.env.TPO_REGISTRATION_KEY) {
      console.log('Invalid security key');
      return res.status(403).json({ message: 'Invalid security key' });
    }

    // Check if TPO already registered
    const existingTPO = await TPO.findOne({ tpoId });
    if (existingTPO) {
      console.log('TPO already registered');
      return res.status(403).json({ message: 'TPO already registered' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new TPO
    const tpo = new TPO({
      tpoId,
      name,
      email,
      password: hashedPassword,
      role: 'TPO',
    });

    await tpo.save();
    console.log('TPO registration successful');
    res.status(201).json({ message: 'TPO registration successful' });
  } catch (err) {
    console.error('Error during TPO registration:', err);
    res.status(500).send('Server error');
  }
});

// TPO login
router.post('/login', async (req, res) => {
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

// Route to add a company
router.post('/addCompany', auth, async (req, res) => {
  try {
    const { name, description, type } = req.body;

    const newCompany = new Company({
      name,
      description,
      type
    });

    const savedCompany = await newCompany.save();

    res.status(201).json({ company: savedCompany });
  } catch (error) {
    console.error('Error adding company:', error);
    res.status(500).json({ error: 'Failed to add company' });
  }
});

// Route to get companies
router.get('/companies', auth, async (req, res) => {
  try {
    const ongoingCompanies = await Company.find({ type: 'ongoing' });
    const upcomingCompanies = await Company.find({ type: 'upcoming' });

    res.status(200).json({
      ongoing: ongoingCompanies,
      upcoming: upcomingCompanies
    });
  } catch (error) {
    console.error('Error fetching companies:', error);
    res.status(500).json({ error: 'Failed to fetch companies' });
  }
});

export default router;

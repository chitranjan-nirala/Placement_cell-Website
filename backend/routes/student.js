const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Student = require('../models/Student');

const router = express.Router();

// Student login route
router.post('/login', async (req, res) => {
  const { studentId, password } = req.body;

  try {
    const student = await Student.findOne({ studentId });

    if (!student || !student.isValidPassword(password)) {
      return res.status(401).json({ error: 'Invalid Student ID or password' });
    }

    const token = jwt.sign(
      { studentId: student._id, studentIdCode: student.studentId },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred. Please try again later.' });
  }
});

module.exports = router;

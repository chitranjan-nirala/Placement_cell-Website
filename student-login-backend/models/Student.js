import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

// Configure dotenv to access environment variables
dotenv.config();

const StudentSchema = new mongoose.Schema({
  studentId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Method to generate a JWT containing the student ID
StudentSchema.methods.generateAuthToken = function() {
  const token = jwt.sign({ _id: this._id, studentId: this.studentId }, process.env.JWT_SECRET, { expiresIn: '1h' });
  return token;
};

const Student = mongoose.model('Student', StudentSchema);

export default Student;

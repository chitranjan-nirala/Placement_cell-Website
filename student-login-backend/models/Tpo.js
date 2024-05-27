import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

// Configure dotenv to access environment variables
dotenv.config();

// Define the TPO schema
const TPOSchema = new mongoose.Schema({
  tpoId: {
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

// Method to generate a JWT containing the TPO ID
TPOSchema.methods.generateAuthToken = function() {
  const token = jwt.sign({ _id: this._id, tpoId: this.tpoId }, process.env.JWT_SECRET, { expiresIn: '1h' });
  return token;
};

// Create the TPO model
const TPO = mongoose.model('TPO', TPOSchema);

export default TPO;

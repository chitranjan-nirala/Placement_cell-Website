
// ****************************
// models/Company.js
import mongoose from 'mongoose';

const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['ongoing', 'upcoming'],
    required: true,
  },
});

const Company = mongoose.model('Company', companySchema);

export default Company;

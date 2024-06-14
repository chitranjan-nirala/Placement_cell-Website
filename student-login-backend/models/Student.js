import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

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
  graduationCollege: {
    type: String,
    required: true,
  },
  stream: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "Student",
  },
  gender: {
    type: String,
  },
  dob: {
    type: Date,
  },
  tenthPercentage: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
  tenthSchool: {
    type: String,
    required: true,
  },
  twelfthPercentage: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
  twelfthCollege: {
    type: String,
  },
  graduationCGPA: {
    type: Number,
    required: true,
    min: 0,
    max: 10,
  },
  sixthSemesterCGPA: {
    type: Number,
    required: true,
    min: 0,
    max: 10,
  },
  // isAdmin: {
  //   type: Boolean,
  //   default: false,
  // },
  placementStatus: {
    type: String,
    required: true,
  },
  companyPlaced: {
    type: String,
    required: false,
  },
  resume: {
    type: String, // Path or URL of the uploaded resume
  },
  skills: {
    type: [String], // Array of strings representing skills
  },
});

StudentSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { _id: this._id, studentId: this.studentId, role: this.role },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
  return token;
};

const Student = mongoose.model("Student", StudentSchema);

export default Student;

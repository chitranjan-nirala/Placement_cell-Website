const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const studentSchema = new mongoose.Schema({
  studentId: { type: String, unique: true, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  passwordHash: { type: String, required: true },
});

// Method to check if the given password is correct
studentSchema.methods.isValidPassword = function (password) {
  return bcrypt.compareSync(password, this.passwordHash);
};

module.exports = mongoose.model('Student', studentSchema);

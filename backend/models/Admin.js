const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const adminSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  passwordHash: { type: String, required: true },
});

// Method to check if the given password is correct
adminSchema.methods.isValidPassword = function (password) {
  return bcrypt.compareSync(password, this.passwordHash);
};

module.exports = mongoose.model('Admin', adminSchema);

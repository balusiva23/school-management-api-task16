const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
  name: String,
  qualification: String,
  experience: String,
  contact: String,
});

module.exports = mongoose.model('Teacher', teacherSchema);

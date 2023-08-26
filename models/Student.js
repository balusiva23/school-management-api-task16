const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  enrollmentDate: Date,
  classId: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' },
  teacherId: { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher' },
  address: String,
  contact: String,
});

module.exports = mongoose.model('Student', studentSchema);

const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }],
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher' },
  className: String,
});

module.exports = mongoose.model('Class', classSchema);

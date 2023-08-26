const Student = require('../models/Student');
const Class = require('../models/Class');
const Teacher = require('../models/Teacher');

exports.createStudent = async (req, res) => {
  try {
    const {
      name,
      enrollmentDate,
      classId,
      teacherId,
      address,
      contact,
    } = req.body;

    const newStudent = new Student({
      name,
      enrollmentDate,
      classId,
      teacherId,
      address,
      contact,
    });

    await newStudent.save();

    res.status(201).json(newStudent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find()
      .populate('classId teacherId')
      .select('name classId teacherId');
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

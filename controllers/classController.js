const Class = require('../models/Class');
const Student = require('../models/Student');

exports.createClass = async (req, res) => {
  try {
    const { students, teacherId, className } = req.body;

    const newClass = new Class({
      students,
      teacher: teacherId,
      className,
    });

    await newClass.save();

    res.status(201).json(newClass);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllClasses = async (req, res) => {
  try {
    const classes = await Class.find().populate('students teacher');
    res.status(200).json(classes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

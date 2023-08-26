const Teacher = require('../models/Teacher');

exports.createTeacher = async (req, res) => {
  try {
    const { name, qualification, experience, contact } = req.body;

    const newTeacher = new Teacher({
      name,
      qualification,
      experience,
      contact,
    });

    await newTeacher.save();

    res.status(201).json(newTeacher);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const express = require('express');
const router = express.Router();
const classController = require('../controllers/classController');
const teacherController = require('../controllers/teacherController');
const studentController = require('../controllers/studentController');

router.post('/classes', classController.createClass);
router.post('/teachers', teacherController.createTeacher);
router.post('/students', studentController.createStudent);
router.get('/classes', classController.getAllClasses);
router.get('/students', studentController.getAllStudents);

module.exports = router;


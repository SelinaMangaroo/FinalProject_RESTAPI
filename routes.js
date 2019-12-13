
var express = require('express');
var router = express.Router();
const data = require(__dirname + '/courses.json');

//__________________________________ROUTES____________________________________

router.get('/', (req, res) => {
  console.log(req.url);
  res.render(__dirname + '/index.ejs', { data: data });

  //res.sendFile(__dirname + '/index.html');
});

router.get('/courses', (req, res) => {
  console.log(req.url);
  res.render(__dirname + '/index.ejs', { data: data });

  //  res.json(data.courses);
});

router.get('/courses/qcode/:course_code', (req, res) => {
  qcode = req.params.course_code;
  var FILTERED_DATA = data.courses.filter(d => d.course_code.toLowerCase().includes(qcode));
  res.json(FILTERED_DATA);
  console.log(req.url);
  res.render(__dirname + '/index.ejs', { data: data });
});

router.get('/courses/qtitle/:title', (req, res) => {
  qtitle = req.params.title;
  var FILTERED_DATA = data.courses.filter(d => d.title.toLowerCase().replace(/\s/g, '').includes(qtitle));
  res.json(FILTERED_DATA);
});

router.get('/courses/qinstructor/:instructor', (req, res) => {
  qinstructor = req.params.instructor;
  var FILTERED_DATA = data.courses.filter(d => d.instructor.toLowerCase().replace(/\s/g, '').includes(qinstructor));
  res.json(FILTERED_DATA);
});

router.get('/courses/qday/:course_day', (req, res) => {
  qday = req.params.course_day;
  var FILTERED_DATA = data.courses.filter(d => d.course_day.toLowerCase().replace(/\s/g, '').includes(qday));
  res.json(FILTERED_DATA);
});

router.get('/courses/qseats/', (req, res) => {
  qseats = req.params.seats_available;
  var FILTERED_DATA = data.courses.filter(d => d.seats_available > 0);
  res.json(FILTERED_DATA);
});

router.get('/courses/qtype/:course_type', (req, res) => {
  qtype = req.params.course_type;
  var FILTERED_DATA = data.courses.filter(d => d.course_type.toLowerCase().replace(/\s/g, '').includes(qtype));
  res.json(FILTERED_DATA);
});

module.exports = router;

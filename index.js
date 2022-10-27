const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
const categories = require('./data/categories.json');
const courses = require('./data/courses.json');

app.get('/', (req, res) => {
    res.send('Courses API is Running');
});

app.get('/courses', (req, res) => {
    res.send(courses);
});

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourses = courses.find((c) => c.id === id);
    res.send(selectedCourses);
});
app.get('/courses-categories', (req, res) => {
    res.send(categories);
});

app.get('/courses-categories/:id', (req, res) => {
    const id = req.params.id;
    const category_courses = courses.filter((c) => c.category_id === id);
    res.send(category_courses);
});

app.listen(port, () => {
    console.log('Server running on port', port);
});

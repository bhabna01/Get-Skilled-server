const express = require('express')
const app = express();
const cors = require('cors');
app.use(cors());
const port = process.env.PORT || 5000;
const categories = require('./data/categories.json')
const courses = require('./data/courses.json')
app.get('/', (req, res) => {
    res.send('Course API Running');

});
app.get('/course-categories', (req, res) => {
    res.send(categories);
})
app.get('/courses', (req, res) => {
    res.send(courses);
});
app.get('/categories/:id', (req, res) => {
    const id = req.params.id;


    const categoryCourses = courses.filter(n => n.category_id == id)
    res.send(categoryCourses);
})
app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourses = courses.find(n => n._id == id)
    res.send(selectedCourses);

})
app.listen(port, () => {


    console.log('Courses server running on port', port)


})
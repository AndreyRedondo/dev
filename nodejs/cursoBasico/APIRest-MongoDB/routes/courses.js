const express = require('express');
const Course = require('../models/course_model')
const router = express.Router();

router.get('/', (req, res) => {
    let result = listActiveCourses();
    result
        .then(course => {
            res.json(course)
        }).catch(err => {
            res.status(400).json({
                error: err
            })
        })
})

router.post('/', (req, res) => {
    let body = req.body;
    let result = createCourse(body)

    result
        .then(course => {
            res.json({
                course: course
            })
        }).catch(err => {
            res.status(400).json({
                error: err
            })
        })
})

router.put('/:name', (req, res) => {
    let result = updateCourse(req.params.name, req.body)
        .then(value => {
            res.json({
                value: value
            })
        }).catch(err => {
            res.status(400).json({
                error: err
            })
        })
})

router.delete('/:id', (req, res) => {
    let result = disableCourse(req.params.id);
    result
        .then(value => {
            res.json({
                course: value
            })
        }).catch(err => {
            res.status(400).json({
                error: err
            })
        })
})



async function listActiveCourses(status) {
    let courses = await Course.find({ "status": true });
    return courses;
}

async function createCourse(body) {
    let course = new Course({
        name: body.name,
        credits: body.credits,
    });
    return course.save();
}

async function updateCourse(name, body) {
    let course = Course.findOneAndUpdate(name, {
        $set: {
            name: body.name,
            credits: body.credits,
        }
    }, { new: true })
    return course;
}

async function disableCourse(id) {
    let course = Course.findByIdAndUpdate(id, {
        $set: {
            status: false
        }
    }, { new: true })
    return course;
}

module.exports = router;
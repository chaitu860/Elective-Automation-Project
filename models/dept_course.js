var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var DeptCourseSchema = new mongoose.Schema({
    DeptId: { type: String, required: true, index: true},
    course:  [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Course' }
    ]
});

DeptCourseSchema.plugin(uniqueValidator, { mongoose: mongoose });

var collectionName = 'dept_courses';

module.exports = mongoose.model('Course', DeptCourseSchema, collectionName);
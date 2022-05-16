var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var ElectCourseSchema = new mongoose.Schema({
    StudentId: { type: String, required: true},
    course:  [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Course' }
    ]
});

ElectCourseSchema.plugin(uniqueValidator, { mongoose: mongoose });

var collectionName = 'enrolled_list';

module.exports = mongoose.model('Course', ElectCourseSchema, collectionName);
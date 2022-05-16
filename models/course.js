var mongoose = require('mongoose');


var CourseSchema = new mongoose.Schema({
    courseId: { type: String, required: true, index: true, unique: true },
    courseName: { type: String, required: true },
    semester:{type:Number,required:true},
    elective_id:{type:String,required:true},
    dept_id:{type:String,required:true},
    courseCredit: { type: Number, default: 0, min: 0, max: 12 },
    assignedTeacher: {type:String,required:true}

});


module.exports = mongoose.model('Course', CourseSchema);
var mongoose = require('mongoose');
var TeacherSchema = new mongoose.Schema({
    username: { type: String, required: true, index: true, unique: true },
    password: { type: String, required: true },
    
   
    
    position: { type: String, required: true },
    dept_id:{type:String,required: true}
});



module.exports = mongoose.model('Teacher', TeacherSchema);
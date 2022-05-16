var mongoose = require('mongoose');

var EntrySchema=new mongoose.Schema({
    courseId: { type: String, required: true},
    rollno:{type:String,required:true}
  });
  
  module.exports = mongoose.model('Entry', EntrySchema);
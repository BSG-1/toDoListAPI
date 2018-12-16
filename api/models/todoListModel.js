//requiring mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//mongoDB Schema
var taskSchema = new Schema({
    name: {
        type: String,
        require: 'Please enter the name of the taks'
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['pending', 'ongoing', 'completed']
        }],
        default: ['pending']
    }
});

module.exports = mongoogse.model('Tasks', taskSchema);
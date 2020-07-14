const mongoose = require('mongoose')

const newTask = mongoose.model('Task',{
    description:{
        type:String
    },
    completed:{
        type:Boolean
    }
})

module.exports = newTask
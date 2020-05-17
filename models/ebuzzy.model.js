const mongoose = require('mongoose');

var ebuzzySchema = new mongoose.Schema({

    PosterName:{
        type: String,
        required: 'This field is required'
    },
    PostText:{
        type: String
    },
    Status:{
        type: String,
        required: 'Staus is required'
    }

});

mongoose.model('post_info',ebuzzySchema);
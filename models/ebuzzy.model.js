const mongoose = require('mongoose');

var ebuzzySchema = new mongoose.Schema({

    CustomId:{
        type: Number,
        required: "Id fiels is required"
    },
    PosterName:{
        type: String,
        required: 'This field is required'
    },
    PostText:{
        type: String
    },
    Status:{
        type: Number,
        required: 'Staus is required'
    }

});

mongoose.model('buzzy_posts',ebuzzySchema);
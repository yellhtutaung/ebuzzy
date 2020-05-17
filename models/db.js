const MongoClient = require('mongoose');

    MongoClient.connect('mongodb://localhost:27017/ebuzzy' ,  { useNewUrlParser: true } ,(err)=> {
        if (!err){
            console.log('MongoDB successfuly connected');
        }else {
            console.log('Connection Error like that ->> '+ err );
        }
    } );

require('./ebuzzy.model');
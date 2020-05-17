

let MongoClient = require('mongodb').MongoClient;
let dburl       =   "mongodb://localhost:27017/node";
MongoClient.connect(dburl, function(err, db) {
  if (err) {
    throw err;
  }
  console.log('db connected');
  db.close();
});



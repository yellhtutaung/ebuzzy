require('./models/db');  //connect to {{ models/db.js }}
 // io.connect('http://192.168.1.7:3001');


const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');
const device = require('express-device');

const app = express();
let socket = require('socket.io');

    const bodyparsar = require('body-parser');

    app.use(bodyparsar.urlencoded({ extended: true})); // These code must me upper of the controller include
    app.use(bodyparsar.json()); // These code must me upper of the controller include

    const SaveController = require('./controllers/saveControllers');  //connect to {{ controller }}

    let server = app.listen(3001, function () {
        console.log("Port 3001 is listening");
    });

    app.use(express.static("public"));

    
    app.set('views',path.join(__dirname, '/views/'));
    app.engine('hbs',handlebars({extname:'hbs' ,defaultLayout:'mainLayouts' ,layoutsDir: __dirname + '/views/layouts/' }));
    app.set('view engine' , 'hbs');    

    app.use('/',SaveController);

    let io = socket(server);
    io.on('connection', function(socket){

        // app.post("/", function(req, res) {
        //     console.log('po lite pi');
        // });

        // app.post("/", function(req, res ) {            
        //     res.send({});
        // });

        socket.on('PostUploading', function(data){

            // console.log(data);

            io.sockets.emit("ReturnClientSide",data);
            // console.log(data);

        });
        

        // socket.on('NameIsKeyupNow',function(){
        //     console.log('Someone is Typing');
        // });

        // socket.on('typing', function(data){
        //     socket.broadcast.emit("typing",data);
        // });

    });
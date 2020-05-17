let express = require('express');
let app = express();
let router = express.Router();
const mongoose = require('mongoose');
const PostTB = mongoose.model('post_info');


    router.get('/',(req,res) => {
        res.render('index',{
            ViewTitle: "E Buzzy"
        });
    });

    router.post('/', (req,res)=>{

        res.json('Yout nay pi console ko show')
        console.log(req.body);
        console.log('Tha Kal York Pi');
        // InsertRecord(req,res);
    });

    function InsertRecord(req,res){

        // var Ebuzzy = new PostTB();

        // Ebuzzy.PosterName = req.body.

        // Ebuzzy.save((err,doc) => {

        //     if(!err){
        //         console.log('Congratulation MongoDB Inseart successfully');
        //     }else{
        //         console.log('Error Inserting in MongoDB'+ err);
        //     }

        // });

        // console.log(req.body.PostName);
    }


    module.exports = router;
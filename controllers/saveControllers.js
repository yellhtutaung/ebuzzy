const express = require('express');
let app = express();
var router = express.Router();
const mongoose = require('mongoose');
const PostTB = mongoose.model('buzzy_posts');


    router.get('/',(req,res) => {
        
        var sort = { _id: -1 };
        
        PostTB.find((err, docs) => {

            // console.log('DOCS ===== >>' + docs);

            if(!err){

                // var latest_row = PostTB.find().sort( {CustomId: -1} );
                // console.log(latest_row);

                 res.render('index',{
                    list:docs,
                    // lastrow : latest_row
                    
                });
                // res.json('Temp display');

            }else{
                res.json('Index Display Error' +err );
                console.log('Index Display Error' + err ); 
            }            
            
        });

    });

    router.post('/', (req,res)=>{

        // res.json('Yout nay pi console ko show')
        // console.log(req.body.CustomID);
        InsertRecord(req,res);

    });

    function InsertRecord(req,res){

        var Ebuzzy = new PostTB();

        var PresentId = req.body.CustomID;

        if(PresentId >= 1){
            PresentId+1;
        }else{
            PresentId = 1;
        }

        Ebuzzy.CustomId = PresentId;
        Ebuzzy.PosterName = req.body.UploaderName;
        Ebuzzy.PostText = req.body.UploaderEmotion;
        Ebuzzy.Status = 1;

        Ebuzzy.save((err,doc) => {

            if(!err){
                console.log('Congratulation MongoDB Inseart successfully');
            }else{
                console.log('Error Inserting in MongoDB >>> '+ err);
            }

        });

        // console.log(req.body.UploaderName);
        // console.log('^^^^^^ Insert Record ^^^^^^^^^^^^^^^^^^^^')
    }


    module.exports = router;
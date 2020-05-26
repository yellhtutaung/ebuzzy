


    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    var Reco = new SpeechRecognition();
    Reco.continuous = true;
    Reco.lang = "en-US";
    // Reco.interimResults = false;
    // Reco.maxAlternatives = 1;

// Upload.js

var WelcomeArr = [
'hello sir I am ready to help you',
'buzzy assistant is activating now you can tell me what you want me to do for you',
'voice assistant is activating'
];

var OkArr =[
    'ok',
    'yes',
    'as u like',
    'fine'
]

var WannaArr = [
    'how are you feeling today',
    'I am ready to help you sir do you want to upload on social media for this ',
    'now you are emotion is successfully lunch on social media',
    'I wanna typing',
    'ok you can tell me now '
]

    Reco.onstart = function()
    {
        console.log(' *** Voice is activating *** ');
    }

    Reco.onresult = function(event) {

        var ResultSpeech = event.results[0][0].transcript;
        console.log(ResultSpeech);
        LoudReading(ResultSpeech);
        // ResultSpeech = '';
        
    }


    $('#rec-btn').addClass("notrec");

        $('#rec-btn').click(function(){
            // if($('#rec-btn').hasClass('notrec')){
                $('#rec-btn').removeClass("notrec");
                $('#rec-btn').addClass("rec");

                Reco.start();

                // console.log('Machine is listening ......');


            // }else{
            //     Reco.stop();

            //     $('#rec-btn').removeClass("rec");
            //     $('#rec-btn').addClass("notrec");
            // }
        });	

    function LoudReading(TextSMS)
    
    {
        var voices = window.speechSynthesis.getVoices();
        const speech = new SpeechSynthesisUtterance();
        speech.default = false; 
        speech.volume =1;
        speech.text = TextSMS;
        speech.rate = 1;
        speech.pitch = 1;
        // speech.voice = voices[4].name;
        // console.log(voices);

        if (TextSMS == 'hi' || TextSMS == 'hello' || TextSMS == 'hi there') {
            speech.text = WelcomeArr[Math.floor(Math.random() * WelcomeArr.length)];
            Reco.stop();
            window.speechSynthesis.speak(speech);
            $('#rec-btn').removeClass("rec");
            $('#rec-btn').addClass("notrec");

        }else{

            if (TextSMS == 'I want to type' || TextSMS == 'I went to typing' || TextSMS == 'I wanna typing' || TextSMS == 'I want to feel') {
                speech.text = 'ok I am ready u can say now';
                Reco.stop();
                window.speechSynthesis.speak(speech);
                $('#rec-btn').removeClass("rec");
                $('#rec-btn').addClass("notrec");
                $('#PostName').focus();
                $('#PostName').attr('data-permission',1);
            }else{

                var confirm_post = parseInt($('#Emotion').attr('data-confirm'));
                if (confirm_post == 1 && TextSMS == 'okay' ) {

                    speech.text = WannaArr[2];

                    $('#rec-btn').removeClass("rec");
                    $('#rec-btn').addClass("notrec");
                    // $('#Emotion').val(TextSMS);
                    // $('#Emotion').focus();
                    // $('#Emotion').attr('data-confirm', 1);

                    window.speechSynthesis.speak(speech);
                    Reco.stop();
                    upload_ok(event);

                    $('#PostName').attr('data-permission', 0);
                    $('#PostName').attr('data-name-permission',0);
                    $('#Emotion').attr('data-confirm', 0);


                }


                var name_permission = parseInt($('#PostName').attr('data-name-permission'));

                if (name_permission == 1 && $('#PostName').val() != '') {

                    speech.text = WannaArr[1];

                    $('#rec-btn').removeClass("rec");
                    $('#rec-btn').addClass("notrec");
                    $('#Emotion').val(TextSMS);
                    $('#Emotion').focus();
                    $('#Emotion').attr('data-confirm', 1);

                    window.speechSynthesis.speak(speech);
                    Reco.stop();

                }

                var permission = parseInt($('#PostName').attr('data-permission'));

                if (permission == 1 && $('#PostName').val() == '' ) {

                    speech.text = WannaArr[0];

                    $('#rec-btn').removeClass("rec");
                    $('#rec-btn').addClass("notrec");
                    $('#PostName').val(TextSMS);
                    $('#Emotion').focus();
                    $('#PostName').attr('data-name-permission', 1);


                    window.speechSynthesis.speak(speech);
                    Reco.stop();
                    console.log('name fill');
                }

                $('#rec-btn').removeClass("rec");
                $('#rec-btn').addClass("notrec");
                console.log('Other >>> '+TextSMS);
                Reco.stop();                

            }

        }

        
        

        
    }
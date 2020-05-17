// const socket = io.connect('http://localhost:3001');
const socket = io.connect('http://192.168.100.19:3001');
// const SaveController = require('../../controllers/saveControllers');  //connect to {{ controller }}



$('.add-name').keyup(function(){

    var KeyupName = $(this).val();
    socket.emit('NameIsKeyupNow',{SendKeyupName:KeyupName});

});




    // $('.upload-ok').click(function (event) {

    //     event.preventDefault();
    
    //         let UploaderName = $('.add-name').val();
    //         var IncommingBuzzy = $('.buzzy-emotion').val();
    
    //         if ( UploaderName == '' ){
    //             alert('Plz fill your name');
    //         }else if(IncommingBuzzy == '') {
    //             alert('Type something');
    //         }else {
             
    
    //             $.post('/', {UploaderName:UploaderName,UploaderEmotion:IncommingBuzzy });
    //             // socket.emit('PostUploading', {UploaderName:UploaderName,UploaderEmotion:IncommingBuzzy});
                
    //             // console.log('Ready ' + UploaderName  + IncommingBuzzy);
    //         }
    
    // });




// Return Back From Server JS

    socket.on('ReturnClientSide', function(data){


        $("#modalLoginForm").removeClass("show");
        $("#modalLoginForm").css("display", "none");
        $("#modalLoginForm").removeAttr("aria-modal");
        $("#modalLoginForm").attr("aria-hidden", "true");
        $("body").removeClass("modal-open");
        $(".modal-backdrop").removeClass("modal-backdrop");
        $(".add-name").val('');
        $('.buzzy-emotion').val('');

        $('.post-card-out').append('<div class="col-md-8 col-sm-12 offset-md-2 my-2"><div class="post-card bg-milk rounded custom-shadow animated slideInUp ">' +
            '<img class="post-card-profile shadow-sm" src="/img/profiles/1.jpg" alt="user_profile">' +
            '<h4 class="d-inline-block ml-1 "><b >'+data.UploaderName+'</b></h4><p class="d-inline-block ml-3 text-muted">Aug 31, 2018</p><div class="card-text my-2">' +data.UploaderEmotion+
            '</div><div class="row mt-3"><div class="col-sm-4 "><i class="material-icons">favorite_border</i> 4</div></div></div></div>');

        // console.log()

    });

// Return Back From Server JS


